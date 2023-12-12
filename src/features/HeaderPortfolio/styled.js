import styled from "styled-components";
import { ReactComponent as logo } from "./logo.svg"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h2`
    font-size:30px;
    font-weight: 900;
    letter-spacing: 1.5px;
    color:${({ theme }) => theme.color.mineShaft};
`
export const Logo = styled(logo)`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
`
export const Paragraph = styled.span`
    font-size:20px;
    line-height: 140%;
    letter-spacing: 1px;
    color:${({theme}) => theme.color.mineShaft};
`