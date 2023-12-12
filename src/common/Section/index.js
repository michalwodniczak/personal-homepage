import { Header, Wrapper, Body, List, ListItem, Image } from "./styled";

export const Section = ({ title, body }) => (
    <Wrapper>
        <Header>{title}</Header>
        <Body>
            <List>
                {body ? body.map((skill) => (
                    <ListItem key={skill}>
                        <Image />
                        {skill}
                    </ListItem>
                )) : ""}
            </List>
        </Body>
    </Wrapper>
);