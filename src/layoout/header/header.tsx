import React from 'react'; 
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

export const Header = () => {
    return (
        <div>
<StyledHeader>
   <Logo />
   <Menu/>
    
</StyledHeader>
        </div>
    )
};

const StyledHeader = styled.header`
background-color: #d4ffd3;
display: flex;
justify-content: space-between
`