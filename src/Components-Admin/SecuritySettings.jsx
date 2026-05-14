import React, { useState } from "react"; 
import "./SecuritySettings.css";
import MacBookPro from '../assets/AdminAssets/ChromeIcon.png';
import iPhone15Pro from '../assets/AdminAssets/AppIcon.png';
import DellXps from '../assets/AdminAssets/EdgeIcon.png';
import Logout from '../assets/AdminAssets/TerminateButton.png';
import Mfa from '../assets/AdminAssets/MfaSetting.png';
import AuthenticatorApp from '../assets/AdminAssets/Authenticator.png';
import Sms from '../assets/AdminAssets/SmsVerify.png';
import VerifyTick from '../assets/AdminAssets/VerifyIcon.png';
import PasswordKey from '../assets/AdminAssets/PasswordKey.png';
 
export const SecuritySettings = () => { 
  const [showModal, setShowModal] = useState(false);
  const [passLength, setPassLength] = useState(14);
  const [expiry, setExpiry] = useState("30 Days");
  const [toggles, setToggles] = useState({ special: true, mixed: true });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="sec-infra-wrapper">
      <div className="sec-infra-inner">
        <header className="sec-infra-header">
          <h1 className="sec-infra-main-title">Security Infrastructure</h1>
          <p className="sec-infra-subtitle">Manage active sessions, MFA settings and password policies</p>
          <div className="sec-infra-divider"></div>
        </header>

        <div className="sec-infra-top-grid">
          <section className="sec-infra-card sec-infra-sessions-area">
            <div className="sec-infra-flex-header">
              <div className="sec-infra-title-grp">
                <h2 className="sec-infra-card-title">Active Sessions</h2>
                <span className="sec-infra-badge-telemetry">REAL-TIME TELEMETRY</span>
              </div>
              <button className="sec-infra-btn-terminate">TERMINATE ALL OTHER SESSIONS</button>
            </div>
            
            <div className="sec-infra-table-container">
              <table className="sec-infra-table">
                <thead>
                  <tr>
                    <th>DEVICE / BROWSER</th>
                    <th>IP ADDRESS</th>
                    <th>LOCATION</th>
                    <th>LAST ACTIVE</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="sec-infra-device-cell">
                      <img src={MacBookPro} alt="Chrome" />
                      <div>
                        <span className="sec-infra-dev-text">MacBook Pro (Chrome)</span>
                        <p className="sec-infra-dev-sub">CURRENT SESSION</p>
                      </div>
                    </td>
                    <td>192.168.1.104</td>
                    <td>San Francisco, USA</td>
                    <td className="sec-infra-status-active">Active Now</td>
                    <td></td>
                  </tr>
                  <tr className="sec-infra-row-alt">
                    <td className="sec-infra-device-cell">
                      <img src={iPhone15Pro} alt="App" />
                      <div>
                        <span className="sec-infra-dev-text">iPhone 15 Pro (App)</span>
                        <p className="sec-infra-dev-sub">MOBILE NATIVE</p>
                      </div>
                    </td>
                    <td>172.24.55.12</td>
                    <td>London, UK</td>
                    <td>22 mins ago</td>
                    <td><img src={Logout} className="sec-infra-icon-action" alt="Logout" /></td>
                  </tr>
                  <tr>
                    <td className="sec-infra-device-cell">
                      <img src={DellXps} alt="Edge" />
                      <div>
                        <span className="sec-infra-dev-text">Dell XPS (Edge)</span>
                        <p className="sec-infra-dev-sub">WORKSTATION</p>
                      </div>
                    </td>
                    <td>10.8.8.45</td>
                    <td>Berlin, DE</td>
                    <td>4 hours ago</td>
                    <td><img src={Logout} className="sec-infra-icon-action" alt="Logout" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <aside className="sec-infra-card sec-infra-mfa-sidebar">
            <div className="sec-infra-flex-header">
              <h2 className="sec-infra-icon-title"><img src={Mfa} alt="" /> MFA Settings</h2>
              <span className="sec-infra-badge-req">REQUIRED</span>
            </div>
            <p className="sec-infra-mfa-desc">Strengthen infrastructure access by requiring secondary authentication.</p>
            
            <div className="sec-infra-mfa-card">
              <img src={AuthenticatorApp} className="sec-infra-mfa-img" alt="" />
              <div className="sec-infra-mfa-info">
                <span className="sec-infra-mfa-label">Authenticator Apps</span>
                <p>TOTP (Google, Authy)</p>
              </div>
              <span className="sec-infra-link-blue">SETUP</span>
            </div>

            <div className="sec-infra-mfa-card">
              <img src={Sms} className="sec-infra-mfa-img" alt="" />
              <div className="sec-infra-mfa-info">
                <span className="sec-infra-mfa-label">SMS Verification</span>
                <p>+1 (***) ***-4921</p>
              </div>
              <img src={VerifyTick} className="sec-infra-tick" alt="Verified" />
            </div>

            <div className="sec-infra-trusted-sec">
              <h4 className="sec-infra-small-title">TRUSTED DEVICES</h4>
              <div className="sec-infra-trusted-row">
                <span>Admin iPad Pro 12.9"</span>
                <span className="sec-infra-link-red">REVOKE</span>
              </div>
              <div className="sec-infra-trusted-row">
                <span>Sec-Ops Workstation 04</span>
                <span className="sec-infra-link-red">REVOKE</span>
              </div>
            </div>
          </aside>
        </div>

        <section className="sec-infra-card sec-infra-full-width">
          <div className="sec-infra-flex-header">
            <h2 className="sec-infra-icon-title"><img src={PasswordKey} alt="" /> Password Policies</h2>
            <span className="sec-infra-badge-active">ACTIVE ENFORCEMENT</span>
          </div>
          
          <div className="sec-infra-password-content">
            <div className="sec-infra-pass-controls">
              <div className="sec-infra-range-wrap">
                <div className="sec-infra-range-top">
                  <label>MINIMUM CHARACTER LENGTH</label>
                  <span className="sec-infra-big-digit">{passLength}</span>
                </div>
                <input 
                  type="range" 
                  min="8" 
                  max="64" 
                  value={passLength} 
                  onChange={(e) => setPassLength(e.target.value)}
                  className="sec-infra-slider"
                />
                <div className="sec-infra-range-bottom">
                  <span>8 Characters</span>
                  <span>64 Characters</span>
                </div>
              </div>

              <div className="sec-infra-interval-wrap">
                <label className="sec-infra-field-label">EXPIRATION INTERVAL</label>
                <div className="sec-infra-btn-group">
                  {["30 Days", "90 Days"].map(val => (
                    <button 
                      key={val}
                      className={`sec-infra-period-btn ${expiry === val ? 'is-active' : ''}`}
                      onClick={() => setExpiry(val)}
                    >
                      {val}
                    </button>
                  ))}
                  <button 
                    className={`sec-infra-period-btn ${expiry !== "30 Days" && expiry !== "90 Days" ? 'is-active' : ''}`}
                    onClick={() => setShowModal(true)}
                  >
                    {expiry !== "30 Days" && expiry !== "90 Days" ? expiry : "Custom"}
                  </button>
                </div>
              </div>
            </div>

            <div className="sec-infra-pass-toggles">
              <div className="sec-infra-toggle-item">
                <div>
                  <span className="sec-infra-toggle-txt">Special Characters</span>
                  <p className="sec-infra-toggle-sub">Include Symbols (!@#$)</p>
                </div>
                <div 
                  className={`sec-infra-switch ${toggles.special ? 'is-on' : ''}`} 
                  onClick={() => handleToggle('special')}
                >
                  <div className="sec-infra-switch-handle"></div>
                </div>
              </div>

              <div className="sec-infra-toggle-item">
                <div>
                  <span className="sec-infra-toggle-txt">Mixed-Case</span>
                  <p className="sec-infra-toggle-sub">Upper & Lower case</p>
                </div>
                <div 
                  className={`sec-infra-switch ${toggles.mixed ? 'is-on' : ''}`} 
                  onClick={() => handleToggle('mixed')}
                >
                  <div className="sec-infra-switch-handle"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {showModal && (
        <div className="sec-infra-modal-overlay">
          <div className="sec-infra-modal">
            <h2>Custom Expiration Interval</h2>
            <p>Specify the number of days before a user is prompted to change their password. This applies to all non-privileged user accounts.</p>
            <div className="sec-infra-input-group">
              <label>NUMBER OF DAYS</label>
              <input type="number" id="customDays" placeholder="e.g. 45" />
            </div>
            <div className="sec-infra-modal-footer">
              <button className="sec-infra-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="sec-infra-btn-apply" onClick={() => {
                const val = document.getElementById('customDays').value;
                if(val) setExpiry(`${val} Days`);
                setShowModal(false);
              }}>Apply Interval</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};