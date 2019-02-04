import React from "react";
//import "./css/mynavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

class MyNavbar extends React.Component {
    render() {
        return (
            <div className="navbar">

                <NavLink className="NavLink" to="/AddMovie">
                    List Movies
          </NavLink>

            </div>
        );
    }
}
export default MyNavbar;
