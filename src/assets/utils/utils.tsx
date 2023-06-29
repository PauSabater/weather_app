import { IApiForecastResponse } from "../interfaces/interfaces"

export function getRoundedTemp(temp: number) {
    return `${Math.round(temp)}°`
}

export function getUniqueValuesFromArray(array: string[]) {

    const arraySingleValues: string[] = []

    for (const value of array) {
        // Substract single values
        if (arraySingleValues.length === 0 || arraySingleValues.filter((val) => val === value).length === 0) {
            arraySingleValues.push(value)
        }
    }

    return arraySingleValues
}

/**
 * Gets the highest count position from an array from a list of unique keys
 * @param  {string[]} arrayUniqueItems       : Array of the keys to count
 * @param  {string[]} arrayToCount           : Array to count
 * @return {number}                          : The position from arrayUniqueItems where items are most repeated
 */
export function getHighestCountPosition(arrayUniqueItems: string[], arrayToCount: string[]): number {
    const arrayCount: number[] = []

    for (const item of arrayUniqueItems) {
        arrayCount.push(arrayToCount.filter((str)=> item === str).length)
    }
    const maxVal: number = Math.max(...arrayCount)
    let count: number = 0

    for (let value of arrayCount) {
        if (value === maxVal) return count
        else count++
    }

    return count
}

/**
 * Returns the day name locale from the number of days ahead of today
 * @param  {number} daysAhead       : The days ahead of today
 * @return {string}                 : The day name string
 */
export function getDayName(daysAhead: number): string {

    if (daysAhead === 0) return 'Today'

    let nextDay: Date = new Date()
    nextDay.setDate(nextDay.getDate() + daysAhead)

    return nextDay.toLocaleDateString('en', { weekday: 'long' })
}

/**
 * Gets a specific forecast given the date and hour property value
 * @param  {string} displayedDayTime       : The date and hour string
 * @param  {IApiForecastResponse}  apiData    : The data returned from the api response
 * @return {IApiForecastResponse | null}      : The forecast for the specified day and hour, or null if not found
 */
export const getSpecificForecast = (displayedDayTime: string, apiData: IApiForecastResponse[]): IApiForecastResponse | null => {
    for (const forecast of apiData) {
        if (!forecast.dt_txt.includes(displayedDayTime)) continue
        return forecast
    }
    return null
}

/**
 * If a dayTime string includes the keyword 'midnight' return a formated string
 * @param  {string} dayTime        : the string to format
 * @return {string}                : formated string
 */
export const formatedDayTime = (dayTime: string): string => {
    console.log(dayTime)
    return dayTime.includes('midnight')
        ? `${dayTime.split(' ')[0]} 00:00:00`
        : dayTime
}

/**
 * Formats a value so that first character is uppercase and the rest is lowercase
 * @param  {string} value        : the string to format
 * @return {string}              : formated string
 */
export function formatFirstCharacterUpperCase(value: string): string {
    if (value.includes(' ')) {
        const formatedString = value.split(' ')[0].toLowerCase()
        const firstWord = formatedString.charAt(0).toUpperCase() + formatedString.slice(1)
        return `${firstWord} ${value.substring(value.indexOf(' ')+1)}`
    } else {
        console.log('value is', value)
        value = value.toLowerCase()
        console.log('value is now', value)
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
}