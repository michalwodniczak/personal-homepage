import { Wrapper, Error, Title, Paragraph , Link} from "./styled";

export const ErrorPage = () => (
    <Wrapper>
        <Error />
        <Title>Ooops! Something went wrong...</Title>
        <Paragraph>Sorry, failed to load Github projects.
            You can check them directly on Github.</Paragraph>
        <Link href="https://github.com/widmo200?tab=repositories" target="_blank" rel="noreferrer">Go to Github</Link>
    </Wrapper>
)