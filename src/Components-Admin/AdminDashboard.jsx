import React, { useState } from 'react'
import "./AdminDashboard.css"
import Dashboard from '../assets/Employer/DashboardIC.png'
import DashboardInact from '../assets/Employer/Dashboard_Inactive.png'
import Usermanagement from '../assets/AdminAssets/UserManage.png'
import UserManagementACT from '../assets/AdminAssets/UserManageActive.png'
import RoleManagement from '../assets/AdminAssets/RoleManage.png'
import RoleManagementACT from '../assets/AdminAssets/RoleManageAct.png'
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
import Membership from '../assets/AdminAssets/Membership.png'
import MembershipAct from '../assets/AdminAssets/MembershipActive.png'
import { EHeader } from '../Components-Employer/EHeader'
import TotalJobs from '../assets/AdminAssets/TotalJobs.png'
import TotalEmployers from '../assets/AdminAssets/TotalEmployers.png'
import TotalJobseekers from '../assets/AdminAssets/TotalJobseeker.png'
import TotalCompanies from '../assets/AdminAssets/TotalCompanies.png'
import ViewMore from '../assets/AdminAssets/ViewMore.png'
import { TotalOverview } from './TotalOverview'
import { AdminUserManagement } from './UserManagement'
import { Footer } from '../Components-LandingPage/Footer'

