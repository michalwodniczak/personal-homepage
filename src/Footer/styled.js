import styled from "styled-components";

export const Wrapper = styled.footer`
    width: 691px;
    background-color: ${({ theme }) => theme.color.whiteLiliac};
    padding:32px;
`
export const Paragraph = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color:${({ theme }) => theme.color.slateGray};
`
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 1.6px;
    color:${({ theme }) => theme.color.mineShaft};
`

export const Text = styled.p`
    color:${({ theme }) => theme.color.mineShaft};
`

export const Icons = styled.div`
    margin-top:56px;
    display: flex;
    gap:20px;
`

export const Link = styled.a`
    color: ${({ theme }) => theme.color.mineShaft};
    transition: 0.3s;
    
    &:visited{
        color: ${({ theme }) => theme.color.mineShaft};
    };
    
    &:focus{
        color: ${({ theme }) => theme.color.scienceBlue};
    };
    
    &:hover{
        color: ${({ theme }) => theme.color.scienceBlue};
    };

`

export const IconStyle = (Icon) => styled(Icon)`
    width: 48px;
    height: 48px;
`
