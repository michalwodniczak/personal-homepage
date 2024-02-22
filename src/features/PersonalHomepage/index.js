import { Container } from "../../common/Container";
import { Header } from "../../Header";
import { MainStyled } from "./styled";
import { Section } from "../../common/Section";
import { skills, skillsToLearn } from "../skilset";
import { HeaderPortfolio } from "./HeaderPortfolio";
import { Portfolio } from "./Portfolio";
import { Footer } from "../../Footer";

export const PersonalHomepage = () => (
    <Container>
        <Header />
        <MainStyled>
            <Section title="My skillset includes 🛠️" skillList={skills} />
            <Section title="What i want to learn next 🚀" skillList={skillsToLearn} />
            <section>
                <HeaderPortfolio />
                <Portfolio />
            </section>
        </MainStyled>
        <Footer />
    </Container>
);

