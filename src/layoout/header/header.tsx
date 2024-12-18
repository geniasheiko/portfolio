import React from 'react'; 
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { HeaderMenu } from './HeaderMenu';

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <div>
<StyledHeader>
    <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
   <Logo />
   <HeaderMenu menuItems={items}/>
   </FlexWrapper>
   </Container>
</StyledHeader>
        </div>
    )
};

const StyledHeader = styled.header`
background: rgba(31, 31, 32, 0.9);
padding: 20px 0px;
position: fixed;
top:0;
left: 0;
right: 0;
z-index: 99999;
`