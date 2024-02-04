import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 32px;

    @media (max-width: ${({theme}) => theme.breakpoints.laptop}px){
        gap:10px;
    };

    @media (max-width: ${({theme}) => theme.breakpoints.smallLaptop}px){
        gap:10px;
    }
    
    @media (max-width: ${({theme}) => theme.breakpoints.phone}px){
        grid-template-columns: 1fr;
        gap:16px;
    };


`;