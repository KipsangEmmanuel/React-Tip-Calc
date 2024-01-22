import React from "react";
import Amount from "./Amount";
import './small.css'


const Small = ({small}) => {
  return (
    <div>
      <div className="container">
        <Amount />
        <Amount />
        <div>
           <button className="btn-reset">
            Reset
           </button>
        </div>
      </div>
    </div>
  );
};

export default Small;
