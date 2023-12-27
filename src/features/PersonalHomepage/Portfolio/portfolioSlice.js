import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        repositories: null,
        status: "loading",
    },
    reducers: {
        fetchRepo: () => { },

        setRepo: (state, { payload: repositories }) => {
            state.repositories = repositories;
        },

        setStatus: (state, { payload: status }) => {
            state.status = status;
        },
    },

});

export const selectPortolioState = state => state.portfolio;
export const { fetchRepo, setRepo, setStatus } = portfolioSlice.actions;

export const selectRepositores = (state) => selectPortolioState(state).repositories;
export const selectStatus = (state) => state.portfolio ? state.portfolio.status : "loading";

export default portfolioSlice.reducer;