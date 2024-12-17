import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Work} from './work/Work';
import socialImg from './../../../assets/images/proj-1.webp';
import timerlImg from './../../../assets/images/proj-2.webp'
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';


const worksItems = ["All", "Lending page", "React", "SPA"];

export const Works = () => {
    return (
       <StyledWorks>
        <Container>
        <SectionTitle>My Works</SectionTitle>
<TabMenu menuItems={worksItems}/>
<FlexWrapper justify={"space-between"} align={"flex-start"}>
    <Work title={"Social Network"} 
    src={socialImg}
    text="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."/>
    <Work title={"Timer"} 
    src={timerlImg}
    text="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. 
    Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen"/>
</FlexWrapper>
</Container>
       </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color:#1F1F20;
`
