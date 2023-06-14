import { useState } from "react"

import * as Styled from "./InputText.styles"

interface IInputText { 
    handleInputChangeEvent: any, 
    placeholder: string, 
    label: string, 
    name: string, 
    handleInputFocusEvent: any, 
    textSelected: string,
    allowTyping: boolean
}

export function InputText({ 
        handleInputChangeEvent, 
        placeholder, 
        label, 
        name, 
        handleInputFocusEvent, 
        textSelected,
        allowTyping
    }: IInputText) {

    // const [isInputInitialised, setIsInputInitialised] = useState<boolean>(false)

    return (
        <Styled.Wrap>
            <Styled.Label htmlFor={`f-${name}`}>{label}</Styled.Label>
            <Styled.Input 
                onChange={handleInputChangeEvent}
                onFocus={handleInputFocusEvent}
                type="text" 
                id={`f-${name}`}
                name={name}
                placeholder={placeholder}
                {...(
                    textSelected && allowTyping === false && { value: textSelected })
                }
            ></Styled.Input>
        </Styled.Wrap>
    )
}