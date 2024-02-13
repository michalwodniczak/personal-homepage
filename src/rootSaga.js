import { all } from "redux-saga/effects";
import { watchFetchRepo } from "./features/PersonalHomepage/Portfolio/portfolioSaga";
import { themeSaga } from "./Header/ThemeButton/themeSaga";
export default function* rootSaga() {
    yield all([
        watchFetchRepo(),
        themeSaga(),
    ]);
};