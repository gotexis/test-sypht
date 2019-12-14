import React from "react";

export const Header = () => <header className="hero">
    <div className="hero-head">
        <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

                <a className="navbar-item is--brand">
                    <img className="navbar-brand-logo" src="/logo.png" alt="Bulma Admin Template logo"/>
                </a>
                <a className="navbar-item is-tab is-hidden-mobile is-active"><span className="icon is-medium"><i
                    className="fa fa-home"/></span>Home</a>
                <a className="navbar-item is-tab is-hidden-mobile"
                   href="https://github.com/mazipan/bulma-admin-dashboard-template">Github</a>
                <a className="navbar-item is-tab is-hidden-mobile"
                   href="https://mazipan.github.io/bulma-resume-template/">Resume Template</a>
                <a className="navbar-item is-tab is-hidden-mobile" href="#about">About</a>

                <button className="button navbar-burger" data-target="navMenu">
                    <span/>
                    <span/>
                    <span/>
                </button>

            </div>


            <div className="navbar-menu navbar-end" id="navMenu">
                <a className="navbar-item is-tab is-hidden-tablet is-active">Home</a>
                <a className="navbar-item is-tab is-hidden-tablet"
                   href="https://github.com/mazipan/bulma-admin-dashboard-template">Github</a>
                <a className="navbar-item is-tab is-hidden-tablet"
                   href="https://mazipan.github.io/bulma-resume-template/">Resume Template</a>
                <a className="navbar-item is-tab is-hidden-tablet" href="#about">About</a>
                <a className="navbar-item nav-tag">
            <span className="icon is-small">
              <i className="fa fa-envelope-o"/>
            </span>
                    <span className="tag is-primary tag-notif">6</span>
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        <figure className="image is-32x32" style={{marginRight: ".5em"}}>
                            <img src="https://avatars1.githubusercontent.com/u/7221389?v=4&s=32"/>
                        </figure>
                        mazipan
                    </a>

                    <div className="navbar-dropdown is-right">
                        <a className="navbar-item">
                  <span className="icon is-small">
                    <i className="fa fa-user-o"/>
                  </span>
                            &nbsp; Profile
                        </a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item">
                  <span className="icon is-small">
                    <i className="fa fa-power-off"/>
                  </span>
                            &nbsp; Logout
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>;
