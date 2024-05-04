import React from "react";
import { Link } from "react-router-dom";

function NoDataToShow() {
  return (

        <div className="d-flex flex-column align-items-center ">
          <i class="fa-solid fa-4x fa-battery-empty "></i>
          <div className="alert alert-warning" role="alert">
            Vi har inga data o visa just nu <i class="fa-regular fa-face-smile"></i>
          </div>
            <Link to={'/cancerAnmalan'}>Gör anmälan</Link>
        </div>
  );
}

export default NoDataToShow;
