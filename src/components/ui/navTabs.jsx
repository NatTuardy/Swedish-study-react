import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navtabs = () => {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item" key="1">
              <Link to="/teacherPage/createLection" className="nav-link">
                Create Lection
              </Link>
            </li>
            <li className="nav-item" key="2">
              <Link to="/teacherPage/lections" className="nav-link">
                Lections
              </Link>
            </li>
            <li className="nav-item" key="3">
              <Link to="/teacherPage/students" className="nav-link">
                Students
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navtabs;
