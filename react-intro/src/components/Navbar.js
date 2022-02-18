import React from "react"
import reactLogo from "../img/logo192.png"

export default function Navbar () {
    return (
        <nav className="navbar">
            <img src={reactLogo} alt="react logo" className="nav--icon"></img>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">Project 1</h4>
        </nav>
    )
}