import React from "react";
// import "./../../styles/benprofile.css";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Profile } from "../component/Profile";
import { Projects } from "../component/Projects";
import { NewProject } from "../component/NewProject";

export const Beneficiaries = (props) => {
  const [page, setPage] = React.useState("profile");

  return (
    <div className="container">
      <header>
        <div className="card mb-3 mt-5">
          <img
            src="https://i.picsum.photos/id/186/1000/200.jpg?hmac=pUloMIHoVy5yEh3svncyKFFHH1NW97CSBFGuAO3lQ1Q"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">
              {props.firstName} {props.lastName}
            </h5>
            <p className="card-text">{props.role}</p>
          </div>{" "}
        </div>
      </header>
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary" onClick={() => setPage("profile")}>
          Profile
        </button>
        <button className="btn btn-primary" onClick={() => setPage("projects")}>
          Projects
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setPage("NewProject")}
        >
          New Project
        </button>
      </div>
      <hr />
      <div className="mt-3">
        {page == "profile" ? <Profile /> : null}
        {page == "projects" ? <Projects /> : null}
        {page == "NewProject" ? <NewProject /> : null}
      </div>
    </div>
  );
};

Beneficiaries.props = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
};
