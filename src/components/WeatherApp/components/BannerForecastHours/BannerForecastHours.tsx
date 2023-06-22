import * as Styled from './BannerForecastHours.styles'
import { getWeatherIcon } from '../../assets/utils/svg'
import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { setGraphData, optionsGraphTemp } from './BannerForecastHoursGraph'
import { useState } from 'react'
import React from 'react'

export function BannerForecastHours({apiData, displayedDayHour, displayedDayName, updateSelectedDayHour}: {
        apiData: any, 
        displayedDayHour: string, 
        displayedDayName: string, 
        updateSelectedDayHour: Function
    }) {

    // The selected hour
    const [selectedHourNum, setSelectedHourNum] = useState<string>("0")

    // The type of graph selected
    const [selectedGraphType, setSelectedGraphType] = useState<"rain" | "temp" | "wind">("temp")

    // The forecast for the selected day and hour
    const [forecastEightHours, setEightHoursForecast] = useState<any>(null)

    // Updates selected forecast state when the date and hour to dispay change
    React.useEffect(() => {
        setEightHoursForecast(getEightHoursForecast(apiData))
    }, [displayedDayHour])

    /**
     * Gets forecast for corresponding 8 hours of the dispayed date
     * @param  {any} apiData [The data from the api]
     * @return {any[]}       [Array with the 8 corresponding forecasts]
     */
    const getEightHoursForecast = (apiData: any): any[] => {
        let dayIsFound: boolean = false
        const displayedForecasts: any[] = []
        let count: number = 0

        for (const forecast of apiData) {
            if (forecast.dt_txt === displayedDayHour && dayIsFound === false) {
                dayIsFound = true
                displayedForecasts.push(forecast)
                count++
            } else if (count > 0 && count < 8) {
                displayedForecasts.push(forecast)
                count++
            }
        }

        return displayedForecasts
    }

    /**
     * Handles actions when an event of type click or enter key presse is triggered
     * @param  {React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement, MouseEvent>} e   : The event
     */
    const handleSelectEvent = (e: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement, MouseEvent>) => {
        const elTarget: HTMLElement = e.target as HTMLElement

        if (elTarget !== null) {
            setSelectedHourNum(elTarget.getAttribute("data-hour") as string)
            updateSelectedDayHour(elTarget.getAttribute("data-day-hour"))
        }
    }

    /**
     * Handles actions when an event of type click or enter key presse is triggered
     * @param  {React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement, MouseEvent>} e   : The event
     */
    const handleButtonEvent = (e: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement, MouseEvent>) => {
        const elTarget: HTMLElement = e.target as HTMLElement

        if (elTarget !== null) {
            setSelectedGraphType(elTarget.getAttribute("data-type") as "rain" | "temp" | "wind")
        }
    }

    /**
     * Returns the template for the graph
     * @return  {JSX.Element}   : The graph template
     */
    const generateGraphTemplate = (graphType: string): JSX.Element | null => {
        const chartData = forecastEightHours.map((forecast: any, index: number) => {
            switch (graphType) {
                case "temp":
                    return Math.round(forecast.main.temp_max)
                case "rain":
                    return forecast.hasOwnProperty("rain") ? forecast.rain['3h'] : 0
                case "wind":
                    return Math.round(forecast.wind.gust)
                default:
                    return [0]
            }
        })

        if (forecastEightHours) {
            return  (
                <Styled.GraphContainer>
                    <div>
                        <Line 
                            // @ts-ignore
                            options={optionsGraphTemp} 
                            plugins={[ChartDataLabels]} 
                            data={setGraphData(chartData, graphType)} 
                        />                    
                    </div>
                </Styled.GraphContainer>
            )
        } else return null
    }

    /**
     * Returns the template for the buttons
     * @return  {JSX.Element}   : The buttons template
     */
    const generateButtonsTemplate = (): JSX.Element => {
        return  (
            <Styled.ButtonsWrap>
                <Styled.ForecastButton
                    data-type={"temp"}
                    onClick={(e) => handleButtonEvent(e)}
                    data-active={selectedGraphType === "temp" ? "true" : "false"}
                >
                    TEMPERATURE (C)
                </Styled.ForecastButton>
                <Styled.ForecastButton
                    data-type={"rain"}
                    onClick={(e) => handleButtonEvent(e)}
                    data-active={selectedGraphType === "rain" ? "true" : "false"}
                >
                    RAIN (MM)
                </Styled.ForecastButton>
                <Styled.ForecastButton
                    data-type={"wind"}
                    onClick={(e) => handleButtonEvent(e)}
                    data-active={selectedGraphType === "wind" ? "true" : "false"}
                >
                    WIND (MM)
                </Styled.ForecastButton>
            </Styled.ButtonsWrap>
        )
    }

    if (forecastEightHours !== null && forecastEightHours !== undefined) {
        return (
            <Styled.Container>
                <Styled.Title>
                    {`HOURLY FORECAST FOR ${displayedDayName.toUpperCase()}`}
                </Styled.Title>
                {generateButtonsTemplate()}
                <Styled.Wrap>
                    {   // Loops on the apiData to retrieve the needed data and display the forecasts
                        apiData && apiData.length > 0 ? forecastEightHours.map((forecast: any, index: number) =>
                            index < 8 ? 
                                <Styled.HourForecastContainer
                                    onClick={(e) => handleSelectEvent(e)}
                                    onKeyDown={(e) => {if (e.key === 'Enter') handleSelectEvent(e)}}
                                    tabIndex={0}
                                    data-hour={index}
                                    data-is-selected={index.toString() === selectedHourNum ? "true" : "false"}
                                    data-day-hour={forecast.dt_txt}
                                >
                                    <p>{`${forecast.dt_txt.split(" ")[1].split(":")[0]}:00h`}</p>
                                    {getWeatherIcon(forecast.weather[0].icon)}
                                </Styled.HourForecastContainer>
                                : ""
                        ) : ""
                    }
                </Styled.Wrap>
                {generateGraphTemplate(selectedGraphType)}
            </Styled.Container>
        )

    } else return null
}