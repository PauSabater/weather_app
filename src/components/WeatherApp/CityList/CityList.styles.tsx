import styled, { keyframes } from 'styled-components'

export const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Wrap = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    box-shadow: 0px 5px 23px 1px #000000;
    border-radius: 5px;
    z-index: 1;
    background-color: var(--bg-main);
    animation: ${appear} 1s;
`

export const Item = styled.li`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: var(--pd-sm) var(--pd-sm);
    transition: background var(--tr-base);
    border-radius: 5px;

    &:hover {
        background: lightgrey;
        font-weight: bold;
    }
`