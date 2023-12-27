import styled from "styled-components";
import { ReactComponent as error } from "./error.svg";

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 80px;
`;

export const Title = styled.h3`
    font-size:24px;
    font-weight: 700;
    letter-spacing: 1.2px;
`

export const Error = styled(error)`
    width: 48px;
    height: 48px;
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 1px;
`
export const Link = styled.a`
    margin-top:32px;
    display: inline-block;
    width: 168px;
    padding: 16px 12px;
    text-align: center;
    color: ${({theme}) => theme.color.white};
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: ${({theme}) => theme.color.scienceBlue};
`