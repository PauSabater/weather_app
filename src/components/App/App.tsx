import React from 'react';
import { texts } from "../../assets/ts/texts/texts"
import './App.css'
import '../../assets/scss/variables.scss'
import '../../assets/scss/classes.scss'
import '../../assets/scss/fonts.scss'

//import 
import { TextBanner } from '../TextBanner/TextBanner'
import { TopBanner } from '../TopBanner/TopBanner'
import { SceneBanner } from '../Scene/SceneBanner'
import { Particles } from '../Particles/Particles'
import { CityFinder } from '../WeatherApp/components/CityFinder/CityFinder'
import { WeatherApp } from '../WeatherApp/components/WeatherApp/WeatherApp'
// import { BubblesBanner } from '../Scene/Bubbles'

function App() {

    return (
        <div className="main">
            <WeatherApp texts={ texts.weatherApp }></WeatherApp>

            <TopBanner title={ texts.topBanner.title } lines={ texts.topBanner.lines }></TopBanner>
            <TextBanner text={ texts.intro.text }></TextBanner>
        </div>
    )
}

export default App
