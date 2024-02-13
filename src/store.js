import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import portfolioReducer from "./features/PersonalHomepage/Portfolio/portfolioSlice";
import rootSaga from "./rootSaga";
import themeSwitchReducer from "./Header/ThemeButton/themeSwitchSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        themeSwitch: themeSwitchReducer,
    },
    middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

