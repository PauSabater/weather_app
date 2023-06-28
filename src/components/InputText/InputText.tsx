import { ChangeEventHandler } from "react"
import * as Styled from "./InputText.styles"
import React from 'react'
import { search } from '../../assets/svg/icons/search'
import parse from 'html-react-parser'

interface IInputTextProps {
    handleInputChangeEvent: ChangeEventHandler<HTMLInputElement>,
    placeholder: string,
    name: string,
    handleInputFocusEvent: any,
    textSelected: string,
    allowTyping: boolean,
    isExpanded: boolean
}

export function InputText({
        handleInputChangeEvent,
        placeholder,
        name,
        handleInputFocusEvent,
        textSelected,
        allowTyping,
        isExpanded
    }: IInputTextProps) {

    return (
        <Styled.Wrap>
            <Styled.IconWrap>
                {parse(search)}
            </Styled.IconWrap>
            <Styled.Input
                onChange={handleInputChangeEvent}
                onFocus={handleInputFocusEvent}
                type="text"
                id={`f-${name}`}
                name={name}
                placeholder={placeholder}
                aria-expanded={isExpanded}
                aria-controls="list-cities"
                {...(
                    textSelected && allowTyping === false && { value: textSelected })
                }
            ></Styled.Input>
        </Styled.Wrap>
    )
}