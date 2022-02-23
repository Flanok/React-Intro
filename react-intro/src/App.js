import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(card => {
    return (
      <Card 
        person={card.img}
        rating={card.rating}
        reviewCount={card.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  )
}