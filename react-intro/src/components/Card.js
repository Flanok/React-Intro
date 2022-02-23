import React from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.person} alt="Nick Cage" className="card--img" />
            <div className="card--stats">
                <img src="img/star.png" alt="star" className="card--star"/>
                <span className="card--rating">{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--cost"><span className="bold">From ${props.price} </span> / person</p>
        </div>
    )
}