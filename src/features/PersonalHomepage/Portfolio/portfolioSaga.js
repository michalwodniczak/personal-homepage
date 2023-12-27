import { call, put, takeLatest, delay } from "redux-saga/effects"
import { getRespositores } from "./getPortfolio"
import { fetchRepo, setRepo, setStatus } from "./portfolioSlice";


function* fetchRepositioriesHandler() {
    try {
        yield delay(2000);
        const repo = yield call(getRespositores);
        yield put(setRepo(repo));
        yield put(setStatus("success"));
    } catch {
        yield put(setStatus("error"))
    };
};

export function* watchFetchRepo() {
    yield takeLatest(fetchRepo.type, fetchRepositioriesHandler);
};


