import React from 'react';
import './AdminMonitoring.css';
import NewUserReg from '../assets/AdminAssets/UserReg.png';
import JobPosted from '../assets/AdminAssets/JobPosted.png';
import TotalApplicants from '../assets/AdminAssets/TotalApp.png';
import ActiveEmployers from '../assets/AdminAssets/ActiveEmp.png';
import LoginToday from '../assets/AdminAssets/LoginToday.png';
import SuspiciousAct from '../assets/AdminAssets/SuspAct.png';
import Interviews from '../assets/AdminAssets/Interview.png';
import Rejections from '../assets/AdminAssets/Rejection.png';
import JobApproved from '../assets/AdminAssets/JobApp.png';
import ExpiredJobs from '../assets/AdminAssets/ExpiredJob.png';
import MessageSend from '../assets/AdminAssets/SendMessage.png';
import SupportTickets from '../assets/AdminAssets/SupTicket.png';
import EmailsSent from '../assets/AdminAssets/SentEmail.png';

const OverviewBox = ({ title, children }) => (
  <div className="monit-ov-card">
    <div className="monit-ov-header">{title}</div>
    <div className="monit-ov-body">{children}</div>
  </div>
);

const OverviewItem = ({ icon, label, value, color }) => (
  <div className="monit-ov-row">
    <img src={icon} alt="" className="monit-ov-icon" />
    <span className="monit-ov-label" style={{ color: color }}>{label}</span>
    <span className="monit-ov-value">{value}</span>
  </div>
);

export const AdminMonitoring = () => {
  return (
    <div className="monit-dashboard-wrapper">

      {/* Admin Activity Monitoring  */}
      <section className="monit-main-section">
        <h3 className="monit-section-title">Admin Activity Monitoring</h3>
        <div className="monit-stats-container">
          <div className="monit-stat-tile">
            <div className="monit-tile-head"><img src={NewUserReg} alt="" /> New User Registrations </div>
            <div className="monit-tile-split">
              <div className="monit-split-data"><strong>245</strong> Today <div className="monit-bar-indicator bg-success"></div></div>
              <div className="monit-split-data"><strong>1820</strong> This week <div className="monit-bar-indicator bg-warning-dim"></div></div>
            </div>
          </div>

          <div className="monit-stat-tile">
            <div className="monit-tile-head"><img src={JobPosted} alt="" /> Job Posted </div>
            <div className="monit-tile-split">
              <div className="monit-split-data"><strong>178</strong> Today <div className="monit-bar-indicator bg-success"></div></div>
              <div className="monit-split-data"><strong>975</strong> This week <div className="monit-bar-indicator bg-danger"></div></div>
            </div>
          </div>
            
          <div className="monit-stat-tile">
            <div className="monit-tile-head"><img src={TotalApplicants} alt="" /> Total Applications</div>
            <div className="monit-tile-split">
              <div className="monit-split-data"><strong>1420</strong> Today <div className="monit-bar-indicator bg-success"></div></div>
              <div className="monit-split-data"><strong>975</strong> This week <div className="monit-bar-indicator bg-warning-dim"></div></div>
            </div>
          </div>
            
          <div className="monit-stat-tile">
            <div className="monit-tile-head"><img src={ActiveEmployers} alt="" /> Active Employers</div>
            <div className="monit-tile-split">
              <div className="monit-split-data"><strong>312</strong> Online <div className="monit-bar-indicator bg-success"></div></div>
              <div className="monit-split-data"><strong>54</strong> Inactive <div className="monit-bar-indicator bg-danger"></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Activity Overview */}
      <section className="monit-main-section">
        <h3 className="monit-section-title">Platform Activity Overview</h3>
        <div className="monit-grid-layout">
          <OverviewBox title="User Activity">
            <OverviewItem icon={LoginToday} label="Login Today" value="530" />
            <OverviewItem icon={NewUserReg} label="Profile Update" value="134" />
            <OverviewItem icon={SuspiciousAct} label="Suspicious Activities" value="13" />
          </OverviewBox>

          <OverviewBox title="Application Status">
            <div className="monit-box-meta">Total Applications : 8350</div>
            <OverviewItem icon={TotalApplicants} label="Shortlisted" value="450" />
            <OverviewItem icon={Interviews} label="Interviews" value="310" />
            <OverviewItem icon={Rejections} label="Rejections" value="31" />
          </OverviewBox>

          <OverviewBox title="Employer Activity">
            <OverviewItem icon={TotalApplicants} label="New Employers" value="45" />
            <OverviewItem icon={JobPosted} label="Job Postings" value="92" />
            <OverviewItem icon={SuspiciousAct} label="Rejected Jobs" value="05" />
          </OverviewBox>
        </div>
      </section>

      {/* Job & Communication */}
      <section className="monit-main-section">
        <h3 className="monit-section-title">Job & Communication</h3>
        <div className="monit-grid-layout">
          <OverviewBox title="Job Tracking">
            <OverviewItem icon={TotalApplicants} label="Job Posted" value="178" />
            <OverviewItem icon={JobApproved} label="Job Approved" value="165" />
            <OverviewItem icon={ExpiredJobs} label="Expired Jobs" value="34" />
          </OverviewBox>

          <OverviewBox title="Communication Logs">
            <OverviewItem icon={MessageSend} label="Message send" value="312" />
            <OverviewItem icon={SupportTickets} label="Support Tickets" value="28" />
            <OverviewItem icon={EmailsSent} label="Emails sent" value="40" />
          </OverviewBox>

          <OverviewBox title="Employer Activity">
            <ul className="monit-action-list">
              <li>Applications last 2 days <span className="list-val">09</span></li>
              <li>Applications last Weeks <span className="list-val">55</span></li>
              <li>Applications last Month <span className="list-val">232</span></li>
            </ul>
          </OverviewBox>
        </div>
      </section>
    </div>
  );
};