export const AdminDashboard = () => {
    const [activetab, setActiveTab] = useState('Dashboard');

    return (
        <>
            <EHeader />
            <div className='AdminContainer'>
                {/* --- SIDEBAR SECTION --- */}
                <div className='Admin-Sidebar'>
                    <h2 style={{ textAlign: "center", marginTop: "35px" }}>Administrator</h2>
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

                        <div onClick={() => setActiveTab('User Management')} className={activetab === "User Management" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "User Management" ? <img src={UserManagementACT} width={15} height={15} alt="dashboard" />
                                    : <img src={Usermanagement} width={15} height={15} alt="User Management" />}
                                <div className='Enav-item'>User Management</div>
                            </div>
                        </div>

                        <div onClick={() => setActiveTab('Role Management')} className={activetab === "Role Management" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "Role Management" ? <img src={RoleManagementACT} width={15} height={15} alt="dashboard" />
                                    : <img src={RoleManagement} width={15} height={15} alt="Role Management" />}
                                <div className='Enav-item'>Role Management</div>
                            </div>
                        </div>

                        <div onClick={() => setActiveTab('Membership')} className={activetab === "Membership" ? "Admin-Active" : 'Admin-Navbar'}>
                            <div className='Admin-Navbox'>
                                {activetab === "Membership" ? <img src={MembershipAct} width={15} height={15} alt="dashboard" />
                                    : <img src={Membership} width={15} height={15} alt="Membership" />}
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
                                <div className='Enav-item'>settings</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- MAIN CONTENT SECTION --- */}
                <div className='Admin-MainSec'>
                    {activetab === 'Dashboard' && (
                        <div>
                            <div className='Admin-Welcome-Container'>
                                <p className='Admin-Welcome-Note'>Welcome Back, Admin</p>
                                <p className='Admin-Welcome-para'>Your team's success starts here. Let's make progress together!</p>
                            </div>

                            {/* Top Stats Overview */}
                            <div className='Admin-Overview'>
                                <div className='Admin-Overview-Container'>
                                    <div className='Admin-Overview-Data'>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
                                            <img src={TotalJobs} width={25} height={25} alt="Jobs" />
                                            <p style={{ fontSize: "30px", fontWeight: "700" }}>107</p>
                                        </div>
                                        <div><p style={{ fontWeight: "bold" }}>All Jobs</p></div>
                                    </div>
                                    <div className='Admin-Viewmore'>
                                        <p style={{ fontSize: "14px", fontWeight: "500" }}>View more</p>
                                        <img src={ViewMore} width={30} height={30} alt="Viewmore" />
                                    </div>
                                </div>

                                <div className='Admin-Overview-Container'>
                                    <div className='Admin-Overview-Data'>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <img src={TotalCompanies} width={25} height={25} alt="Companies" />
                                            <p style={{ fontSize: "30px", fontWeight: "700" }}>50</p>
                                        </div>
                                        <div><p style={{ fontWeight: "bold" }}>Total Companies</p></div>
                                    </div>
                                    <div className='Admin-Viewmore'>
                                        <p style={{ fontSize: "14px", fontWeight: "500" }}>View more</p>
                                        <img src={ViewMore} width={30} height={30} alt="Viewmore" />
                                    </div>
                                </div>

                                <div className='Admin-Overview-Container'>
                                    <div className='Admin-Overview-Data'>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <img src={TotalEmployers} width={25} height={25} alt="Employers" />
                                            <p style={{ fontSize: "30px", fontWeight: "700" }}>50</p>
                                        </div>
                                        <div><p style={{ fontWeight: "bold" }}>Total Employers</p></div>
                                    </div>
                                    <div className='Admin-Viewmore'>
                                        <p style={{ fontSize: "14px", fontWeight: "500" }}>View more</p>
                                        <img src={ViewMore} width={30} height={30} alt="Viewmore" />
                                    </div>
                                </div>

                                <div className='Admin-Overview-Container'>
                                    <div className='Admin-Overview-Data'>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <img src={TotalJobseekers} width={25} height={25} alt="Jobseekers" />
                                            <p style={{ fontSize: "30px", fontWeight: "700" }}>50</p>
                                        </div>
                                        <div><p style={{ fontWeight: "bold" }}>Total Jobseekers</p></div>
                                    </div>
                                    <div className='Admin-Viewmore'>
                                        <p style={{ fontSize: "14px", fontWeight: "500" }}>View more</p>
                                        <img src={ViewMore} width={30} height={30} alt="Viewmore" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Grid: Job Ads & Balance Section */}
                            <div className='dashboard-bottom'>
                                
                                {/* Job Ads */}
                                <div className='Admin-Job-Ads-Cont' style={{ flex: 1 }}>
                                    <div className="jobads-header">
                                        <h2>Your Job Ads</h2>
                                        <div className="jobads-buttons">
                                            <button className="view-btn">VIEW ALL</button>
                                            <button className="create-btn">Create Job Ad +</button>
                                        </div>
                                    </div>

                                    {/* Job Card 1 */}
                                    <div className="job-card">
                                        <div className="job-left">
                                            <p className="job-title">Investment ESG Analyst</p>
                                            <span className="job-under">W1</span>
                                        </div>
                                        <div className="job-right">
                                            <div className="job-box"><p className="job-number">185</p><span>New</span></div>
                                            <div className="job-box"><p className="job-number">0</p><span>Waiting</span></div>
                                            <div className="job-box"><p className="job-number">250</p><span>Total</span></div>
                                        </div>
                                    </div>

                                    {/* Job Card 2 */}
                                    <div className="job-card">
                                        <div className="job-left">
                                            <p className="job-title">Finance Analyst</p>
                                            <span className="job-under">W1</span>
                                        </div>
                                        <div className="job-right">
                                            <div className="job-box"><p className="job-number">120</p><span>New</span></div>
                                            <div className="job-box"><p className="job-number">20</p><span>Waiting</span></div>
                                            <div className="job-box"><p className="job-number">180</p><span>Total</span></div>
                                        </div>
                                    </div>

                                    {/* Job Card 3 */}
                                    <div className="job-card">
                                        <div className="job-left">
                                            <p className="job-title">Marketing Specialist</p>
                                            <span className="job-under">W1</span>
                                        </div>
                                        <div className="job-right">
                                            <div className="job-box"><p className="job-number">140</p><span>New</span></div> 
                                            <div className="job-box"><p className="job-number">15</p><span>Waiting</span></div>
                                            <div className="job-box"><p className="job-number">210</p><span>Total</span></div>
                                        </div>
                                    </div>
 
                                    {/* Job Card 4 */}
                                    <div className="job-card">
                                        <div className="job-left">
                                            <p className="job-title">Software Engineer</p>
                                            <span className="job-under">W1</span>
                                        </div>
                                        <div className="job-right"> 
                                            <div className="job-box"><p className="job-number">135</p><span>New</span></div>
                                            <div className="job-box"><p className="job-number">25</p><span>Waiting</span></div>
                                            <div className="job-box"><p className="job-number">200</p><span>Total</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chart Overview */}
                                <div className='Admin-overview-cont'>
                                    <TotalOverview />
                                </div>

                                <div className="right-cards">
                                    {/* Account Balance */}
                                    <div className="card account-card">
                                        <h3 className="Admin-acc-balance-title">Account Balance</h3>
                                        <div className="balance-row">
                                            <div><p className="amount">264</p><span>Purchased</span></div>
                                            <div className="divider"></div>
                                            <div><p className="amount">250</p><span>Remaining</span></div>
                                        </div>
                                        <p className="subscription">Subscription(s) <span className="link">Expiry Dates</span></p></div>

                                    {/* Video Resume */}
                                    <div className="card video-card">
                                        <h3 className='Admin-CV-title'>Video Resume & CV Database</h3>
                                        <p className="video-text">Buy 1 month Access online or <span className="link"> get in touch</span><br />with your account Manager </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activetab === 'Job Monitoring' && (<h3>Job Monitoring</h3>)}
                    {activetab === 'Activity Monitoring' && (<h3>Activity Monitoring</h3>)}
                    {activetab === 'User Management' && (<AdminUserManagement />)}
                    {activetab === 'Role Management' && (<h3>Role Management</h3>)}
                    {activetab === 'Membership' && (<h3>Membership</h3>)}
                    {activetab === 'Tickets' && (<h3>Tickets</h3>)}
                    {activetab === 'Reports' && (<h3>Reports</h3>)}
                    {activetab === 'settings' && (<h3>settings</h3>)}
                </div>
            </div>
            <Footer />
        </>
    )
}