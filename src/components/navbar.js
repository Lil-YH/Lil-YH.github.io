import React from "react";
import { Link } from "react-router-dom";
const navbar= () =>{ 
    return(
    <div>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/cats">Projects</Link>
        </li>
        <li>
          <Link to="/sheeps">Skills</Link>
        </li>
        <li>
          <Link to="/goats">Contact</Link>
        </li>
    </div>
    );
}   

export default navbar;