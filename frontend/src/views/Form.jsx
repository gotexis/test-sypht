import React from "react";

const Form = () => <main className="column main">
    <nav className="breadcrumb is-small" aria-label="breadcrumbs">
        <ul>
            <li><a href="#">Home</a></li>
            <li className="is-active"><a href="#" aria-current="page">Forms</a></li>
        </ul>
    </nav>

    <div className="level">
        <div className="level-left">
            <div className="level-item">
                <div className="title">Forms (<a href="http://bulma.io/documentation/form/general/">read more</a>)</div>
            </div>
        </div>
        <div className="level-right">
            <div className="level-item">
                <button type="button" className="button is-small">
                    March 8, 2017 - April 6, 2017
                </button>
            </div>
        </div>
    </div>

    <div className="columns is-multiline">
        <div className="column is-9">

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">From</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="Name"/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-user"/>
                    </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                            <input className="input is-success" type="email" placeholder="Email" value="alex@smith.com"/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"/>
                    </span>
                                <span className="icon is-small is-right">
                      <i className="fa fa-check"/>
                    </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label"/>
                <div className="field-body">
                    <div className="field is-expanded">
                        <div className="field has-addons">
                            <p className="control">
                                <a className="button is-static">
                                    +44
                                </a>
                            </p>
                            <p className="control is-expanded">
                                <input className="input" type="tel" placeholder="Your phone number"/>
                            </p>
                        </div>
                        <p className="help">Do not enter the first zero</p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Department</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select>
                                    <option>Business development</option>
                                    <option>Marketing</option>
                                    <option>Sales</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">Already a member?</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="member"/>
                                    Yes
                            </label>
                            <label className="radio">
                                <input type="radio" name="member"/>
                                    No
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Subject</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity"/>
                        </div>
                        <p className="help is-danger">
                            This field is required
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Question</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea" placeholder="Explain how we can help you"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label">
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary">
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>

</main>

export default Form
