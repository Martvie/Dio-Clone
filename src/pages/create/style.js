import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 12rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    width: 38rem;
    margin-bottom: 2rem;
    line-height: 4.4rem;
    color:  #ffffff;
`

export const TitleCreate = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    margin-bottom: 2rem;
    line-height: 4.4rem;
`

export const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    margin-bottom: 3.5rem;
    line-height: 2.5rem;
`

export const Wrapper = styled.main`
    max-width: 38rem;
`

export const Column = styled.div`
    flex: 1;

    &:last-child{
        display: flex;
        justify-content: end;
    }
`

export const TextWrapper = styled.div`
    margin: 3rem 0;
`
export const HaveAccount = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2rem;

    & a {
        color: #23DD7A;
        cursor: pointer;
    }

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }

`