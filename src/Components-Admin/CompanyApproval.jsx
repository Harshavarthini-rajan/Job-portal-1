import React, { useState } from 'react';
import './CompanyApproval.css';
import threedots from '../assets/ThreeDots.png';

export const CompanyApproval = () => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const companiesData = [
    {
      id: 1,
      name: "Info Tech Developer",
      submittedBy: "Jerold Rubin",
      date: "11 February 2026",
      certificate: "Yes",
      verification: "Verified"
    },
    {
      id: 2,
      name: "Tech Innovate",
      submittedBy: "Deepika",
      date: "9 February 2026",
      certificate: "Yes",
      verification: "Verified"
    },
    {
      id: 3,
      name: "Sales Hub",
      submittedBy: "Nancy",
      date: "15 February 2026",
      certificate: "No",
      verification: "On Hold"
    },
    {
      id: 4,
      name: "Adhway Creations",
      submittedBy: "Praveen Raj",
      date: "3 March 2026",
      certificate: "Yes",
      verification: "Reject"
    },
    {
      id: 5,
      name: "R.K Global Solution",
      submittedBy: "Lakshmi",
      date: "9 March 2026",
      certificate: "No",
      verification: "On Hold"
    },
    {
      id: 6,
      name: "Insite Analytics",
      submittedBy: "Ibrahim",
      date: "12 March 2026",
      certificate: "No",
      verification: "Verified"
    },
    {
      id: 7,
      name: "Digital Solution",
      submittedBy: "Vishnu",
      date: "15 March 2026",
      certificate: "Yes",
      verification: "Reject"
    }
  ];

  const getVerificationClass = (status) => {
    switch (status) {
      case 'Verified': return 'status-verified';
      case 'On Hold': return 'status-hold';
      case 'Reject': return 'status-reject';
      default: return '';
    }
  };

  return (
    <div className="company-container">
      <h2 className="title">Company Approval</h2>

      <div className="table-wrapper">
        <table className="approval-table">
          <thead>
            <tr>
              <th>COMPANY NAME</th>
              <th>SUBMITTED BY</th>
              <th>DATE OF SUBMISSION</th>
              <th>CERTIFICATE</th>
              <th>VERIFICATION</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {companiesData.map((item) => (
              <tr key={item.id}>
                <td className="company-name">{item.name}</td>
                <td className="user-cell">
                  <div className="user-info">
                    <div className="avatar"></div>
                    <span>{item.submittedBy}</span>
                  </div>
                </td>
                <td className="date-cell">{item.date}</td>
                <td>
                  <span className={`badge ${item.certificate.toLowerCase()}`}>
                    {item.certificate}
                  </span>
                </td>
                <td className={`verification ${getVerificationClass(item.verification)}`}>
                  {item.verification}
                </td>
                <td className="actions">
                  <div className="menu-container">
                    <img src={threedots} alt="menu" className="three-dots-icon" onClick={() =>setOpenMenuId(openMenuId === item.id ? null : item.id)}/>
                    {openMenuId === item.id && (
                      <div className="dropdown">
                        <button onClick={() => console.log('Verified', item.id)}>Verified</button>
                        <button onClick={() => console.log('Rejected', item.id)}>Reject</button>
                        <button onClick={() => console.log('On Hold', item.id)}>On Hold</button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};