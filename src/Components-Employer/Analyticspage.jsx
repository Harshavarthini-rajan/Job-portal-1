import React, { useMemo } from "react";
import "./Analytics.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip } from "chart.js";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, LabelList } from "recharts";
import { useJobs } from "../JobContext";

ChartJS.register(ArcElement, ChartTooltip);

export const Analyticspage = () => {
  const { jobs, Alluser, currentEmployer } = useJobs();
  const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
  

  // --- 1. APPLICANTS OVERVIEW (AREA CHART) DATA ---
  const dynamicLineData = useMemo(() => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthShorts = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const today = new Date();
  const currentMonthIdx = today.getMonth();

  const targetMonths = [2, 1, 0].map(offset => {
    let idx = currentMonthIdx - offset;
    if (idx < 0) idx += 12;

    return {
      full: monthNames[idx],
      short: monthShorts[idx],
      num: idx + 1
    };
  });

  const stages = [
    { key: "Total applicants", status: ["Application Submitted", "Resume Screening", "Recruiter Review", "Shortlisted", "Interview Called"] },
    { key: "Application reviewed", status: ["Resume Screening", "Recruiter Review"] },
    { key: "Shortlisted", status: ["Shortlisted"] },
    { key: "Interview called", status: ["Interview Called"] }
  ];

  if (!currentEmployer?.jobPosted || !Alluser) return [];

  const employerJobIds = currentEmployer.jobPosted.map(job => String(job.id));

  return stages.map(stage => {
    const row = { stage: stage.key };

    targetMonths.forEach(m => {
      row[m.full] = Alluser.reduce((acc, user) => {
        const matchingApplications = user.appliedJobs?.filter(aj => {
          const isOurJob = employerJobIds.includes(String(aj.id));

          const isCorrectStatus = stage.status.some(s =>
            aj.status?.trim().toLowerCase() === s.trim().toLowerCase()
          );

          const dateStr = aj.appliedDate || "";
          const isCorrectMonth =
            dateStr.includes(m.short) ||
            dateStr.includes("/" + m.num + "/") ||
            dateStr.includes("0" + m.num);

          return isOurJob && isCorrectStatus && isCorrectMonth;
        });

        return acc + (matchingApplications?.length || 0);
      }, 0);
    });

    return row;
  });
  }, [Alluser, currentEmployer]);
  
  const tooltipSorter = (item) => {
    const order = { "January": 1, "February": 2, "March": 3 };
    return order[item.name] || 99;
  };

  // --- 2. JOB STATUS (DOUGHNUT) DATA ---
  const dynamicStatusData = useMemo(() => {
    const counts = { progress: 0, reviewing: 0, done: 0 };
    const jobList = currentEmployer?.jobPosted || [];
    
    jobList.forEach(job => {
      if (job.jobStatus?.type === 'progress') counts.progress++;
      if (job.jobStatus?.type === 'reviewing') counts.reviewing++;
      if (job.jobStatus?.type === 'done') counts.done++;
    });
    return [counts.progress, counts.reviewing, counts.done];
  }, [currentEmployer]);

  const totalJobs = dynamicStatusData.reduce((a, b) => a + b, 0);

  const doughnutData = {
    labels: ["Hiring in progress", "Reviewing application", "Hiring done"],
    datasets: [{
      data: totalJobs === 0 ? [1] : dynamicStatusData,
      backgroundColor: totalJobs === 0 ? ["#f0f0f0"] : ["#f4c542", "#7b61ff", "#22c55e"],
      borderWidth: 0,
    }],
  };

  // --- 3. EXPERIENCE LEVELS (BAR CHART) DATA ---
  const dynamicBarData = useMemo(() => {
    const bins = { "15-20+": {}, "10-15": {}, "5-10": {}, "1-5": {}, "Fresher": {} };
    const employerJobIds = currentEmployer?.jobPosted?.map(job => job.id) || [];

    Alluser.forEach(user => {
      const relevantApps = user.appliedJobs?.filter(aj => 
        employerJobIds.includes(aj.id)
      ) || [];

      if (relevantApps.length > 0) {
        const expValue = user.currentDetails?.experience; 
        const expNum = parseInt(expValue);

        relevantApps.forEach(app => {
          const appliedDateStr = app.appliedDate || "";
          let mKey = "";
          if (appliedDateStr.includes("Jan")) mKey = "Jan";
          else if (appliedDateStr.includes("Feb")) mKey = "Feb";
          else if (appliedDateStr.includes("Mar")) mKey = "Mar";

          let category = "Fresher";
          if (expValue !== "Fresher" && !isNaN(expNum)) {
            if (expNum > 15) category = "15-20+";
            else if (expNum > 10) category = "10-15";
            else if (expNum > 5) category = "5-10";
            else if (expNum >= 1) category = "1-5";
          }

          if (mKey && bins[category]) {
            bins[category][mKey] = (bins[category][mKey] || 0) + 1;
          }
        });
      }
    });

    return Object.keys(bins).map(key => ({
      name: key,
      Jan: bins[key].Jan || 0,
      Feb: bins[key].Feb || 0,
      Mar: bins[key].Mar || 0
    }));
  }, [Alluser, currentEmployer]);

  const TriangleDot = (props) => {
    const { cx, cy, stroke } = props;
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} viewBox="0 0 20 20">
        <path d="M 10 2 L 18 16 L 2 16 Z" fill={stroke} fillOpacity={0.2} stroke="none" />
        <path d="M 10 4 L 16 14 L 4 14 Z" fill={stroke} stroke="none" />
      </svg>
    );
  };

  return (
    <div className="analytics-page">
      <div className="title-banner">
        <h1 className="page-title">Analytics</h1>
      </div>

      <div className="analytics-content">
        <div className="card line-card">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
            data={dynamicLineData}
            margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
          >
            <defs>
              {dynamicLineData[0] && Object.keys(dynamicLineData[0]).filter(k => k !== "stage")
              .map((_, index) => {
                const colors = ["#7b61ff", "#ff6b6b", "#00bcd4"];
                return (
                <linearGradient key={index} id={`color${index}`} x1="0" y1="0"x2="0" y2="1">
                  <stop offset="5%" stopColor={colors[index]} stopOpacity={0.1} />
                  <stop offset="95%" stopColor={colors[index]} stopOpacity={0} />
                </linearGradient>
              );
              })}
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
            <XAxis dataKey="stage" scale="point" 
            padding={{ left: 50, right: 50 }}
            tick={{ fontSize: 18, fill: "#000000", fontWeight: "400" }}
            axisLine={{ stroke: "#000", strokeWidth: 0.5 }}
            tickLine={false}
            />

            <YAxis
            tick={{ fontSize: 16, fill: "#000000", fontWeight: "400" }}
            axisLine={{ stroke: "#000", strokeWidth: 0.5 }}
            tickLine={false}
            />
            <Tooltip itemSorter={tooltipSorter} />

            {dynamicLineData[0] && Object.keys(dynamicLineData[0])
            .filter(k => k !== "stage")
            .map((month, index) => {
              const colors = ["#7b61ff", "#ff6b6b", "#00bcd4"];
              return (
              <Area key={month} type="monotone" dataKey={month}
              stroke={colors[index]}
              fill={`url(#color${index})`}
              strokeWidth={2}
              dot={<TriangleDot stroke={colors[index]} />}
              />
            );
          })}
          </AreaChart>
          </ResponsiveContainer>
        <div className="custom-legend-horizontal">
            {dynamicLineData[0] && Object.keys(dynamicLineData[0])
            .filter(k => k !== "stage")
            .map((month, i) => (
            <div className="legend-item" key={month}>
              <span className={`triangle-legend color-${i}`}></span>
              {month.slice(0, 3)}
          </div>
        ))}
        </div>
        <p className="chart-label">Applicants overview</p>
        </div>

        {/* Doughnut Chart for Posted Job Status */}
        <div className="bottom-row">
          <div className="card doughnut-card">
            <div className="doughnut-wrapper">
              <Doughnut 
                data={doughnutData} 
                options={{ 
                  cutout: "75%", 
                  maintainAspectRatio: false, 
                  plugins: { 
                    legend: { display: false },
                    tooltip: { enabled: totalJobs > 0 }
                  } 
                }} 
              />
              <div className="doughnut-center-text" style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>
                {currentMonth}
              </div>
            </div>
            <div className="doughnut-legend-container">
              {doughnutData.labels.map((label, i) => (
                <div className="legend-row" key={label}>
                  <span className={`square ${['yellow', 'purple', 'green'][i]}`}></span>
                  <span className="legend-text" style={{ color: '#000', fontWeight: '400' }}>
                    {label}: <strong>{dynamicStatusData[i]}</strong>
                  </span>
                </div>
              ))}
            </div>
            <p className="chart-label">Posted job status</p>
          </div>

          {/* Bar Chart for Experience Levels */}
          <div className="card bar-card">
            <ResponsiveContainer width="110%" height={400}>
              <BarChart layout="vertical" data={dynamicBarData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e0e0e0" />
                <XAxis type="number" hide />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fontSize: 14, fill: "#000", fontWeight: "400" }} 
                  width={100} 
                  axisLine={{ stroke: '#000', strokeWidth: 0.5 }}
                />
                <Tooltip />
                <Bar dataKey="Jan" fill="#7b61ff" radius={[0, 4, 4, 0]} barSize={8}><LabelList dataKey="Jan" position="right" fontSize={12} fill="#000" fontWeight="bold"/></Bar>
                <Bar dataKey="Feb" fill="#ff6b6b" radius={[0, 4, 4, 0]} barSize={8}><LabelList dataKey="Feb" position="right" fontSize={12} fill="#000" fontWeight="bold"/></Bar>
                <Bar dataKey="Mar" fill="#00bcd4" radius={[0, 4, 4, 0]} barSize={8}><LabelList dataKey="Mar" position="right" fontSize={12} fill="#000" fontWeight="bold"/></Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="custom-legend-horizontal">
               <div className="legend-item"><span className="square jan"></span> Jan</div>
               <div className="legend-item"><span className="square feb"></span> Feb</div>
               <div className="legend-item"><span className="square mar"></span> Mar</div>
            </div>
            <p className="chart-label">Experience levels </p>
          </div> 
        </div>
      </div>
    </div>
  );
};