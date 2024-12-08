import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
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
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
   background-color: #ffe5e4;
   min-height: 100vh;
`