import React, { createContext, useEffect, useState } from "react";
import UseReducer from '../hooks/use-context';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const { state, dispatch } = UseReducer();
    const { description, location, fullTime, githubJobs } = state;

    const [offset, setOffeset] = useState(0);
    const [perPage] = useState(5);
    const [countPage, setCountPage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                const CORS = "https://cors-anywhere.herokuapp.com/";
                const URL_API = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}`;
                const response = await fetch(CORS + URL_API);
                const data = await response.json();
                //Sharing into five each page
                setCountPage(Math.ceil(data.length / perPage));
                dispatch({ type: "FETCH_JOBS", githubJob: data });
            }
            fetchData();
        }, 500);
    }, [ description, fullTime, location, offset ]);

    function handleClick(e) {
        const selectedPage = e.selected
        setOffeset(selectedPage + 1);
    }

    const sliceGithubJobs = githubJobs.slice(offset, offset + perPage);

    return (
        <GlobalContext.Provider value={{ state, dispatch, handleClick, sliceGithubJobs, countPage }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider };