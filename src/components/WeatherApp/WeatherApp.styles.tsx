import styled from 'styled-components'
import { colors, media } from '../../assets/styles/Common.styles'

export const WrapMain = styled.div`
    // Colors:
    --c-rain: ${colors.rain};
    --c-rain-light: ${colors.rainLight};
    --c-temp: ${colors.temp};
    --c-temp-light: ${colors.tempLight};
    --c-wind: ${colors.wind};
    --c-wind-light: ${colors.windLight};
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

    ${media.mobile} {
        grid-template-columns: 60% 40%;
    }
`

export const WrapBannerForecastNextDays = styled.div`
    position: relative;
`