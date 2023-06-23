import { texts } from "../../assets/ts/texts/texts"
import './App.css'
import '../../assets/scss/classes.scss'
import '../../assets/scss/fonts.scss'
import { WeatherApp } from '../WeatherApp/components/WeatherApp/WeatherApp'

function App() {

    return (
        <div className="main">
            <WeatherApp texts={ texts.weatherApp }></WeatherApp>
        </div>
    )
}

export default App
