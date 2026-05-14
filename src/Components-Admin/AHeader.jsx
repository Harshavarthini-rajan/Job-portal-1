import React from 'react'
import './AHeader.css'
import { Link, NavLink } from 'react-router-dom'

export const AHeader = () => {
    const today = new Date()

    const day = today.toLocaleDateString('en-US', {
        weekday: 'long'
    })

    const date = today.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">Job Portal</div>
                <div className="subtext">Administrator</div>
            </div>

            <div className="header-right">
                <div className="day">{day}</div>
                <div className="date">{date}</div>
            </div>

        </header>
    )
}