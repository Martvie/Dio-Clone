import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 12rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    width: 32rem;
    margin-bottom: 2rem;
    line-height: 4.4rem;
    color:  #ffffff;
`

export const TitleHighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.2rem;
    width: 42rem;

    margin-bottom: 2rem;

    color: #FFFFFF;
`
