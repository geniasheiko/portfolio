import styled from 'styled-components';

type FlexWrapperType = {
    direction?: string
    justify?: string
    align?:string
    wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperType> `
display: flex;
flex-directory: ${props => props.direction || "row"};
justify-content: ${props => props.justify || "flex-start"};
align-item: ${props => props.align || "stretch"};
flex-wrap: ${props => props.wrap || "nowrap"};
`
