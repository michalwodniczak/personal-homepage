import styled from "styled-components";
import { ReactComponent as circle } from "./loading.svg"

export const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 80px;
`;
export const Title = styled.h2`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.color.mineShaft};
    padding: 20px;

`;
export const Loader = styled(circle)`
    width: 160px;
    height: 160px;
`;