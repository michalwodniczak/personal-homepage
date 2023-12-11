import { Wrapper, Image, Container, Title, Paragraph, Description, Button } from "./styled";
import { ReactComponent as Envelope } from "./envelope.svg";
import { aboutMe } from "../common/aboutMe";
import author from "../images/author.png";
import { ThemeButton } from "./ThemeButton";

export const Header = () => (
    <>
        <ThemeButton />
        <Wrapper>
            <Image src={author} alt="Michał Wodniczak" />
            <Container>
                <Paragraph>this is</Paragraph>
                <Title>{aboutMe.name}</Title>
                <Description>{aboutMe.description}</Description>
                <Button href={aboutMe.url} title={aboutMe.url}>
                    <Envelope />
                    Hire me
                </Button>
            </Container>
        </Wrapper>
    </>
);
