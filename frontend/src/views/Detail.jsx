import React from "react"
import axios from "axios"
import ReactJson from "react-json-view"

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { id } = this.props.match.params
    console.log(id)
    axios.get(`http://localhost:5000/document/${id}`).then(res =>
      this.setState({
        data: res.data
      })
    )
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
                Check document
              </a>
            </li>
          </ul>
        </nav>

        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">Check document</div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            {/* PDF NOT SUPPORTED NOW */}
            {this.state.data &&
              this.state.data.file.mimetype.indexOf("pdf") === -1 && (
                <div className="canvas">
                  <object
                    data={`//localhost:5000/uploads/${this.state.data.file.filename}`}
                    type={this.state.data.file.mimetype}
                  />
                </div>
              )}
          </div>
        </div>
        <div className="column">
          {this.state.data && (
            <ReactJson src={this.state.data.results.fields} theme="monokai" />
          )}
        </div>
      </main>
    )
  }
}

export default Detail
