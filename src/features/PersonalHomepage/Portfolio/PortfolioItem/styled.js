import styled from "styled-components";

export const StyledPortfolioItem = styled.div`
    width: 624px;
    margin:0 auto;
    background-color: ${({ theme }) => theme.color.portfolioItemBackground};
    border: solid 6px rgba(209, 213, 218, 0.3);
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    border-radius: 4px;
    padding:24px;
    transition: 0.3s;
    
    &:hover{
        border: solid 6px rgb(209, 213, 250);
        cursor: pointer;
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px){
        width:100%;
        max-width: 700px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.smallPhone}px){
        width:100%;
        max-width: 320px;
    };
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 1.2px;
    color: ${({ theme }) => theme.color.portfolioItemTitle};

    @media (max-width: ${({ theme }) => theme.breakpoints.smallPhone}px){
        font-size: 16px;
        letter-spacing: 0.8px;
    };
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
    color: ${({ theme }) => theme.color.portfolioItemDescription};

    @media (max-width: ${({ theme }) => theme.breakpoints.smallPhone}px){
        font-size: 14px;
        letter-spacing: 0.7px;
    };
`;

export const LinkWrapper = styled.div`
    display: grid;
    grid-template-columns:auto 1fr;
    align-items: center;
    gap:8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallPhone}px){
        gap:0;
        width: 100%;
        max-width: 320px;
    }
`
export const Paragraph = styled.p`
    padding: 10px;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
    color: ${({ theme }) => theme.color.paragraph};

    @media (max-width: ${({ theme }) => theme.breakpoints.smallPhone}px){
        font-size: 14px;
        letter-spacing: 0.7px;
    };
`;

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.color.portfolioLink};
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallPhone}px){
        font-size: 14px;
    };
`;
