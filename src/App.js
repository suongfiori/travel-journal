import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import data from "./data"


function App () {
    const cards = data.map(card =>
        <Card
            key={card.id}
            card={card}
         />
          )
        
    return (
    <section>
        <div className="container">
            <Navbar />
            <section className="spikes">
                <div className="card--list">
                {cards}
                </div>
            </section>
            <Footer />
        </div>
   </section>
    )
}
export default App;