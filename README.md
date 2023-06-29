## Import the component on a React project

### As commonJS module
`import { WeatherApp } from 'weather-app-ps/dist/cjs'`

### As ES module
`import { WeatherApp } from 'weather-app-ps/dist/cjs'`

## Set an object for the texts
### Example
```
export const texts: IWeatherAppTexts = {
    cityFinderTexts: {
        placeholder: "Enter your city",
        errorMessage: "Please select a city from the list"
    },
    bannerForecastDaysTexts: {
        title: "5 DAY FORECAST"
    },
    bannerForecastHoursTexts: {
        title: "5 DAY FORECAST FOR",
        btnTemp: "TEMPERATURE (C)",
        btnRain: "RAIN (MM)",
        btnWind: "WIND (KM/H)",
    },
    bannerAirConditionsTexts: {
        title: "AIR CONDITIONS",
        feelsLike: "Feels like",
        humidity: "Humidity",
        wind: "Wind"
    }
}
```

## Use the component
`<WeatherApp texts={texts}></WeatherApp>`
