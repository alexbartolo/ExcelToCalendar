import React from "react"

import headerLogo from "../images/header-logo.png"

export default function Header () {
    return (
        <header className="header">
            <img className="header--logo" src={headerLogo} alt="Logo" />
            <span className="header--text">Excel to Calendar</span>
        </header>
    )
}