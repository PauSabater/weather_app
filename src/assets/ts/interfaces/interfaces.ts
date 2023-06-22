export interface ICitiesData {
    country: string,
    name: string,
    latitude: string, 
    longitude: string
}

export interface ICurrentWeatherApiData {
    description: string,
    temp: string,
    feelsLike: string,
    tempMin: string,
    tempMax: string,
    icon: string,
    humidity: string,
    wind: string,
    windAngle: string
}

export interface IWeatherAppTexts {
    cityFinderTexts: {
        placeholder: string,
        label: string, 
        name: string
    }
}

export interface ICityFinder {
    placeholder: string, 
    label: string, 
    name: string
}