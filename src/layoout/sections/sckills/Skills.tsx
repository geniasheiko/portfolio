import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
<SectionTitle>My skills</SectionTitle>
<FlexWrapper wrap={"wrap"} justify={"space-between"}>
    <Skill iconId={"code"} title={"html5"}
    description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>
    <Skill iconId={"css"} title={"css3"}
    description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>
    <Skill iconId={"react"} title={"React"}
    description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>
   <Skill iconId={"figma"} title={"React"}
    description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>
    <Skill iconId={"styleComponents"} title={"React"}
    description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>
    <Skill iconId={"typescript"} title={"React"}
    description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>     
</FlexWrapper>
</Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
   background-color:rgba(31, 31, 32, 0.9);
  
`