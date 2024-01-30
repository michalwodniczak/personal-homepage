import styled from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    gap:72px;
    flex-direction: column;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px){
       margin:0 auto;
    }
`