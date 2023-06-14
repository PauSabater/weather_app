import { ICitiesData } from "../../../assets/ts/interfaces/interfaces"
import * as Styled from "./CityList.styles"

export function CityList({ cities, handleListClickSelect }: { cities: ICitiesData[], handleListClickSelect: any }) {
    
    return (
        <Styled.Wrap>
            {cities.map((cityData: ICitiesData, index: number) => 
                <Styled.Item
                    key={`id-${cityData}-${index}`}
                    value={cityData.name}
                    data-latitude={cityData.latitude}
                    data-longitude={cityData.longitude}
                    onClick={handleListClickSelect}
                >{cityData.name}
                </Styled.Item>
            )}
        </Styled.Wrap>
    )
}