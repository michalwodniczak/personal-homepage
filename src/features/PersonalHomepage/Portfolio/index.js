import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepo, selectStatus } from "./portfolioSlice";
import { Loading } from "./Loading";
import { ErrorPage } from "./Error";
import { Repositories } from "./Repositories";

export const Portfolio = () => {
    const repoStatus = useSelector(selectStatus);
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
            return <Repositories />
        default:
            return null;
    };
};