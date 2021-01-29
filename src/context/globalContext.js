import React, { createContext, useEffect } from "react";
import UseReducer from '../hooks/use-context';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const { state, dispatch } = UseReducer();
    const { description, location, fullTime } = state;
    console.log(state);

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                const CORS = "https://cors-anywhere.herokuapp.com/";
                const URL_API = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}&markdown=true`;
                const response = await fetch(CORS + URL_API);
                const data = await response.json();
                console.log(data);
                //Sharing into five each page
                // setCountPage(Math.ceil(data.length / perPage));
                dispatch({ type: "FETCH_JOBS", githubJob: data });
            }
            fetchData();
        }, 500);
    }, [ description, fullTime, location ]);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider };