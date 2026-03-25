import React from "react";
import "./Billings.css";
import Deletebutton from '../assets/DeleteIcon.png'
import Invoice from '../assets/resume_icon.png'
import { useJobs } from "../JobContext";

export const Billings = () => {

  const { currentEmployer } = useJobs();

  // Dummy billing data (can move to context later)
  const billingHistory = [
    { plan: "Premium / Enterprise", date: "March 10, 2026", price: 4999, status: "ACTIVE" },
    { plan: "Pro / Standard +", date: "February 10, 2026", price: 1999, status: "EXPIRED" },
    { plan: "Pro / Standard", date: "January 10, 2026", price: 1299, status: "EXPIRED" },
    { plan: "Basic / Starter", date: "December 10, 2026", price: 699, status: "EXPIRED" },
    { plan: "Free / Freemium", date: "December 10, 2026", price: 0, status: "CANCELLED" },
    { plan: "Free / Freemium", date: "November 10, 2026", price: 0, status: "EXPIRED" }
  ];

  return (
    <div className="billing-container">

      <div className="billing-header">
        <h2>Plans & Billing</h2>
        <p>Manage your details and personal preferences here</p>
      </div>

      <div className="current-plan">
        <div>
          <h3>
            Premium / Enterprise
            <span className="active-badge">ACTIVE</span>
          </h3>
          <p>
            Providing the core tools and services you need at an affordable price
          </p>
          <p><b>Company:</b> {currentEmployer.company}</p>
        </div>

        <div className="plan-actions">
          <h3>₹ 4999/month</h3>
          <button className="cancel-btn">Cancel Plan</button>
          <button className="upgrade-btn">Upgrade Plan</button>
        </div>
      </div>

      {/* Cards */}
      <div className="billing-cards">

        <div className="card">
          <h4>Next Invoices</h4>
          <h2>₹ 4999/-</h2>
          <p>Plan Type : Premium / Enterprise (Monthly)</p>
          <p>Next Invoice : April 10, 2026</p>
        </div>

        <div className="card">
          <h4>Payment Method</h4>
          <h3>**** 8721</h3>
          <p>Name Card : {currentEmployer.hrName}</p>
          <p>Expired Date : 12/2026</p>

          <div className="card-actions">
            <button className="change-btn">Change Card</button>
            <button className="delete-btn">
              <img src={Deletebutton} alt="Delete" />
            </button>
          </div>
        </div>

      </div>

      {/* Billing History */}
      <div className="billing-history">

        <div className="history-header">
          <h4>BILLING HISTORY</h4>
          <span className="view-history">View history</span>
        </div>

        <table>
          <thead>
            <tr>
              <th>PLAN</th>
              <th>DATE</th>
              <th>PRICE</th>
              <th>STATUS</th>
              <th>INVOICE</th>
            </tr>
          </thead>

          <tbody>
            {billingHistory.map((item, index) => (
              <tr key={index}>
                <td>{item.plan}</td>
                <td>{item.date}</td>
                <td>₹ {item.price}/-</td>
                <td>
                  <span className={`status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>#1834 </td>
                 <button className="invoice-btn">
                    <img src={Invoice} alt="Invoice" />
                </button>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
};