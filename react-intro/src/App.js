import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(card => {
    return (
      <Card 
        {...card}
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