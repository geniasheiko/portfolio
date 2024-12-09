import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

 export const Contact = () => {
return (
<StyledContacts>
    <SectionTitle>Contact</SectionTitle>
    <StyledForm>
        <Fild placeholder={"name"} />
        <Fild placeholder={"subject"}/>
        <Fild placeholder={"message"} as={"textarea"} />
        <Button type={"submit"}>Send message</Button>
    </StyledForm>
</StyledContacts>
);
 };

 const StyledContacts = styled.section`
 min-height: 50hv;
    background-color: #fffae1;
 `
 const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;

 `
 const Fild = styled.input`
    
 `