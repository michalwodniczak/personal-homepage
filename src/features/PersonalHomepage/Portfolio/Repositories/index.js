import { useSelector } from "react-redux";
import { selectRepositores } from "../portfolioSlice";
import { Wrapper } from "../styled";
import { PortfolioItem } from "../PortfolioItem";

export const Repositories = () => {
    const repositories = useSelector(selectRepositores)
    
    return (
        <>
            <Wrapper>
                {repositories ? repositories.map((repository) => (
                    <PortfolioItem
                        key={repository.id}
                        title={repository.name}
                        description={repository.description}
                        linkDemo={repository.homepage}
                        linkRepo={repository.html_url}
                    />
                )) : ""}
            </Wrapper>
        </>
    )
}