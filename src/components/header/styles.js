import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    max-width: 80%;
    height: 4.7rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 4.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchInputContainer = styled.div`
    width: 17.5rem;
    height: 3rem;
    background: #2d2d37;
    border-radius: 0.8rem;
    padding: 2px 5px;
    margin: 0 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Menu = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #ffffff;
    margin-right: 1.2rem;
    text-decoration: none;
`
export const MenuRight = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #ffffff;
    margin-right: 1.2rem;
    text-decoration: none;
    `

export const UserPicture = styled.img`
    widht: 3.2rem;
    height: 3.2rem;
    border-radius: 2.2rem;
    border: 2px solid #ffffff;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #ffffff;
`