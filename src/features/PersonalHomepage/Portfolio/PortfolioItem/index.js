import { StyledPortfolioItem, Title, Description, Paragraph, LinkWrapper, StyledLink } from "./styled";

export const PortfolioItem = ({ title, description, linkDemo, linkRepo }) => (
    <StyledPortfolioItem>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LinkWrapper>
            {linkDemo ?
                <>
                    <Paragraph>Demo:</Paragraph> <StyledLink href={linkDemo} target="_blank">{linkDemo}</StyledLink>
                </>
                : ""}
            {linkRepo ?
                <>
                    <Paragraph>Code:</Paragraph> <StyledLink href={linkRepo} target="_blank">{linkRepo}</StyledLink>
                </>
                : ""}
        </LinkWrapper>
    </StyledPortfolioItem>
);