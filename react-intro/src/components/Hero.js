import React from "react"
import image from "../img/stars.jpg"

export default function Hero() {
    return (
        <section className="hero">
            <img src={image} alt="pretty sky" className="hero--img" />
            <h1 className="hero--title">Online experiences</h1>
            <p className="hero--content">Do activities online with special hosts, all without leaving your home!</p>
        </section>
    )
}