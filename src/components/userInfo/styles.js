import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 2.4rem;
` 

export const UserPicture = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 2.2rem;
    border: 3px solid #FFFFFF;
    margin-right: 1.2rem;
`

export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #FFFFFF;
` 

export const Progress = styled.div`
    width: 18rem;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
` 