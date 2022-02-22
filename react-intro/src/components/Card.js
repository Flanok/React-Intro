import React from "react";
import person from "../img/Nick.jpeg"
import star from "../img/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={person} alt="Nick Cage" className="card--img" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span className="card--rating">5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray"> Arizona</span>
            </div>
            <p className="card--title">Life lessons with Nick</p>
            <p className="card--cost"><span className="bold">From $189 </span> / person</p>
        </div>
    )
}