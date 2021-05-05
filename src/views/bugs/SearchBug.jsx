import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Constants from "../../utility/Constants";

class SearchBug extends Component {
  constructor(props) {
    super(props);
    this.state = { bugDetails: [], bugId: "", bugTitle: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  // Input handle function
  handleChange(event) {
    if (event.target.value === "") {
      this.setState({ bugTitle: "" });
      this.setState({ bugId: "" });
    } else {
      if (isNaN(event.target.value)) {
        this.setState({ bugTitle: event.target.value });
      } else {
        this.setState({ bugId: event.target.value });
      }
    }
  }

  render() {
    return (
      <div>
        {/* Search engine for bug */}
        <div class="input-group">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search bug by bug-id/title"
            required
            autoComplete="off"
            name="bugSearchInputText"
            id="bugSearchInputText"
            onChange={this.handleChange}
            style={{ width: 500 }}
          />
          <div class="input-group-append">
            <Link
              class="btn btn-danger font-weight-bold shadow-sm"
              to={{
                pathname: `/bugList`,
                state: {
                  searchInputText:
                    this.state.bugId !== ""
                      ? this.state.bugId
                      : this.state.bugTitle,
                },
              }}
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    );
    // For testing purpose
    {
      /* <div>
        <span class="">
          {bugCount !== 0 ? (
            <span class="badge badge-pill badge-success pb-1 mt-2 shadow">
              {"Found " + bugCount + (bugCount > 1 ? " items" : " item")}
            </span>
          ) : (
            <span class="badge badge-pill badge-secondary pb-1 mt-2 shadow">
              No result found
            </span>
          )}
          {}
        </span>
      </div> */
    }
  }
}

export default SearchBug;
