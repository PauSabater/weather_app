import { useState } from "react"

import * as Styled from './BannerAirConditions.styles'
import { ICurrentWeatherApiData } from "../../../../assets/ts/interfaces/interfaces"
import { ReactComponent as SunnySvg } from "../../assets/svg/weather/sunny.svg"



export function BannerAirConditions({apiData}: {apiData: ICurrentWeatherApiData}) {

    // const [isInputInitialised, setIsInputInitialised] = useState<boolean>(false)

    //https://iconscout.com/lotties/weather

    return (
        <Styled.Container>
            <Styled.Title>AIR CONDITIONS</Styled.Title>
            <p>Feels like: {`${Math.round(parseInt(apiData.feelsLike))}°`}</p>
            <p>Humidity: {`${apiData.humidity}%`}</p>
            <p>Wind: {`${Math.round(parseInt(apiData.wind))}km/h`}</p>
        </Styled.Container>
    )
}