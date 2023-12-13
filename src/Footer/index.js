import { Wrapper, Paragraph, Title, Text, Icons, Link } from "./styled";
import { aboutMe } from "../common/aboutMe";
import { socials } from "./socials";

export const Footer = () => (
    <Wrapper>
        <Paragraph>let's talk</Paragraph>
        <Title>{aboutMe.mail}</Title>
        <Text>{aboutMe.footerDescription}</Text>
        <Icons>
            {socials.map(({ name, url, Icon }) => (
                <Link href={url} title={name} target="_blank" key={name}>
                    <Icon />
                </Link>
            ))}
        </Icons>
    </Wrapper>
);