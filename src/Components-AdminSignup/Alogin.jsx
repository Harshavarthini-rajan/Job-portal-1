import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import eye from '../assets/show_password.png'
import eyeHide from '../assets/eye-hide.png'
import './Alogin.css'

const countryList = [
  { code: "+91", name: "Ind" }, { code: "+1", name: "USA/Can" },
  { code: "+44", name: "UK" }, { code: "+61", name: "Aus" },
  { code: "+971", name: "UAE" }, { code: "+65", name: "SGP" },
  { code: "+49", name: "Ger" }, { code: "+33", name: "Fra" },
  { code: "+81", name: "Jpn" }, { code: "+86", name: "Chn" },
  { code: "+7", name: "Rus" }, { code: "+27", name: "SA" },
  { code: "+55", name: "Bra" }, { code: "+966", name: "Sau" },
  { code: "+60", name: "Mys" }, { code: "+64", name: "NZ" }
];

export const Alogin = () => {
  const [passwordShow, setPasswordShow] = useState(true)
  const [otpSent, setOtpSent] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) 
  const navigate = useNavigate()

  const initialValues = { username: "", password: "", phone: "", countryCode: "+91", otp: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    let interval;
    if (timer > 0) interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleForm = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    setErrors({ ...errors, [name]: "" })
    if (name === "countryCode") setIsDropdownOpen(false)
  }

  const generateOTP = () => {
    if (!/^\d{10}$/.test(formValues.phone)) {
      setErrors({ ...errors, phone: "Enter valid 10-digit number" });
      return;
    }
    setOtpSent(true);
    setTimer(60);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpSent && formValues.otp.length === 6) {
      navigate('/Job-portal/admin/dashboard');
    } else if (!otpSent) {
      generateOTP();
    }
  }

  const handleDirectLogin = () => {
    const newErrors = {};
    if (!formValues.username.trim()) newErrors.username = "Username required";
    if (!formValues.password.trim()) newErrors.password = "Password required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate('/Job-portal/admin/dashboard');
    }
  }

  return (
    <div className="adm-page-wrapper">
      <header className="adm-main-header">
        <Link to="/Job-portal" className="adm-logo-link">
          <span className="adm-logo-text">job portal</span>
          <span className='adm-logo-subtext'>Administrator</span>
        </Link>
        <div className="adm-headernavs">
          <Link to="/Job-portal/employer/login" className="adm-nav-item">Employers Login</Link>
          <div className="adm-nav-divider"></div>
          <Link to="/Job-portal/jobseeker/login" className="adm-nav-item">Jobseekers Login</Link>
        </div>
      </header>

      <div className="adm-body-container">
        <form onSubmit={handleSubmit} className="adm-login-card">
          <h2 className="adm-title">Admin</h2>
          <p className="adm-description">Enter your credentials to access the Admin Dashboard</p>

          <div className="adm-input-group">
            <label className="adm-field-label">Username</label>
            <input type="text" name="username" placeholder="Enter Admin ID / Username" value={formValues.username} onChange={handleForm} className={errors.username ? "adm-input-field adm-input-error" : "adm-input-field"} />
            {errors.username && <span className="adm-error-text">{errors.username}</span>}
          </div>

          <div className="adm-password-group">
            <label className="adm-field-label">Password</label>
            <div className="adm-password-wrapper">
              <input type={passwordShow ? "password" : "text"} name="password" placeholder="Enter Password" value={formValues.password} onChange={handleForm} className={errors.password ? "adm-input-field adm-input-error" : "adm-input-field"} />
              <span className="adm-eye-toggle" onClick={() => setPasswordShow(!passwordShow)}>
                <img src={passwordShow ? eye : eyeHide} className='adm-eye-icon' alt='toggle' />
              </span>
            </div>
            {errors.password && <span className="adm-error-text">{errors.password}</span>}
            <div className="adm-label-row">
                <label className="adm-remember"><input type="checkbox" /> Remember me</label>
                <Link to="/Job-portal/employer/login/forgotpassword" title="reset password" className='adm-forgot-link'>Forgot Password?</Link>
            </div>
          </div>

          <div className="adm-divider"> (or) Continue with</div>

          <div className="adm-input-group">
            <div className="adm-phone-container">
              <select 
                name="countryCode" 
                value={formValues.countryCode} 
                onChange={handleForm} 
                className="adm-country-select"
                size={isDropdownOpen ? 4 : 1} 
                onFocus={() => setIsDropdownOpen(true)}
                onBlur={() => setIsDropdownOpen(false)}
              >
                {countryList.map(c => <option key={c.code} value={c.code}>{c.code} ({c.name})</option>)}
              </select>
              <input type="tel" name="phone" placeholder="Phone Number" value={formValues.phone} onChange={handleForm} className={errors.phone ? "adm-input-field adm-phone-input adm-input-error" : "adm-input-field adm-phone-input"} />
            </div>
            {errors.phone && <span className="adm-error-text">{errors.phone}</span>}
          </div>

          {otpSent && (
            <div className="adm-otp-section adm-fade-in">
              <label className="adm-field-label">Verification OTP</label>
              <input type="text" name="otp" placeholder="6-Digit OTP" maxLength="6" value={formValues.otp} onChange={handleForm} className={errors.otp ? "adm-input-field adm-input-error" : "adm-input-field"} />
              <div className="adm-otp-timer">
                {timer > 0 ? `Resend in ${timer}s` : <span className="adm-resend-link" onClick={generateOTP}>Resend OTP</span>}
              </div>
            </div>
          )}

          <div className="adm-action-area">
            <button type="submit" className="adm-submit-button">{otpSent ? "Verify OTP" : "Send OTP to Mobile"}</button>
            <button type="button" className="adm-secondary-login-btn" onClick={handleDirectLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}