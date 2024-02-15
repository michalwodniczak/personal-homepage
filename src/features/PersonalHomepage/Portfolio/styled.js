import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px){
        gap:24px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
        grid-template-columns: 1fr;
        gap:16px;
    };

`;