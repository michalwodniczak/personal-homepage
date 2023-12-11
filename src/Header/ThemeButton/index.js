import { Wrapper, Button, Paragraph, Icon , IconWrapper } from "./styled";

export const ThemeButton = () => {
    return (
        <Wrapper>
            <Paragraph>dark mode off</Paragraph>
            <Button>
                <IconWrapper>
                    <Icon />
                </IconWrapper>
            </Button>
        </Wrapper>
    );
};
