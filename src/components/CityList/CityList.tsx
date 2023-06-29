import { ICitiesData } from "../../assets/interfaces/interfaces"
import * as Styled from "./CityList.styles"
import React from 'react'

interface ICityListProps {
    citiesData: ICitiesData[],
    handleListClickSelect: any
}

export function CityList({
    citiesData,
    handleListClickSelect
}: ICityListProps) {

    return (
        <Styled.Wrap
            id="list-cities"
        >
            {citiesData.map((cityData: ICitiesData, index: number) =>
                <Styled.Item
                    tabIndex={0}
                    key={`id-${cityData}-${index}`}
                    value={cityData.name}
                    data-latitude={cityData.latitude}
                    data-longitude={cityData.longitude}
                    onClick={handleListClickSelect}
                >{`${cityData.name}, ${cityData.country}`}
                </Styled.Item>
            )}
        </Styled.Wrap>
    )
}