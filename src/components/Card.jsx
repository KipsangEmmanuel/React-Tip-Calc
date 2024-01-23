import React from "react";
import './card.css';
import Button from "./button";
import Input from "./Input";
import Small from "./Small";



const Card = () => {
  return (
    <div className="main">
        <div className="side">
           <form>

            <Input label="Bill"/>
            <label>Select Tip</label>
            <div className="buttons">
                <div className="top-buttons">
                    <div className="green"><Button text="5%" /></div >
                    <div className="green"><Button text="10%" /></div >
                    <div className="green"><Button text="15%" /></div>
                </div>
                <div className="bottom-buttons">
                    <div className="green"><Button text="25%" /></div >
                    <div className="green"><Button text="50%" /></div>
                    <div className="custom"><Button text="50%" /></div>
                </div>
            </div>
    
            <Input label="Number Of People"/>

           </form>
        </div>

        <Small />

    </div>
  );
};

export default Card;
