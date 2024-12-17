import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

 export const Contact = () => {
return (
<StyledContacts>
    <Container>
    <SectionTitle>Contact</SectionTitle>
    <StyledForm>
        <Fild placeholder={"name"} />
        <Fild placeholder={"subject"}/>
        <Fild placeholder={"message"} as={"textarea"} />
        <Button type={"submit"}>Send message</Button>
    </StyledForm>
    </Container>
</StyledContacts>
);
 };

 const StyledContacts = styled.section`
   background-color: ${theme.colors.primyriBg};
 `
 const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

 `
 const Fild = styled.input`
    
 `