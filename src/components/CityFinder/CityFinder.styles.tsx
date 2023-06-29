import styled from 'styled-components'

export const Wrap = styled.div`
    position: relative;
    margin-bottom: var(--mg-between-components);
`

export const Container = styled.div`
    position: relative;
`

export const ErrorMessage = styled.p`
    position: absolute;
    margin: 0;
    bottom: 0;
    color: red;
    font-size: var(--fs-xs);
    transform: translateY(150%);
`