import React from "react";
import "./AdminMembership.css";
import Eye from '../assets/AdminAssets/EyeIcon.png';
import dots from '../assets/ThreeDots.png'
import Tick from '../assets/AdminAssets/Greentick.png';
import Delete from '../assets/AdminAssets/DeleteIcon.png';
import SixDots from '../assets/AdminAssets/SixDots.png';
import UPI from '../assets/AdminAssets/UpiIcon.png';
import Visa from '../assets/AdminAssets/VisaIcon.png';
import NetBanking from '../assets/AdminAssets/NetBankingIcon.png';
import Save from '../assets/AdminAssets/SaveDraft.png';
import Publish from '../assets/AdminAssets/PublishPlan.png';
import Link from '../assets/AdminAssets/LinkIcon.png';
import NumberList from '../assets/AdminAssets/NumberList.png';
import PointList from '../assets/AdminAssets/PointList.png';

export const AdminMembership = () => {
  return (
    <div className="membership-container">
      <div className="membership-header">
        <h1>Create Membership Plan</h1>
      </div>

      <div className="membership-content">
        <div className="form-sections">
          {/* Basic Details */}
          <section className="form-card">
            <div className="section-title">
              <span className="step-num">1</span> Basic plan details
            </div>
            <div className="row">
              <div className="input-group">
                <label>Plan name*</label>
                <input type="text" placeholder="Premier Employer Plan" />
              </div>
              <div className="input-group">
                <label>Plan type*</label>
                <select>
                  <option>Employer</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-group flex-2">
                <label>Description*</label>
                <div className="rich-text-editor">
                  <div className="editor-toolbar">
                    <div className="toolbar-left">
                      <span className="text-type">Normal </span>
                      <div className="vertical-divider"></div>
                      
                      <div className="format-group">
                        <button type="button" className="toolbar-btn bold-text">B</button>
                        <button type="button" className="toolbar-btn italic-text">I</button>
                        <button type="button" className="toolbar-btn underline-text">U</button>
                      </div>

                      <div className="vertical-divider"></div>

                      <div className="format-group">
                        <button type="button" className="toolbar-btn">
                          <img src={PointList} alt="points" className="toolbar-icon" />
                        </button>
                        <button type="button" className="toolbar-btn">
                          <img src={NumberList} alt="numbers" className="toolbar-icon" />
                        </button>
                      </div>

                      <div className="vertical-divider"></div>

                      <button type="button" className="toolbar-btn">
                        <img src={Link} alt="link" className="toolbar-icon-link" />
                      </button>
                    </div>
                  </div>
                  <textarea placeholder="A premium plan for employers to get the best exposure, more visibility and priority support."></textarea>
                </div>
              </div>
              <div className="input-group flex-1"><label>Plan status</label>
                <div className="status-dropdown">
                    <div className="status-content">
                        <span className="status-dot"></span>
                        <span className="status-text">Active</span>
                    </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="form-card">
            <div className="section-title">
              <span className="step-num">2</span> Pricing & Duration
            </div>
            <div className="row">
              <div className="input-group">
                <label>Price (₹)*</label>
                <input type="number" defaultValue="999" />
              </div>
              <div className="input-group">
                <label>Billing Cycle*</label>
                <select><option>Monthly</option></select>
              </div>
              <div className="input-group">
                <label>Duration (Days)*</label>
                <input type="number" defaultValue="30" />
              </div>
            </div>
            <div className="row align-center">
              <div className="input-group">
                <label>Discount (%)</label>
                <input type="number" defaultValue="10" />
              </div>
              <div className="input-group">
                <label>Tax (%)</label>
                <input type="number" defaultValue="18" />
              </div>
              <div className="total-payable">
                <p>Total Payable</p>
                <h3>₹ 1,078.20<span>/month</span></h3>
                <small>(incl. tax after discount)</small>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="form-card">
            <div className="section-title">
              <span className="step-num">3</span> Features & Limits
            </div>
            <table className="features-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Limit/Value</th>
                  <th>Included</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Number Of Jobs Post", val: "100" },
                  { label: "Featured Job Listings", val: "5" },
                  { label: "Resume Access Limit", val: "100" },
                  { label: "Applicant View Limit", val: "100" },
                  { label: "Priority Support", val: "Yes" },
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td><img src={SixDots} alt="" className="drag-dots" /> {item.label}</td>
                    <td><input type="text" defaultValue={item.val} /></td>
                    <td><div className="toggle-switch"></div></td>
                    <td><img src={Delete} className="delete-icon" alt="delete" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="add-feature-btn">+ Add Custom Features</button>
          </section>

          {/* Targeting */}
          <div className="form-card mini-section">
            <div className="section-title"><span className="step-num">4</span> Visibility & Targeting</div>
            <div className="row">
              <div className="input-group">
                <label>Show Plan to*</label>
                <select><option>Employers Only</option></select>
              </div>
              <div className="input-group">
                <label>Country / Region</label>
                <select><option>All Countries</option></select>
              </div>
              <div className="input-group">
                <label>Default Plan</label>
                <div className="toggle-switch"></div>
              </div>
            </div>
          </div>

          {/* Trial */}
          <div className="form-card mini-section">
            <div className="section-title"><span className="step-num">5</span> Trial Settings</div>
            <div className="row align-center">
              <div className="toggle-group">
                <span>Free Trial Available</span>
                <div className="toggle-switch"></div>
              </div>
              <div className="input-group">
                <label>Total Duration (Days)</label>
                <input type="number" defaultValue="7" />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="form-card">
            <div className="section-title"><span className="step-num">6</span> Payment Integration</div>
            <div className="payment-options">
               <div className="pay-card active">
                  <input type="checkbox" checked readOnly />
                  <span>UPI</span>
                  <img src={UPI} alt="upi" className="pay-icon" />
               </div>
               <div className="pay-card">
                  <input type="checkbox" />
                  <span>Credit / Debit Card</span>
                  <img src={Visa} alt="visa" className="pay-icon" />
               </div>
               <div className="pay-card">
                  <input type="checkbox" />
                  <span>Net Banking</span>
                  <img src={NetBanking} alt="bank" className="pay-icon" />
               </div>
            </div>
          </div>

          {/* Advanced */}
          <div className="form-card">
            <div className="section-title"><span className="step-num">7</span> Advanced Settings</div>
            <div className="row align-center">
              <div className="toggle-group">
                <span>Auto Renewal</span>
                <div className="toggle-switch"></div>
              </div>
              <div className="input-group">
                <label>Grace Period (Days)</label>
                <input type="number" defaultValue="7" />
              </div>
              <div className="input-group">
                <label>Plan Tags</label>
                <div className="tags-input">
                   <span className="tag">Popular ✕</span>
                   <span className="tag">Recommended ✕</span>
                   <span className="add-tag">+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn-save"><img src={Save} alt="" className="btn-icon" /> Save Draft</button>
            <button className="btn-publish"><img src={Publish} alt="" className="btn-icon" /> Publish Plan</button>
          </div>
        </div>

        <div className="preview-sidebar">
          <div className="preview-header">
            <img src={Eye} alt="" className="preview-eye" /> Preview Plan
          </div>
          <div className="preview-card">
            <div className="plan-badge">ENTERPRISE PLAN</div>
            <div className="plan-price">
              <h2>899 ₹<span>/month</span></h2>
              <p>Professional Plan</p>
              <div className="divider" ></div>
            </div>
            
            <ul className="plan-features">
              <li><img src={Tick} alt="" className="tick-icon" /> Unlimited Jobs Posting</li>
              <li><img src={Tick} alt="" className="tick-icon" /> Premium Employer Profile</li>
              <li><img src={Tick} alt="" className="tick-icon" /> Full Resume Database Access</li>
              <li><img src={Tick} alt="" className="tick-icon" /> Priority Support</li>
              <li><img src={Tick} alt="" className="tick-icon" /> Dedicated Account Manager</li>
              <li><img src={Tick} alt="" className="tick-icon" /> Advanced Analytics</li>
              <li><img src={Tick} alt="" className="tick-icon" /> Unlimited Candidate Search</li>
              <li><img src={Tick} alt="" className="tick-icon" /> Highlight Your Job Listing</li>
            </ul>
            <button className="btn-get-started">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};