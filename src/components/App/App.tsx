import { texts } from "../../assets/texts/texts"
import './App.css'
import '../../assets/scss/classes.scss'
import '../../assets/scss/fonts.scss'
import React from 'react'
import { WeatherApp } from "../../exports"

function App() {

    return (
        <div className="main">
            <WeatherApp texts={ texts.weatherApp }></WeatherApp>
        </div>
    )
}

export default App
