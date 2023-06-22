import { useState } from "react"
import * as Styled from './BannerSelectedWeather.styles'
import { getWeatherIcon } from "../../assets/utils/svg"
import React from "react"


export function BannerSelectedWeather({apiData, city, displayedDateHour, displayedDayName}: {
        apiData: any[], 
        city: string,
        displayedDateHour: string,
        displayedDayName: string
    }){

    //https://iconscout.com/lotties/weather

    // The forecast for the selected day and hour
    const [selectedForecast, setSelectedForecast] = useState<any>(null)

    // Updates selected forecast state when the date and hour to dispay change
    React.useEffect(() => {
        getSpecificForecast(displayedDateHour)
    }, [displayedDateHour])

    /**
     * Gets a specific forecast given the date and hour property value
     * @param {string} displayedDateHour   : The date and hour string
     */
    const getSpecificForecast = (displayedDateHour: string) => {
        for (const forecast of apiData) {
            if (!forecast.dt_txt.includes(displayedDateHour)) continue

            setSelectedForecast(forecast)
            return forecast.main.temp_max
        }
    }

    if (selectedForecast !== null) {
        return (
            <Styled.Container>
                <Styled.CurrentWeatherIcon>
                    {getWeatherIcon(selectedForecast.weather[0].icon)}
                </Styled.CurrentWeatherIcon>
                <Styled.CurrentCity>
                    {city}
                </Styled.CurrentCity>
                <Styled.DisplayedDayHour>
                    {`${displayedDayName} - ${displayedDateHour.split(' ')[1].split(":")[0]}:00h`}
                </Styled.DisplayedDayHour>
                <Styled.CurrentTemperature>
                    {`${Math.round(parseInt(selectedForecast.main.temp_max))}°`}
                </Styled.CurrentTemperature>
            </Styled.Container>
            ) 

    } else return null
}