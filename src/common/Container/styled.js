import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 200px auto;
    max-width: 1300px;

    @media (max-width: ${({theme})=> theme.breakpoints.phone}px){
        margin-top: 30px;
    };
`;