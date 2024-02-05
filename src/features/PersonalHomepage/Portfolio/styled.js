import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 32px;

    @media (max-width: ${({theme}) => theme.breakpoints.laptop}px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:14px;
    };

    @media (max-width: ${({theme}) => theme.breakpoints.phone}px){
        grid-template-columns: 1fr;
        gap:16px;
    };

`;