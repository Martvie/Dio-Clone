import styled, {css} from "styled-components";

export const ButtonContainer = styled.button `
    background-color: #565656;
    border-radius: 2.2rem;
    position: relative;

    color: #ffffff;
    padding: 0.2rem 1.2rem;
    min-width: 12rem;
    width: 100%;
    
    &:hover {
        cursor: pointer;
    }

    ${({variant}) => variant !== "primary" && css`
    min-width: 167px;
    height: 33px;
    
    background: #E4105D;

    &:hover {
        opacity: 0.6;
    }

    &::after {
        content: '';
        position: absolute;
        border: 1px solid #E4105D;
        top: -0.5rem;
        left: -0.6rem;
        width: calc(100% + 1rem);
        height: calc(100% + 1rem);
        border-radius: 2.2rem; 
            }
    `}
    `