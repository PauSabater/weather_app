import { useState } from "react"
import { ICitiesData, ICurrentWeatherApiData, IWeatherAppTexts } from "../../../../assets/ts/interfaces/interfaces"
import { BannerSelectedWeather } from "../BannerSelectedWeather/BannerSelectedWeather"
import { CityFinder } from "../CityFinder/CityFinder"
import * as Styled from "./WeatherApp.styles"
import { BannerForecastHours } from "../BannerForecastHours/BannerForecastHours"
import { BannerAirConditions } from "../BannerAirConditions/BannerAirConditions"
import { BannerForecastDays } from "../BannerForecastDays/BannerForecastDays"

export function WeatherApp({ texts }: { texts: IWeatherAppTexts }) {

    // State for the cities api response
    const [cityApiData, setCityApiData] = useState<ICitiesData>(
        {
            country: "",
            name: "",
            latitude: "",
            longitude: ""
        }
    )

    // State for the Current Weather api response
    const [currentWeatherApiData, setCurrentWeatherApiData] = useState<ICurrentWeatherApiData | null>(null)
    
    // State for the Forecast Weather api response
    const [forecastApiData, setForecastApiData] = useState<any | null>(null)

    // The displayed day
    const [displayedDay, setDisplayedDay] = useState<string>("")

    // The displayed day name
    const [displayedDayName, setDisplayedDayName] = useState<string>("TODAY")

    // Selected day and hour string
    const [selectedDayHour, setSelectedDayHour] = useState<string>("")

    /**
     * Updates selected day and hour to display on selected conditions
     * @param  {string} selectedDayHour  : The selected day and hour string
     */
    const updateSelectedDayHour = (selectedDayHour: string): void => {
        setSelectedDayHour(selectedDayHour)
    }


    /**
     * Updates the resunt from the Cities Api
     * @param  {ICitiesData} cityData  : The data received from the api
     */
    const updateCityApiResult = (cityData: ICitiesData): void => {
        setCityApiData(cityData)
        makeWeatherApiRequest(cityData.latitude, cityData.longitude)
    }

    /**
     * Updates the displayed day after click on day forecast container
     * @param  {Event} e       : The event passed on click
     */
    const handleClickDay = (e: Event): void => {
        const elTarget: HTMLElement = e.target as HTMLElement
        if (elTarget !== null) {
            setDisplayedDay(elTarget.getAttribute("data-date") || "")
            setDisplayedDayName(elTarget.getAttribute("data-dayname") || "")
        }
    }

    const makeWeatherApiRequest = async (latitude: string, longitude: string)=> {

        const options = {
            method: 'GET',
            "Content-Type": "application/json",
        }

        try {
            let urls = [
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=22701db4524b58c1f26b55888022c05b`,
                `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=22701db4524b58c1f26b55888022c05b`
            ]
              
            // map every url to the promise of the fetch
            const requests = urls.map(url => fetch(url))
            const responses: Response[] = await Promise.all(requests)
            const currentWeatherResponse =  await JSON.parse(await responses[0].text())
            const forecastWeatherResponse =  await JSON.parse(await responses[1].text())

            // Saves the forecast returned data:
            setForecastApiData(forecastWeatherResponse)
            // Set the current day as today as first render:
            setDisplayedDay(forecastWeatherResponse.list[0].dt_txt)

        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <Styled.WrapMain>
            <CityFinder 
                cityFinderTexts={texts.cityFinderTexts}
                updateCityApiResult={updateCityApiResult}              
            ></CityFinder>
            <Styled.WrapFirstColumn>
                {currentWeatherApiData ? 
                    <Styled.WrapCurrentConditions>
                        <BannerSelectedWeather
                            apiData={forecastApiData.list}
                            displayedDateHour={selectedDayHour}
                            displayedDayName={displayedDayName}
                            city={cityApiData.name}
                        ></BannerSelectedWeather>
                        <BannerAirConditions 
                            apiData={currentWeatherApiData as ICurrentWeatherApiData}
                        ></BannerAirConditions>
                        <BannerForecastHours
                            apiData={forecastApiData.list}
                            displayedDayHour={displayedDay}
                            displayedDayName={displayedDayName}
                            updateSelectedDayHour={updateSelectedDayHour}
                        ></BannerForecastHours>
                    </Styled.WrapCurrentConditions>
                    : ""
                }
            </Styled.WrapFirstColumn>
            {currentWeatherApiData ? 
                <Styled.WrapBannerForecastNextDays>
                    <BannerForecastDays
                        apiData={forecastApiData.list}
                        handleClickDay={handleClickDay}
                    ></BannerForecastDays>
                </Styled.WrapBannerForecastNextDays>
                : ""
            }
        </Styled.WrapMain>
    )
}