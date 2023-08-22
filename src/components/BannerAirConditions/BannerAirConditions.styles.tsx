import styled from 'styled-components'
import { media } from '../../assets/styles/Common.styles'
export { Title } from '../../assets/styles/Common.styles'

export const Container = styled.div`
    grid-row-start: 1;
    grid-column-start: 2;
    background-color: var(--bg-box-content);
    border-radius: var(--br-r-base);
    padding: var(--pd-inner-component);
    border: var(--br-content);
    border-style: var(--br-content-style);

    ${media.mobile} {
        padding: var(--pd-sm);
        margin-top: 80px;

        p:first-child {
            display: none;
        }
    }
`