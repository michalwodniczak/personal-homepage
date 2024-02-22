import styled from "styled-components";

export const Wrapper = styled.footer`
    max-width: 691px;
    background-color: ${({ theme }) => theme.color.footerBackground};
    padding: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallPhone}px){
        padding: 10px;
    };
`;

export const Paragraph = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.paragraph};
`;
export const Email = styled.a`
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 1.6px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.title};
    transition: 0.3s;

    &:hover{
        color: ${({ theme }) => theme.color.emailHover}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
        font-size: 18px;
        letter-spacing: 0.9px;
    };
`;

export const Text = styled.p`
    font-size: 18px;
    letter-spacing: 0.9px;
    line-height: 140%;
    color: ${({ theme }) => theme.color.paragraph};

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
        font-size: 14px;
        letter-spacing: 0.7px;
    };
`;

export const Icons = styled.div`
    margin-top: 56px;
    display: flex;
    gap: 20px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.footerLink};
    transition: 0.3s;
    
    &:visited{
        color: ${({ theme }) => theme.color.footerLink};
    };
    
    &:focus{
        color: ${({ theme }) => theme.color.footerLinkActive};
    };
    
    &:hover{
        color: ${({ theme }) => theme.color.footerLinkActive};
    };
`;

export const IconStyle = (Icon) => styled(Icon)`
    width: 48px;
    height: 48px;

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
        width: 32px;
        height: 32px;
    };
`;
