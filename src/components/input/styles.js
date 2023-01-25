import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 27.5rem;
    height: 3rem;
    border-bottom: 1px solid #3B3450;

    display:flex;
    align-items: center;
    margin-bottom: 2rem;
`

export const IconContainer = styled.div`
    margin-right: 1rem;
    color: #8647AD;
    font-size: 1.6rem;
`

export const InputText = styled.input`
    background-color: transparent;
    width: 100%;
    color: #FFFFFF;
    flex:1;
    border: 0;
    height: 3rem;
`
export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 1.2rem;
    margin: 0.5rem 0;
`