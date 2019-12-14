import React from "react"
import '../views/App.sass'
import {NavLink} from "react-router-dom"

export const Sidebar = () => <aside className="column is-2 aside">
    <nav className="menu">
        <p className="menu-label">
            General
        </p>
        <ul className="menu-list">
            <li><a className="is-active" href="#"><span className="icon is-small"><i
                className="fa fa-tachometer"/></span> Dashboard</a></li>
        </ul>
        <p className="menu-label">
            Administration
        </p>
        <ul className="menu-list">
            <li><NavLink to="/about"><span className="icon is-small"><i
                className="fa fa-pencil-square-o"/></span> About</NavLink></li>
            <li><NavLink to="/users"><span className="icon is-small"><i
                className="fa fa-desktop"/></span> Users</NavLink></li>
            <li><NavLink to="/tables"><span className="icon is-small"><i
                className="fa fa-table"/></span> Tables</NavLink></li>
            <li><NavLink to="/presentations"><span className="icon is-small"><i
                className="fa fa-bar-chart"/></span> Presentations</NavLink></li>

            <li>
                <a className=""><i className="fa fa-cog"/> Settings</a>
                <ul>
                    <li><a>Members</a></li>
                    <li><a>Plugins</a></li>
                    <li><a>Add a member</a></li>
                </ul>
            </li>
        </ul>
        <p className="menu-label">
            Live On
        </p>
        <ul className="menu-list">
            <li><a><span className="icon is-small"><i className="fa fa-bug"/></span> Additional Pages</a>
            </li>
            <li><a><span className="icon is-small"><i className="fa fa-windows"/></span> Extras</a></li>
            <li><a><span className="icon is-small"><i className="fa fa-laptop"/></span> Landing Page</a>
            </li>
        </ul>
    </nav>
</aside>
