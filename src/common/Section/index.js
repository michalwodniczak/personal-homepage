import { Header, Wrapper, Body, List, ListItem, Image } from "./styled";

export const Section = ({ title, skillList }) => (
    <Wrapper>
        <Header>{title}</Header>
        <Body>
            <List>
                {skillList.map((skill) => (
                    <ListItem key={skill}>
                        <Image />
                        {skill}
                    </ListItem>
                ))}
            </List>
        </Body>
    </Wrapper>
);