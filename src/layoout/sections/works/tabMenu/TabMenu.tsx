import React from 'react';
import styled from 'styled-components';
import { LinkStyled} from '../../../../components/Link';


export const TabMenu = (props: {menuItems:Array<string>}) => {
    return (
        <StyleTabMenu>
<ul>
            {props.menuItems.map((item, index)=> {
                return <ListItem key={index}>
                    <LinkStyled href="">{item}</LinkStyled>
                    </ListItem>
            })}
           
         
        </ul>
    </StyleTabMenu>
   

    )
};

const StyleTabMenu = styled.nav `
margin-bottom: 30px;
ul {
display: flex;
gap: 20px;
justify-content: center;
}
`
const ListItem = styled.li`
    
`

