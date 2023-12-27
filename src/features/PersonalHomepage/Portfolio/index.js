import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepo, selectRepositores, selectStatus } from "./portfolioSlice";
import { Loading } from "./Loading";
import { ErrorPage } from "./Error";
import { Wrapper } from "./styled";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {

    const repoStatus = useSelector(selectStatus);
    const repositories = useSelector(selectRepositores);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepo())
    }, [dispatch]);

    switch (repoStatus) {
        case "loading":
            return <Loading />;
        case "error":
            return <ErrorPage />;
        case "success":
            try {
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
            catch {
                return "";
            }
        default:
            return null;
    };
};