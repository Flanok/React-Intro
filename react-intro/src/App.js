import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Nick from "./img/Nick.jpeg"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        person={Nick}
        rating="5.0"
        reviewCount={6}
        location="Arizona"
        title="Life skills with Nick"
        price={199}
      />
    </div>
  )
}