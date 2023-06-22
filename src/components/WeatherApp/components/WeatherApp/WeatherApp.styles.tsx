import { keyframes } from 'styled-components'
import styled from 'styled-components/macro'
import { colors } from '../../assets/styles/Common.styles'

export const WrapMain = styled.div`
    // Fonts
    --fs-2xl: 2.7rem;
    --fs-xl: 2rem;
    --fs-lg: 1.5rem;
    --fs-base: 1.1rem;
    --fs-sm: 1rem;

    --fc-dark: hsl(0, 0%, 5%);
    --fc-global: hsl(0, 0%, 20%);
    --fc-light: hsl(0, 0%, 40%);

    --fw-bold: 800;
    --fw-medium: 600;

    // Colors:
    --c-rain: ${colors.rain};
    --c-rain-light: ${colors.rainLight};
    --c-temp: ${colors.temp};
    --c-temp-light: ${colors.tempLight};
    --c-wind: ${colors.wind};
    --c-wind-light: ${colors.windLight};

    // Background
    --bg-grey-hover: hsl(0, 0%, 90%);
    --bg-grey-selected: hsl(0, 0%, 85%);

    // Borders:
    --c-border: hsl(241, 0%, 75%);
    --br-separator: 1px solid var(--c-border);
    --br-r-base: 10px;

    // Box shadow
    --input-bs: 4px 1px 13px 4px rgba(0,0,0,0.12);
    --input-bs-focus: 4px 1px 13px 4px rgba(0,0,0,0.17);

    // Heights
    --input-height: 50px;
    --row-first-height: 230px;

    // Transitions
    --tr-base: 0.3s;

    display: grid;
    font-size: var(--fs-base);
    color: var(--fc-global);
    grid-template-columns: 0.6fr 0.4fr;
    grid-gap: var(--pd-md);
    padding: 80px;
`

export const WrapFirstColumn = styled.div`
    display: flex;
    flex-direction: column; 
    grid-column-start: 1;
`

export const WrapCurrentConditions = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    row-gap: var(--pd-xs); 
`

export const WrapBannerForecastNextDays = styled.div`
`