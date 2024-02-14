import styled from "styled-components";
import { ReactComponent as logo } from "./logo.svg"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-size:30px;
    font-weight: 900;
    letter-spacing: 1.5px;
    color:${({ theme }) => theme.color.sectionTitle};

    @media (max-width: ${({theme}) => theme.breakpoints.smallPhone}px){
        font-size: 18px;
        letter-spacing: 0.9px;
    }
`;

export const Logo = styled(logo)`
    width: 40px;
    height: 40px;
    flex-shrink: 0;

    @media (max-width: ${({theme}) => theme.breakpoints.smallPhone}px){
        width:32px;
    };
`;

export const Paragraph = styled.span`
    font-size:20px;
    line-height: 140%;
    letter-spacing: 1px;
    color:${({theme}) => theme.color.paragraph};

    @media (max-width: ${({theme}) => theme.breakpoints.smallPhone}px){
        font-size: 17px;
        letter-spacing: 0.85px;
    };
`;