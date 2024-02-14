import styled, { css } from "styled-components";
import { ReactComponent as sunIcon } from "./brightness.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction:flex-end;
    justify-content: flex-end;
    align-items: center;
    gap:15px;
`;
export const Button = styled.button`
    display:flex;
    align-items: center;
    padding:3px;
    width: 48px;
    height: 26px;
    border:1px solid ${({ theme }) => theme.color.themeBorderButton};
    background-color: ${({theme}) => theme.color.themeBackground};
    border-radius: 30px;
    cursor:pointer;
`;

export const Paragraph = styled.p`
    font-size:12px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.themeText};

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
        display: none;
    }
`;

export const IconWrapper = styled.span`
    background-color: ${({ theme }) => theme.color.themeIconWrapper};
    padding:3px;
    transition: transform 0.3s;
    display:flex;
    border-radius: 50%;
    
     ${({ moveTheButtonToTheRight }) =>
        moveTheButtonToTheRight &&
        css`
        transform: translateX(20px);
    `} 
`;

export const Icon = styled(sunIcon)`
    align-items: center;
    justify-content: center;
    fill: ${({ theme }) => theme.color.themeIcon};
`;
