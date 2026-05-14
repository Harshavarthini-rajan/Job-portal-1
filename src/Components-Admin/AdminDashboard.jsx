import React, { useState } from 'react'
import "./AdminDashboard.css"
import Dashboard from '../assets/Employer/DashboardIC.png'
import DashboardInact from '../assets/Employer/Dashboard_Inactive.png'
import UserManagements from '../assets/AdminAssets/UserManage.png'
import UserManagementACT from '../assets/AdminAssets/UserManageActive.png'
import RoleManagementIC from '../assets/AdminAssets/RoleManage.png'
import RoleManagementICACT from '../assets/AdminAssets/RoleManageAct.png'
import JobMonitor from '../assets/AdminAssets/JobMon.png'
import JobMonitorACT from '../assets/AdminAssets/JobMonActive.png'
import Report from '../assets/AdminAssets/AdminReport.png'
import ReportAct from '../assets/AdminAssets/ReportsActive.png'
import ActivityMon from '../assets/AdminAssets/ActivityMon.png'
import ActivityMonAct from '../assets/AdminAssets/ActivityMonAct.png'
import Tickets from '../assets/AdminAssets/Tickets.png'
import TicketsACT from '../assets/AdminAssets/TicketsActive.png'
import Settings from '../assets/AdminAssets/Settings.png'
import SettingsAct from '../assets/AdminAssets/SettingsActive.png'
import Memberships from '../assets/AdminAssets/Membership.png'
import MembershipsAct from '../assets/AdminAssets/MembershipActive.png'

import YellowProfile from '../assets/AdminAssets/YellowBGProfile.png'
import CensusDown from '../assets/AdminAssets/CENSUS_DOWN.png'
import CensusUp from '../assets/AdminAssets/CENSUS_UP.png'
import Revenue from '../assets/AdminAssets/Revenue.png'
import Application from '../assets/AdminAssets/TotalApplication.png'
import TotalJobsPosted from '../assets/AdminAssets/TotalJobsPosted.png'
import TotalSubscribers from '../assets/AdminAssets/TotalSubscribers.png'
import RightArrow from '../assets/AdminAssets/RightArrow.png'

import { AHeader } from './AHeader'
import TotalJobs from '../assets/AdminAssets/TotalJobs.png'
import TotalEmployers from '../assets/AdminAssets/TotalEmployers.png'
import TotalJobseekers from '../assets/AdminAssets/TotalJobseeker.png'
import TotalCompanies from '../assets/AdminAssets/TotalCompanies.png'
import ViewMore from '../assets/AdminAssets/ViewMore.png'
import { TotalOverview } from './TotalOverview'
import { AdminExperience } from './AdminExperience'
import { Calendar } from './Calender'
import { useJobs } from '../JobContext'
import { UserManagement } from './UserManagement'
import { ActivityMonitor } from './ActivityMonitor'
import { AdminReports } from './AdminReports'
import { JobMonitoring } from './JobMonitoring'
// import { RolePermission } from './RolePermission'
// import { RoleManagement } from './RoleManagement'
import { Membership } from './Membership'
import { AdminSettings } from './AdminSettings'
import { useNavigate } from 'react-router-dom'

