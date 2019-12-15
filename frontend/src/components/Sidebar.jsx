import React from "react"
import "../views/App.sass"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFile, faTable, faTachometerAlt} from "@fortawesome/free-solid-svg-icons"

export const Sidebar = () => (
  <aside className="column is-2 aside">
    <nav className="menu">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <NavLink activeClassName="is-active" to="/" exact>
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-10" />
            Dashboard
          </NavLink>
        </li>
      </ul>
      <p className=" menu-label">Document</p>
      <ul className="menu-list">
        <li>
          <NavLink to="/upload" activeClassName="is-active">
            <FontAwesomeIcon icon={faTable} className="mr-10" />
            Upload
          </NavLink>
        </li>
        <li>
          <NavLink to="/documents" activeClassName="is-active">
            <FontAwesomeIcon icon={faFile} className="mr-10" />
            Documents
          </NavLink>
        </li>

        {/* <li> */}
        {/*    <a className=""><i className=" fa fa-cog"/> Settings</a> */}
        {/*    <ul> */}
        {/*        <li><a>Members</a></li> */}
        {/*        <li><a>Plugins</a></li> */}
        {/*        <li><a>Add a member</a></li> */}
        {/*    </ul> */}
        {/* </li> */}
      </ul>
      {/* <p className=" menu-label"> */}
      {/*    Live On */}
      {/* </p> */}
      {/* <ul className=" menu-list"> */}
      {/*    <li><a><span className=" icon is-small"><i className=" fa fa-bug"/></span> Additional Pages</a> */}
      {/*    </li> */}
      {/*    <li><a><span className=" icon is-small"><i className=" fa fa-windows"/></span> Extras</a></li> */}
      {/*    <li><a><span className=" icon is-small"><i className=" fa fa-laptop"/></span> Landing Page</a> */}
      {/*    </li> */}
      {/* </ul> */}
    </nav>
  </aside>
)
