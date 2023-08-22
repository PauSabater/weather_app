## Import the component on a React project

`import { WeatherApp } from 'weather-app-ps/dist/cjs'`

## Use the component on a React project

`<WeatherApp/>`

## Personalise texts

The component includes default texts that can be modified by passing an object to the component

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
### Adding the component with the new texts
Add new object with `texts` property:

`<WeatherApp texts={texts}/>`


## Personalised styles
The component includes a series of css variables that can be overriten in order to modify the style

### Available variables and default values

```
/* padding */
--pd-xs: 5px;
--pd-sm: 10px;
--pd-md: 15px;
--pd-lg: 20px;
--pd-xl: 30px;
--pd-xl: 40px;
--pd-2xl: 50px;

--pd-screen: var(--pd-md);
--pd-fullwidth: 0 5vw;

--pd-inner-component: var(--pd-lg);

/* Margins */
--mg-xs: 5px;
--mg-sm: 10px;
--mg-md: 15px;
--mg-lg: 20px;
--mg-xl: 30px;
--mg-xl: 40px;
--mg-2xl: 50px;

--mg-between-components: var(--mg-lg);

/* Sizes */
--sz-content: 100%;

/* Colors */
--c-black: hsl(0, 0%, 4%);
--c-grey: hsl(0, 0%, 50%);
--c-grey-light: hsl(0, 0%, 83%);

/* Backgrounds */
--bg-main: hsl(0, 0%, 100%);
--bg-box-content: rgb(246, 247, 252);
--bg-grey-hover: hsl(0, 0%, 90%);
--bg-grey-selected: hsl(0, 0%, 85%);

/* Transitions */
--tr-base: 0.3s;

/* Font size */
--fs-2xl: 2.7rem;
--fs-xl: 2rem;
--fs-lg: 1.5rem;
--fs-base: 1.1rem;
--fs-sm: 1rem;
--fs-xs: 0.9rem;
--fs-2xs: 0.75rem;

/* Font color */
--fc-dark: hsl(0, 0%, 5%);
--fc-global: hsl(0, 0%, 20%);
--fc-light: hsl(0, 0%, 40%);

/* Font weight */
--fw-bold: 800;
--fw-medium: 600;

/* Font family */
--f-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

/* Borders */
--c-border: hsl(241, 0%, 75%);
--br-separator: 1px solid var(--c-border);
--br-content: 2px solid var(--c-grey-light);
--br-content-style: dotted;

/* Border radius */
--br-r-base: 10px;

/* Box shadow */
--input-bs: 4px 1px 13px 4px rgba(0,0,0,0.12);
--input-bs-focus: 4px 1px 13px 4px rgba(0,0,0,0.17);

/* Heights */
--input-height: 50px;
--row-first-height: 230px;

/* Transitions */
--tr-base: 0.3s;
```

### Overriting the styles. Example

```
const stylesNew = `
    --bg-box-content: red;
    --fs-base: 1.2rem;
`
```

Add styles with property `stylesOverride`

`<WeatherApp stylesOverwrite={stylesNew}/>`