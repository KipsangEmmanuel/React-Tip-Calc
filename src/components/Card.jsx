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
                    <div className="green"><Button text="bt1" /></div >
                    <div className="green"><Button text="bt2" /></div >
                    <div className="green"><Button text="bt3" /></div>
                </div>
                <div className="bottom-buttons">
                    <div className="green"><Button text="bt4" /></div >
                    <div className="green"><Button text="bt5" /></div>
                    <div className="custom"><Button text="bt6" /></div>
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
