import React from "react";
import "./Card.css";

function Card({ description, name, button, image, baground, width, color, height, className }) {
  return (
    <section className={className} style={{backgroundColor:baground, width:width, color:color, height:height}}>
      <div className="heroContent">
        <h1>{name}</h1>
        <p>{description}</p>

        <div className="buttons">
          <button className="learn">Learn more</button>
          <button className="shop">{button}</button>
        </div>
      </div>

      <div className="imageContainer">
        <img src={image} alt="iPhone lineup" />
      </div>
    </section>
  );
}

export default Card;
