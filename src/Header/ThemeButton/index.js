import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Button, Paragraph, Icon, IconWrapper } from "./styled";
import { toggleTheme, selectTheme } from "./themeSwitchSlice";

export const ThemeButton = () => {
    const dispatch = useDispatch();
    const themeSwitch = useSelector(selectTheme);

    return (
        <Wrapper>
            <Paragraph>Dark mode {themeSwitch ? "on" : "off"}</Paragraph>
            <Button onClick={() => dispatch(toggleTheme())}>
                <IconWrapper moveTheButtonToTheRight={themeSwitch}>
                    <Icon />
                </IconWrapper>
            </Button>
        </Wrapper>
    );
};
