import React from 'react'
import Cards from './Cards.js'
import './styles.css'

const App = () => {
    let vacationSpots = [
        {
            place: "Meridian, Idaho",
            price: 40,
            timeToGo: "Spring"
        }, {
            place: "Cancun",
            price: 900,
            timeToGo: "Winter"
        }, {
            place: "China",
            price: 1200,
            timeToGo: "Fall"
        }, {
            place: "Russia",
            price: 1100,
            timeToGo: "Summer"
        }, {
            place: "Lebanon",
            price: 400,
            timeToGo: "Spring"
        }
    ]
    const mappedVacationSpots = vacationSpots.map((location, i) =>
        <Cards
            key={i}
            place={location.place}
            price={location.price}
            timeToGo={location.timeToGo}
        />)

    return (
        <div className ='main-container'>
            <h1>Vacation Spots</h1>
            {mappedVacationSpots}

        </div>
    )

}

export default App