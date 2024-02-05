import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    margin-bottom:63px;

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
        flex-direction: column;
    }
   
    @media (min-width: ${({ theme }) => theme.breakpoints.smallPhone}px){
        margin-bottom: 16px;
    };
`;

export const Image = styled.img`
   margin-left:76px;
   width: 398px;
   height: 398px;
   border-radius:50%;

   @media (max-width:${({ theme }) => theme.breakpoints.tablet}px){
    width: 300px;
   }

   @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
    width: 133px;
    height: 133px;
    margin-left:20px;
   };
`;

export const Container = styled.div`
    margin-left: 66px;
    display: flex;
    flex-direction: column;
    padding:20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
        margin-left: 0;
    };
`;

export const Paragraph = styled.p`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 130%;
    color:${({ theme }) => theme.color.slateGray};
`;

export const Title = styled.h1`
    margin-top: -8px;
    font-size: 38px;
    font-weight: 900;
    letter-spacing: 1.9px;
    color: ${({ theme }) => theme.color.mineShaft};

    @media (max-width: ${({ theme }) => theme.breakpoints.smallPhone}px){
        font-size: 22px;
        letter-spacing: 1.1px;
    }
`;

export const Description = styled.p`
    font-size:20px;
    line-height: 140%;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.color.slateGray};

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
        font-size:17px;
        letter-spacing: 0.85px;
    }
`;
export const Button = styled.a`
    display: inline-flex;
    width: 154px;
    font-size:20px;
    color:${({ theme }) => theme.color.white};
    text-decoration: none;
    padding:12px 16px;
    justify-content: center;
    gap:16px;
    align-items: center;
    background-color: ${({ theme }) => theme.color.scienceBlue};
    border: 1px solid ${({ theme }) => theme.color.iron};
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px){
        width:138px;
        font-size: 18px;
        gap:12px;
    }
`;
