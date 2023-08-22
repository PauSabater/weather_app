import { Fragment, useState } from "react"
import { IApiForecastResponse, ICitiesData } from "../../assets/interfaces/interfaces"
import * as Styled from "./WeatherApp.styles"
import { BannerSelectedWeather } from "../BannerSelectedWeather/BannerSelectedWeather"
import { CityFinder } from "../CityFinder/CityFinder"
import { BannerForecastHours } from "../BannerForecastHours/BannerForecastHours"
import { BannerAirConditions } from "../BannerAirConditions/BannerAirConditions"
import { BannerForecastDays } from "../BannerForecastDays/BannerForecastDays"
import { overWrittenStyle, weatherAppStyles } from "./WeatherAppStylesExport"
import React from 'react'
import { IWeatherAppTexts } from "./index.types"
import { textDefault } from "../../assets/texts/texts"


export function WeatherApp({ texts = textDefault, stylesOverwrite  = ''}: {
        texts?: IWeatherAppTexts,
        stylesOverwrite?: string
    }): React.JSX.Element {


    // State for the cities api response
    const [cityApiData, setCityApiData] = useState<ICitiesData>(
        {
            country: "",
            name: "",
            latitude: "",
            longitude: ""
        }
    )

    // State for the Forecast Weather api response
    const [forecastApiData, setForecastApiData] = useState<IApiForecastResponse[] | null>(null)

    // The displayed day and time on the API format
    const [displayedDayTime, setDisplayedDayTime] = useState<string>("")

    // The displayed day name
    const [displayedDayName, setDisplayedDayName] = useState<string>("TODAY")

    /**
     * Updates the resunt from the Cities Api
     * @param  {ICitiesData} cityData  : The data received from the api
     */
    const updateCityApiResult = (cityData: ICitiesData): void => {
        setCityApiData(cityData)
        makeWeatherApiRequest(cityData.latitude, cityData.longitude)
    }

    /**
     * Updates selected day and time to display on selected conditions
     * @param  {string} selectedDayTime  : The selected day and hour string
     */
    const handleClickHour = (selectedDayTime: string): void => {
        setDisplayedDayTime(selectedDayTime)
    }

    /**
     * Updates the displayed day after click on day forecast container
     * @param  {Event} e             : The event passed on click
     */
    const handleClickDay = (e: Event): void => {
        const elTarget: HTMLElement = e.target as HTMLElement
        if (elTarget !== null) {
            setDisplayedDayTime(elTarget.getAttribute("data-day-time") || "")
            setDisplayedDayName(elTarget.getAttribute("data-dayname") || "")
        }
    }

    /**
     * Makes the api request to get the weather for the next 5 days
     * @param  {string} latitude     : The city location latitude
     * @param  {string} longitude    : The city location longitude
     * @returns {Promise<void>}      : promise for the api request
     */
    const makeWeatherApiRequest = async (latitude: string, longitude: string): Promise<void> => {

        const options = {
            method: 'GET',
            "Content-Type": "application/json",
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=22701db4524b58c1f26b55888022c05b`
            const response: Response = await fetch(url, options)
            const forecastWeatherResponse: any =  await JSON.parse(await response.text())

            // Saves the forecast returned data:
            setForecastApiData(forecastWeatherResponse.list)
            // Set the current day as today as first render:
            setDisplayedDayTime(forecastWeatherResponse.list[0].dt_txt)

        } catch (error) {
            console.error(error)
        }
    }

    /**
     * Returns the template for the results
     * @returns {React.JSX.Element | null}      : Template or null if api results are not set
     */
    const displayResultsTemplate = (): React.JSX.Element | null => {
        if (forecastApiData)
            return (
                <Fragment>
                    <Styled.WrapFirstColumn>
                        <Styled.WrapCurrentConditions>
                            <BannerSelectedWeather
                                apiData={forecastApiData}
                                displayedDayTime={displayedDayTime}
                                displayedDayName={displayedDayName}
                                city={cityApiData.name}
                            ></BannerSelectedWeather>
                            <BannerAirConditions
                                texts={texts.bannerAirConditionsTexts}
                                apiData={forecastApiData}
                                displayedDayTime={displayedDayTime}
                            ></BannerAirConditions>
                            <BannerForecastHours
                                texts={texts.bannerForecastHoursTexts}
                                apiData={forecastApiData}
                                displayedDayTime={displayedDayTime}
                                displayedDayName={displayedDayName}
                                handleClickHour={handleClickHour}
                            ></BannerForecastHours>
                        </Styled.WrapCurrentConditions>
                    </Styled.WrapFirstColumn>
                        <Styled.WrapBannerForecastNextDays>
                            <BannerForecastDays
                                texts={texts.bannerForecastDaysTexts}
                                apiData={forecastApiData}
                                handleClickDay={handleClickDay}
                            ></BannerForecastDays>
                        </Styled.WrapBannerForecastNextDays>
                </Fragment>
            )

        else return null
    }

    return (
        <Styled.WrapMain>
            <style>{weatherAppStyles}</style>
            <style>{overWrittenStyle(stylesOverwrite)}</style>
            <div className="container-parent-webb-app">
                <div className="container-child-webb-app">
                    <CityFinder
                        texts={texts.cityFinderTexts}
                        updateCityApiResult={updateCityApiResult}
                    ></CityFinder>
                    {displayResultsTemplate()}
                </div>
            </div>
        </Styled.WrapMain>
    )
}