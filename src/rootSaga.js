import { all } from "redux-saga/effects"
import { watchFetchRepo } from "./features/PersonalHomepage/Portfolio/portfolioSaga"

export default function* rootSaga() {
    yield all([
        watchFetchRepo(),
    ]);
};