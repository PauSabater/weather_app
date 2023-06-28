import { ReactComponent as SunnySvg } from "../../assets/svg/weather/sunny.svg"
import { ReactComponent as SunnyCloudy } from "../../assets/svg/weather/sunnyCloudy.svg"
import { ReactComponent as ScateredClouds } from "../../assets/svg/weather/scateredClouds.svg"
import { ReactComponent as BrokenClouds } from "../../assets/svg/weather/brokenClouds.svg"
import { ReactComponent as RainShowers } from "../../assets/svg/weather/rainShowers.svg"
import { ReactComponent as Rain } from "../../assets/svg/weather/rain.svg"
import { ReactComponent as Thunderstorm } from "../../assets/svg/weather/thunderstorm.svg"
import { ReactComponent as Snow } from "../../assets/svg/weather/snow.svg"
import { ReactComponent as Mist } from "../../assets/svg/weather/mist.svg"
import React from "react"

import { sunny } from "../svg/weather/sunny"
import { sunnyCloudy } from "../svg/weather/sunnyCloudy"
import { scateredClouds } from "../svg/weather/scateredClouds"
import { brokenClouds } from "../svg/weather/brokenClouds"
import { rainShowers } from "../svg/weather/rainShowers"
import { rain } from "../svg/weather/rain"
import { thunderstorm } from "../svg/weather/thunderstorm"
import { snow } from "../svg/weather/snow"
import { mist } from "../svg/weather/mist"

import { test } from '../svg/weather/test'



export function getWeatherIcon(icon: string) {

    switch (icon.slice(0, 2)) {
        case '01':
            return sunny
        case '02':
            return sunnyCloudy
        case '03':
            return scateredClouds
        case '04':
            return brokenClouds
        case '09':
            return rainShowers
        case '10':
            return rain
        case '11':
            return thunderstorm
        case '13':
            return snow
        case '50':
            return mist
    }
}