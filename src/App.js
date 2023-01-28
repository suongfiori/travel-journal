import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"


function App () {
    const cards = data.map(card =>
        <Card
            key={card.id}
            card={card}
         />
          )
        
    return (
        <div>
            <Navbar />
            <section className="card--list">
                {cards}
            </section>
        </div>
    )
}
export default App;