export interface IWeatherAppTexts {
    cityFinderTexts: ICityFinderTexts,
    bannerForecastDaysTexts: IBannerForecastDaysTexts,
    bannerForecastHoursTexts: IBannerForecastHoursTexts,
    bannerAirConditionsTexts: IBannerAirConditionsTexts
}

export interface ICityFinderTexts {
    placeholder: string,
    errorMessage: string
}

export interface IBannerForecastDaysTexts {
    title: string
}

export interface IBannerForecastHoursTexts {
    title: string,
    btnTemp: string,
    btnRain: string,
    btnWind: string
}

export interface IBannerAirConditionsTexts {
    title: string,
    feelsLike: string,
    humidity: string,
    wind: string
}