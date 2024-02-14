import { Wrapper, Paragraph, Email, Text, Icons, Link } from "./styled";
import { aboutMe } from "../common/aboutMe";
import { socials } from "./socials";

export const Footer = () => (
    <Wrapper>
        <Paragraph>let's talk</Paragraph>
        <Email href={aboutMe.url}>{aboutMe.mail}</Email>
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