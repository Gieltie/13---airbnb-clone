import "../styles/Card.css";
import React from "react";

export default function card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--span">{badgeText}</div>}
      <img
        src={`./images/${props.item.coverImg}`}
        alt="katie zafares in swimsuit"
        className="card--img"
      />
      <div className="card--info">
        <img src="./images/star.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
