import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 32x;
`
export const Tile = styled.div`
    width:592px;
    height: 322px;
    margin: 32px;
    color: ${({ theme }) => theme.color.mineShaft};
    border: solid 6px ${({theme}) => theme.color.dustyGray};
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    border-radius:4px;
    
    &:hover{
        border: solid 6px ${({theme}) => theme.color.lightBlue};
    };
`