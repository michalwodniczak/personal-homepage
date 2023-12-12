import styled from "styled-components";
import { ReactComponent as elipse } from "./elipse.svg";

export const Wrapper = styled.div`
    margin:0 auto;
    width:1216px;
    border-radius:4px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    padding: 32px; 
`
export const Header = styled.h2`
    margin:20px auto;
    padding-bottom:15px;
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1.5px;
    border-bottom: 1px solid ${({ theme }) => theme.color.iron};
`;

export const Body = styled.div`
    padding:0;
    margin:0;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style-type: none;
    font-size:18px;
    line-height: 140%;
    letter-spacing: 0.9px;
    gap:8px;
`;

export const ListItem = styled.li`
    color: ${({ theme }) => theme.color.slateGray};
`;

export const Image = styled(elipse)`
    color: ${({ theme }) => theme.color.scienceBlue};
    margin-right: 16px;
`;