export const AdminDashboard = () => {
    const { jobs, Alluser, currentEmployer } = useJobs();
    const [activetab, setActiveTab] = useState('Dashboard');
    const navigate = useNavigate();

    const overviewStats = [
        { label: 'All Jobs', count: jobs.length, icon: TotalJobs },
        { label: 'Total Companies', count: 50, icon: TotalCompanies },
        { label: 'Total Employers', count: 50, icon: TotalEmployers ,query:"Employers" },
        { label: 'Total Jobseekers', count: Alluser.length, icon: TotalJobseekers,query:"Jobseeker"  },
    ];

    const jobAds = [
        { title: "Investment ESG Analyst", code: "W1", new: 185, waiting: 0, total: 250 },
        { title: "Finance Analyst", code: "W1", new: 120, waiting: 20, total: 180 },
        { title: "Marketing Specialist", code: "W1", new: 140, waiting: 15, total: 210 },
        { title: "Software Engineer", code: "W1", new: 135, waiting: 25, total: 200 },
    ];


const handleViewMore = (stat) => {
    if (!stat.query) {
        return;
    }
    
    let roleQuery = '';
    if (stat.query === "Employers") {
        roleQuery = 'employer';
    } else if (stat.query === "Jobseeker") {
        roleQuery = 'candidate';
    }
    setActiveTab('User Management');
    navigate('/Job-portal/admin/Dashboard', { state: { filterRole: roleQuery } }); 
};
    return (
        <>
            <AHeader />
            <div className='AdminContainer'>
                <div className='Admin-Sidebar'>
                    <h2 style={{ textAlign: "center", marginTop: "35px" }}>Adminstrator</h2>
                    <div className='Admin-Sidebar-list'>

                        <div onClick={() => setActiveTab('Dashboard')} className={activetab === 'Dashboard' ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === 'Dashboard' ? <img src={Dashboard} width={15} height={15} alt="dashboard" />
                                    : <img src={DashboardInact} width={20} height={20} alt="dashboard" />}
                                <div className='Enav-item'>Dashboard</div>
                            </div>
                        </div>
                        <div onClick={() => setActiveTab("Job Monitoring")} className={activetab === "Job Monitoring" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "Job Monitoring" ? <img src={JobMonitorACT} width={15} height={15} alt="dashboard" />
                                    : <img src={JobMonitor} width={15} height={15} alt="Job Monitoring" />}
                                <div className='Enav-item'>Job Monitoring</div>
                            </div>
                        </div>
                        <div onClick={() => setActiveTab('Activity Monitoring')} className={activetab === "Activity Monitoring" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "Activity Monitoring" ? <img src={ActivityMonAct} width={15} height={15} alt="dashboard" />
                                    : <img src={ActivityMon} width={15} height={15} alt="Activity Monitoring" />}
                                <div className='Enav-item'>Activity Monitoring</div>
                            </div>
                        </div>
                        <div onClick={() => {setActiveTab('User Management'),navigate('/Job-portal/admin/Dashboard')}} className={activetab === "User Management" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "User Management" ? <img src={UserManagementACT} width={15} height={15} alt="dashboard" />
                                    : <img src={UserManagements} width={15} height={15} alt="User Management" />}
                                <div className='Enav-item'>User Management</div>
                            </div>
                        </div>
                        <div onClick={() => setActiveTab('Role Management')} className={activetab === "Role Management" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "Role Management" ? <img src={RoleManagementICACT} width={15} height={15} alt="dashboard" />
                                    : <img src={RoleManagementIC} width={15} height={15} alt="Role Management" />}
                                <div className='Enav-item'>Role Management</div>
                            </div>
                        </div>

                        <div onClick={() => setActiveTab('Membership')} className={activetab === "Membership" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "Membership" ? <img src={MembershipsAct} width={15} height={15} alt="dashboard" />
                                    : <img src={Memberships} width={15} height={15} alt="Membership" />}
                                <div className='Enav-item'>Membership</div>
                            </div>
                        </div>
                        <div onClick={() => setActiveTab('Tickets')} className={activetab === "Tickets" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "Tickets" ? <img src={TicketsACT} width={15} height={15} alt="dashboard" />
                                    : <img src={Tickets} width={15} height={15} alt="Tickets" />}
                                <div className='Enav-item'>Tickets</div>
                            </div>
                        </div>
                        <div onClick={() => setActiveTab('Reports')} className={activetab === "Reports" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "Reports" ? <img src={ReportAct} width={15} height={15} alt="dashboard" />
                                    : <img src={Report} width={15} height={15} alt="Reports" />}
                                <div className='Enav-item'>Reports</div>
                            </div>
                        </div>
                        <div onClick={() => setActiveTab('settings')} className={activetab === "settings" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "settings" ? <img src={SettingsAct} width={15} height={15} alt="dashboard" />
                                    : <img src={Settings} width={15} height={15} alt="settings" />}
                                <div className='Enav-item'>Settings</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='Admin-MainSec'>
                    {activetab === 'Dashboard' && (
                    <div>
                        <div className='Admin-Welcome-Container'>
                            <p className='Admin-Welcome-Note'>Welcome Back, Admin</p>
                            <p className='Admin-Welcome-para'>Your team’s success start here. lets make progress together!</p>
                        </div>
                              <div className='Admin-Reports-Overview'>
                        
                                <div className="admin-card-container">
                                  <div className="admin-card-header">
                                    <img src={YellowProfile} width={30} alt="New User" />
                                    <h3 className="admin-card-title">Total Users</h3>
                                  </div>
                        
                                  <hr className="admin-divider" />
                        
                                  <div className="admin-stats-row">
                                    <div className="admin-stat-value-group">
                                      <span style={{ fontSize: "16px" }}>245</span>
                                      <span style={{ fontSize: "14px" }}>Today</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                      <img src={CensusUp} width={10} alt="Up" />
                                      <span style={{ fontSize: "14px", paddingLeft: "5px", color: "#00C635" }}>8.2%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="admin-card-container">
                                  <div className="admin-card-header">
                                    <img src={TotalJobsPosted} width={30} alt="New User" />
                                    <h3 className="admin-card-title">Total Jobs Posted</h3>
                                  </div>
                        
                                  <hr className="admin-divider" />
                        
                                  <div className="admin-stats-row">
                                    <div className="admin-stat-value-group">
                                      <span style={{ fontSize: "16px" }}>245</span>
                                      <span style={{ fontSize: "14px" }}>Today</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                      <img src={CensusUp} width={10} alt="Up" />
                                      <span style={{ fontSize: "14px", paddingLeft: "5px", color: "#00C635" }}>8.2%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="admin-card-container">
                                  <div className="admin-card-header">
                        
                                    <img src={Application} width={30} alt="New User" />
                        
                                    <h3 className="admin-card-title">Total Applications</h3>
                                  </div>
                        
                                  <hr className="admin-divider" />
                        
                                  <div className="admin-stats-row">
                                    <div className="admin-stat-value-group">
                                      <span style={{ fontSize: "16px" }}>245</span>
                                      <span style={{ fontSize: "14px" }}>Today</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                      <img src={CensusDown} width={10} alt="Up" />
                                      <span style={{ fontSize: "14px", paddingLeft: "5px", color: "#F90C00" }}>4.2%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="admin-card-container">
                                  <div className="admin-card-header">
                        
                                    <img src={Revenue} width={30} alt="New User" />
                        
                                    <h3 className="admin-card-title">Totals Revenue</h3>
                                  </div>
                        
                                  <hr className="admin-divider" />
                        
                                  <div className="admin-stats-row">
                                    <div className="admin-stat-value-group">
                                      <span style={{ fontSize: "16px" }}>245</span>
                                      <span style={{ fontSize: "14px" }}>Today</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                      <img src={CensusUp} width={10} alt="Up" />
                                      <span style={{ fontSize: "14px", paddingLeft: "5px", color: "#00C635" }}>8.2%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="admin-card-container">
                                  <div className="admin-card-header">
                        
                                    <img src={TotalSubscribers} width={30} alt="New User" />
                        
                                    <h3 className="admin-card-title">Totals Subscribers</h3>
                                  </div>
                        
                                  <hr className="admin-divider" />
                        
                                  <div className="admin-stats-row">
                                    <div className="admin-stat-value-group">
                                      <span style={{ fontSize: "16px" }}>245</span>
                                      <span style={{ fontSize: "14px" }}>Today</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                      <img src={CensusUp} width={10} alt="Up" />
                                      <span style={{ fontSize: "14px", paddingLeft: "5px", color: "#00C635" }}>8.2%</span>
                                    </div>
                                  </div>
                                </div>
                        
                              </div>

                        <div className='Admin-Overview'>
                            {overviewStats.map((stat, index) => (
                                <div className='Admin-Overview-Container' key={index}>
                                    <div className='Admin-Overview-Data'>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
                                            <img src={stat.icon} width={25} height={25} alt={stat.label} />
                                            <p style={{ fontSize: "24px", fontWeight: "700", color: "#484848" }}>{stat.count}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: "bold", color: "#484848" }}>{stat.label}</p>
                                        </div>
                                    </div>
                                    <div className='Admin-Viewmore'>
                                        <p onClick={()=>handleViewMore(stat)}
                                        style={{ fontSize: "14px", fontWeight: "500" }  }>View more</p>
                                        <img  src={ViewMore} width={30} height={30} alt="Viewmore" />
                                    </div>
                                </div>
                            ))}
                        </div>
 
                        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                            <div className='Admin-Job-Ads-Cont'>
                                <div className="Admin-jobads-header">
                                    <h2>Your Job Ads</h2>
                                    <div className="Admin-jobads-buttons">
                                        <button className="Admin-create-btn">VIEW ALL</button>
                                        {/* <button className="Admin-create-btn">Create Job Ad +</button> */}
                                    </div>
                                </div>

                                {jobAds.map((job, index) => (
                                    <div className="Admin-job-card" key={index}>
                                        <div className="Admin-job-left">
                                            <p className="Admin-job-title">{job.title}</p>
                                            <span className="Admin-job-under">{job.code}</span>
                                        </div>
                                        <div className="Admin-job-right">
                                            <div className="Ads-Count-Cont">
                                                <p className="Ads-Count">{job.new}</p>
                                                <span>Highlighted</span>
                                            </div>
                                            <div className="Ads-Count-Cont">
                                                <p className="Ads-Count">{job.waiting}</p>
                                                <span>Non-Highlighted</span>
                                            </div>
                                            <div className="Ads-Count-Cont">
                                                <p className="Ads-Count">{job.total}</p>
                                                <span>Total</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        
                        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                            <div className='Admin-Experience'><AdminExperience /></div>
                            <div className='Admin-overview-cont'><TotalOverview /></div>
                        </div>
                    </div>
                    )}

                    {activetab === 'Job Monitoring' && <JobMonitoring />}
                    {activetab === 'Activity Monitoring' && (<ActivityMonitor />)}
                    {activetab === 'User Management' && (<UserManagement />)}
                    {activetab === 'Role Management' && (<RoleManagement />)}
                    {activetab === 'Membership' && (<Membership />)}
                    {activetab === 'Tickets' && (<h3>Tickets</h3>)}
                    {activetab === 'Reports' && (<AdminReports />)}
                    {activetab === 'settings' && (<AdminSettings />)}
                </div>
            </div>
        </>
    )
}