import React from "react"
import axios from "axios"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

class Documents extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/documents").then(res =>
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
                Upload document
              </a>
            </li>
          </ul>
        </nav>

        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">Manage documents</div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="column">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Finalised</th>
                    <th>
                      <span title="Played">Pld</span>
                    </th>
                    <th>
                      <span title="Won">W</span>
                    </th>
                    <th>
                      <span title="Drawn">D</span>
                    </th>
                    <th>
                      <span title="Lost">L</span>
                    </th>
                    <th>
                      <span title="Goals for">GF</span>
                    </th>
                    <th>
                      <span title="Goals against">GA</span>
                    </th>
                    <th>
                      <span title="Goal difference">GD</span>
                    </th>
                    <th>
                      <span title="Points">Pts</span>
                    </th>
                    <th>Qualification or relegation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(row => (
                    <tr key={row._id}>
                      <td>
                        <Link to={`document/${row._id}`}>{row.fileId}</Link>
                      </td>
                      <td>
                        {row.status === "FINALISED" && (
                          <FontAwesomeIcon icon={faCheck} />
                        )}
                      </td>
                      <td>
                        <a
                          href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                          title="Leicester City F.C."
                        >
                          Leicester City
                        </a>{" "}
                        <strong>(C)</strong>
                      </td>
                      <td>38</td>
                      <td>23</td>
                      <td>12</td>
                      <td>3</td>
                      <td>68</td>
                      <td>36</td>
                      <td>+32</td>
                      <td>81</td>
                      <td>
                        Qualification for the{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                          title="2016–17 UEFA Champions League"
                        >
                          Champions League group stage
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Documents
