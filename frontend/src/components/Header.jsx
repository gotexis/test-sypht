import React from "react";
import {
  faEnvelope,
  faHome,
  faPowerOff,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Header = () => <header className="hero">
  <div className="hero-head">
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">

        <a className="navbar-item is--brand">
          <img className="navbar-brand-logo" src="https://docs.sypht.com/Sypht-Logo.svg"
               alt="Bulma Admin Template logo"/>
        </a>
        <a className="navbar-item is-tab is-hidden-mobile is-active"><span className="icon is-medium">
          <FontAwesomeIcon icon={faHome}/></span>Home</a>
        <a className="navbar-item is-tab is-hidden-mobile"
           href="https://github.com/gotexis/" target="_blank">Github</a>
        <button className="button navbar-burger" data-target="navMenu">
          <span/>
          <span/>
          <span/>
        </button>

      </div>


      <div className="navbar-menu navbar-end" id="navMenu">
        <a className="navbar-item is-tab is-hidden-tablet is-active">Home</a>
        <a className="navbar-item is-tab is-hidden-tablet"
           href="https://github.com/exisz/bulma-admin-dashboard-template">Github</a>
        <a className="navbar-item is-tab is-hidden-tablet"
           href="https://exisz.github.io/bulma-resume-template/">Resume Template</a>
        <a className="navbar-item is-tab is-hidden-tablet" href="#about">About</a>
        <a className="navbar-item nav-tag">
            <span className="icon is-small">
              <FontAwesomeIcon icon={faEnvelope}/>
            </span>
          <span className="tag is-primary tag-notif">6</span>
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            <figure className="image is-32x32" style={{marginRight: ".5em"}}>
              <img src="https://avatars1.githubusercontent.com/u/7221389?v=4&s=32"/>
            </figure>
            exisz
          </a>

          <div className="navbar-dropdown is-right">
            <a className="navbar-item">
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faUserAlt}/>
                  </span>
              &nbsp; Profile
            </a>
            <hr className="navbar-divider"/>
            <a className="navbar-item">
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faPowerOff}/>
                  </span>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>;
