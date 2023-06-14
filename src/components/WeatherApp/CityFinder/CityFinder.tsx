// https://rapidapi.com/wirefreethought/api/geodb-cities

import { ChangeEvent, useState, useCallback } from "react"
import { InputText } from "../InputText/InputText"
import { CityList } from "../CityList/CityList"
import throttle from "lodash.throttle"
import * as Styled from "./CityFinder.styles"
import { ICitiesData } from "../../../assets/ts/interfaces/interfaces"

interface ICityFinder {
    placeholder: string, 
    label: string, 
    name: string
}

export function CityFinder({ placeholder, label, name }: ICityFinder) {

    const [citiesData, setCitiesData] = useState<ICitiesData[]>(
        [{
            name: "",
            latitude: "",
            longitude: ""
        }]
    )
    const [inputText, setInputText] = useState<string>('')
    const [isListOpen, setIsListOpen] = useState<boolean>(false)
    const [isTypingAllowed, setIsTypingAllowed] = useState<boolean>(true)
    const [isSelected, setIsSelected] = useState<boolean>(false)

    // Store function in order to prevent it executing on each re-render
    const throttleFn = useCallback(throttle((city: string)=> makeApiRequestT(city), 1500), [])

    /**
     * Gets the api call from the corresponding value
     * @param  {string} city [The string to look for results]
     */
    const makeApiRequestT = async (city: string) => {

        const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=300&namePrefix=${city}&limit=10`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '60f20fea36msh9ea679c018f38e9p112174jsn978aab31be00',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        }

        try {
            const response: Response = await fetch(url, options)
            const result = await response.text()
            const results: any = JSON.parse(result)
            
            // Set cities value in case the result is higher than 0
            if (results.hasOwnProperty('data') && results.data.length > 0) {
                const citiesList: ICitiesData[] = []

                for (const cityData of results.data) {
                    const cityItem: string = `${cityData.name}, ${cityData.country}`
                    citiesList.push({
                        name: `${cityData.name}, ${cityData.country}`,
                        latitude: cityData.latitude,
                        longitude: cityData.longitude
                    })
                }

                setCitiesData(citiesList)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const makeWeatherApiRequest = async (latitude: string, longitude: string)=> {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=22701db4524b58c1f26b55888022c05b`
        const options = {
            method: 'GET',
            "Content-Type": "application/json",
        }

        try {
            const response: Response = await fetch(url, options)
            const result = await response.text()
            const results: any = JSON.parse(result)
            console.log("api weather is "+results)
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * Gets the value from the input change
     * @param  {[ChangeEvent<HTMLInputElement>]} event [The event passed on change]
     */
    const handleInputChangeEvent = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value
        
        if (value.length > 2) {
            throttleFn(value)
            setInputText(value)
            setIsListOpen(true)
            setInputText(value)
        }
    }

    /**
     * Gets the value from the input change and sets the corresponding states
     * @param  {[ChangeEvent<HTMLInputElement>]} event [The event passed on change]
     * @return {[type]}      [description]
     */
    const handleListClickSelect = (event: ChangeEvent<HTMLInputElement>) => {
        setIsListOpen(false)
        setInputText(event.target.innerHTML)
        // This function will allow overriding the input value
        setIsTypingAllowed(false)
        setIsSelected(true)
        makeWeatherApiRequest("52.5233", "13.41377")
        // setWeatherApiDataRequest
    }

    /**
     * Sets the actions when input is focused
     */
    const handleInputFocusEvent = ()=> {
        // This value will make the attribute value from the input not be overwriten
        setIsTypingAllowed(true)
    }

    return (
        <Styled.Container>
            <Styled.Wrap>
                <InputText
                    handleInputChangeEvent={handleInputChangeEvent}
                    placeholder={placeholder}
                    label={label}
                    name={name}
                    handleInputFocusEvent={handleInputFocusEvent}
                    textSelected={inputText}
                    allowTyping={isTypingAllowed}
                ></InputText>
            </Styled.Wrap>
            <Styled.Wrap>
                { citiesData.length > 1 && isListOpen && inputText.length > 2 
                    ? <CityList 
                        cities={citiesData}
                        handleListClickSelect={handleListClickSelect}
                    ></CityList>
                    : '' 
                }
            </Styled.Wrap>
        </Styled.Container>
    )
}