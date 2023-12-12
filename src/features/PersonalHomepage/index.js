import { Container } from "../../common/Container";
import { Header } from "../../Header";
import { MainStyled } from "./styled";
import { Section } from "../../common/Section";
import { skills, skillsToLearn } from "../skilset";

export const PersonalHomepage = () => (
    <Container>
        <Header />
        <MainStyled>
            <Section title="My skillset includes 🛠️" body={skills} />
            <Section title="What i want to learn next 🚀" body={skillsToLearn} />
        </MainStyled>
    </Container>
);

