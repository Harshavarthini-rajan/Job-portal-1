import React from 'react'
import './AHeader.css'
import search from '../assets/icon_search.png'
import bell from '../assets/header_bell_dot.png'
import profile from '../assets/header_profile.png'
import { Link, NavLink } from 'react-router-dom'
import { Divider } from '@mui/material'


export const AHeader = () => {
    const NavIcons = [
        { image: bell, path: "" },

    ]
    return (
        <header className="header">
                    <Link to="/Job-portal" className="logo">
                      <div className="logo-container">
                        <h2 className="logo">job portal</h2>
                        <span className="a-subtext">Administrator</span>
                      </div>
                    </Link>
            <div className='a-Header-search'>
                <img className="a-searchicon" src={search} alt="search icon" />
                <input className="a-input" type="text" placeholder='Search' />
            </div>

            <div className="a-auth-links">
                {NavIcons.map((IC, index) => {
                    const isActive = Location.pathname === IC.path
                    return (
                        <Link key={index} to={IC.path}><img className={isActive ? 'a-header-icons-active' : 'a-header-icons'} src={IC.image} width={30} alt='My Jobs' /></Link>)
                })}
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <div className="a-profile">
                <span className='a-username'>Administrator login</span>
            </div>

        </header>
    )
}