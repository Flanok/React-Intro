import React from "react";
import star from "../img/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.person} alt="Nick Cage" className="card--img" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span className="card--rating">{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--cost"><span className="bold">From ${props.price} </span> / person</p>
        </div>
    )
}