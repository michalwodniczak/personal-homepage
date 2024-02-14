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
    color: ${({ theme }) => theme.color.title};
`

export const Error = styled(error)`
    width: 48px;
    height: 48px;
    path {
    stroke: ${({ theme }) => theme.color.error};
    };
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.color.paragraph};
`
export const Link = styled.a`
    margin-top:32px;
    display: inline-block;
    border-radius:5px;
    width: 168px;
    padding: 16px 12px;
    text-align: center;
    color: ${({ theme }) => theme.color.buttonColor};
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: ${({ theme }) => theme.color.errorButton};

    &:hover{
        box-shadow: 0px 0px 0px 2px rgba(0, 160, 255, 1);
    }
`