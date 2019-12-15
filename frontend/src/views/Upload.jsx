import React from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheckSquare,
  faSquare,
  faUpload
} from "@fortawesome/free-solid-svg-icons"
import uuid from "uuid"

import ReactJson from "react-json-view"

const syphtFieldsetTypes = ["generic", "document", "invoice"]

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      fieldsetTypes: [],
      errors: [],
      results: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
    this.switchFieldset = this.switchFieldset.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault() // Stop form submit
    const { file } = this.state
    if (!file) {
      this.setState({
        errors: [
          // eslint-disable-next-line react/no-access-state-in-setstate
          ...this.state.errors,
          {
            id: uuid(),
            msg: "No file selected"
          }
        ]
      })
      return
    }
    this.fileUpload(file).then(response => {
      // testing
      if (response) {
        this.setState({
          results: [
            // eslint-disable-next-line react/no-access-state-in-setstate
            ...this.state.results,
            response.data
          ]
        })
      }
    })
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] })
  }

  switchFieldset(fieldset) {
    let fieldsetTypes
    if (this.state.fieldsetTypes.includes(fieldset)) {
      fieldsetTypes = this.state.fieldsetTypes.filter(x => x !== fieldset)
    } else {
      fieldsetTypes = [...this.state.fieldsetTypes, fieldset]
    }
    this.setState({ fieldsetTypes })
  }

  async fileUpload(file) {
    const url = "http://localhost:5000/upload"
    const formData = new FormData()
    formData.append("file", file)
    formData.append(
      "fieldSets",
      JSON.stringify(this.state.fieldsetTypes.map(f => `sypht.${f}`))
    )
    const config = {
      headers: {
        Accept: "application/json",
        "content-type": "multipart/form-data"
      }
    }
    try {
      const res = await axios.post(url, formData, config)
      return res
    } catch (e) {
      if (e.response && e.response.status === 400) {
        this.setState({
          // eslint-disable-next-line react/no-access-state-in-setstate
          errors: [
            // eslint-disable-next-line react/no-access-state-in-setstate
            ...this.state.errors,
            {
              id: uuid(),
              msg: e.response.data.error
            }
          ]
        })
      }
    }
  }

  render() {
    return (
      <main className="column main">
        <nav className="breadcrumb is-small" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                Upload document
              </a>
            </li>
          </ul>
        </nav>

        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">Upload document</div>
            </div>
          </div>
        </div>

        <div className="columns is-multiline">
          <div className="column is-9">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Upload file</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="file has-name is-boxed">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        onChange={this.onChange}
                      />
                      <span className="file-cta">
                        <span className="file-icon">
                          <FontAwesomeIcon icon={faUpload} />
                        </span>
                        <span className="file-label">Choose a file…</span>
                      </span>
                      <span className="file-name">
                        {this.state.file && this.state.file.name}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Fieldsets</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="buttons">
                    {syphtFieldsetTypes.map(f => (
                      <button
                        className={`button ${this.state.fieldsetTypes.includes(
                          f
                        ) && "is-active"}`}
                        key={f}
                        onClick={e => this.switchFieldset(f)}
                      >
                        <span className="mr-10">{f}</span>
                        <FontAwesomeIcon
                          icon={
                            this.state.fieldsetTypes.includes(f)
                              ? faCheckSquare
                              : faSquare
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label" />
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <div className="buttons">
                      <button
                        className="button is-primary"
                        onClick={this.onFormSubmit}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ERRORS */}
        <div className="column">
          {this.state.errors.map(e => (
            <div className="notification is-warning">
              <button
                className="delete"
                onClick={() => {
                  this.setState({
                    // eslint-disable-next-line react/no-access-state-in-setstate
                    errors: this.state.errors.filter(er => er.id !== e.id)
                  })
                }}
              />
              {e.msg}
            </div>
          ))}
          {this.state.results.map(r => (
            <ReactJson src={r} key={r._id} theme="monokai" />
          ))}
        </div>
      </main>
    )
  }
}

export default Upload
