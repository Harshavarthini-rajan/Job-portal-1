import React, { useState } from 'react'
import './DetailedReport.css'
import { useNavigate } from 'react-router-dom';
import {FinancialReport} from './FinancialReport';
 
export const DetailedReport = ({SetMode}) => {
 
   
    const [activeTab, setActiveTab] = useState("Job and Application Report");
 
    return (
        <>
            <div>
                <div style={{display:"flex",alignItems:"center",gap:"45px", padding:"25px 15px"}}>
 
                <button style={{backgroundColor:'#1E88E5', padding:"5px 15px",borderRadius:"7px" ,color:"#fff",border:"none",cursor:"pointer"}}
      onClick={()=>SetMode("Reports and Analytics")}>Back</button>
               
                <div style={{marginLeft:"20px"}} >
                    <div style={{display:"flex", justifyContent:"space-evenly",gap:"25px", border:"1px solid rgba(0, 0, 0, 0.15)", padding:"28px 45px",borderRadius:"10px" }}>
                        <button
                        className={`Reports-select ${activeTab === "Job and Application Report" ? "Reports-active" : ""}`}
                        onClick={() => setActiveTab("Job and Application Report")}
                        >Job and Application Report</button>
                       
                        <button
                            className={`Reports-select ${activeTab === "Financial Report" ? "Reports-active" : ""}`}
                            onClick={() => setActiveTab("Financial Report")}
                        >Financial Report</button>
 
                        <button
                            className={`Reports-select ${activeTab === "User Registration" ? "Reports-active" : ""}`}
                            onClick={() => setActiveTab("User Registration")}
                        >User Registration</button>
                    </div>
                    </div>
                    </div>
 
                    {activeTab === "Job and Application Report" && (<h2>Job and Application Report</h2>)}
                    {activeTab === "Financial Report" && (<FinancialReport/>)}
                    {activeTab === "User Registration" && (<></>)}
               
            </div>
 
        </>
    );
};
 