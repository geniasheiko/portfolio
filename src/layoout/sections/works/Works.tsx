import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Work} from './work/Work';
import socialImg from './../../../assets/images/proj-1.webp';
import timerlImg from './../../../assets/images/proj-2.webp'


const worksItems = ["All", "Lending page", "React", "SPA"];

export const Works = () => {
    return (
       <StyledWorks>
        <SectionTitle>My Works</SectionTitle>
<Menu menuItems={worksItems}/>
<FlexWrapper justify={"space-around"}>
    <Work title={"Social Network"} 
    src={socialImg}
    text="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."/>
    <Work title={"Timer"} 
    src={timerlImg}
    text="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. 
    Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen"/>
</FlexWrapper>
       </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100hv;
    background-color: #deefff;
`
