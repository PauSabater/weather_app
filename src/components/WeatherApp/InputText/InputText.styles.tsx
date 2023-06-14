import styled from 'styled-components'

export const Label = styled.label`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: var(--mg-sm);
`

export const Input = styled.input`
    font-size: 1.1rem;
    height: var(--input-height);
    border-radius: 10px;
    padding: 0 20px;
    border: 1px solid grey;
    z-index: 10;
`

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`