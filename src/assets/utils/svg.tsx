import { sunny } from "../svg/weather/sunny"
import { sunnyCloudy } from "../svg/weather/sunnyCloudy"
import { scateredClouds } from "../svg/weather/scateredClouds"
import { brokenClouds } from "../svg/weather/brokenClouds"
import { rainShowers } from "../svg/weather/rainShowers"
import { rain } from "../svg/weather/rain"
import { thunderstorm } from "../svg/weather/thunderstorm"
import { snow } from "../svg/weather/snow"
import { mist } from "../svg/weather/mist"

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