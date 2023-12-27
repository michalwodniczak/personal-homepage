import styled from "styled-components";

export const StyledPortfolioItem = styled.div`
    width: 592px;
    height: 322px;
    margin: 32px;
    color: ${({ theme }) => theme.color.mineShaft};
    border: solid 6px ${({theme}) => theme.color.dustyGray};
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    border-radius: 4px;
    padding:24px;
    
    &:hover{
        border: solid 6px ${({theme}) => theme.color.lightBlue};
    };
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 1.2px;
    color: ${({theme}) => theme.color.scienceBlue};
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
`;

export const LinkWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap:8px;
`
export const Paragraph = styled.p`
    padding: 10px;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
    color: ${({theme}) => theme.color.slateGray};
`;
export const StyledLink = styled.a`
    color: ${({theme}) => theme.color.scienceBlue};
`;
