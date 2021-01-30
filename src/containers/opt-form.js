import React, { useContext, useEffect, useState } from 'react'
import { OptForm } from '../components';
import { GlobalContext } from '../context/globalContext';

export default function OptFormContainer() {
    const { dispatch, state } = useContext(GlobalContext);
    const { githubJobs } = state;

    let cities = [
        { id: 1, name: "London" },
        { id: 2, name: "Amsterdam" },
        { id: 3, name: "New york" },
        { id: 4, name: "Berlin" }
    ];

    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);
    const [selectedCities, setSelectedCities] = useState(null);
    // const [checkCity, setCheckCity] = useState(''); 

    function handleClick() {
        setFullTime(!fullTime);
        dispatch({ type: "fulltime", value: true });
    }

    // function handleCity(e) {
    //     setCheckCity(e.target.value);
    // }

    // useEffect(() => {
    //     const input = checkCity;
    //     const filter = githubJobs.filter((job, city) => job.location.toLowerCase().includes(input.toLowerCase()));
    //     dispatch({ type: "location", value: filter })
    //     console.log(filter);
    // }, [checkCity])

    function handleCity(city) {
        if (selectedCities && city.id === selectedCities.id) {
            setSelectedCities(null);
            dispatch({ type: "location", value: ""})
        } 
        else {
            setSelectedCities(city);
            dispatch({ type: "location", value: city.name })
        }
    }

    function handleLocation(e) {
        if (e.key === "Enter") {
            setSelectedCities(null)
            dispatch({ type: "location", value: location})
        }
    }

    useEffect(() => {
        setSelectedCities(cities[2]);
    }, [])

    return (
        <OptForm>
            <OptForm.Base>
                <OptForm.Group>
                    <OptForm.Input 
                        type="checkbox"
                        name="fullTime"
                        checked={fullTime}
                        onChange={handleClick}
                    />
                    <OptForm.Label>Full time</OptForm.Label>
                </OptForm.Group>
                <OptForm.Group>
                    <OptForm.Label>Location</OptForm.Label>
                    <OptForm.Input 
                        type="text"
                        placeholder="City, state, zip code or country"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyDown={handleLocation}
                    />
                </OptForm.Group>
                <OptForm.Frame>
                    {cities.map(city => (
                        <OptForm.Group key={city.id}>
                            <OptForm.Input 
                                type="checkbox"
                                value={city.name}
                                checked={selectedCities ? city.id === selectedCities.id : false}
                                onChange={() => handleCity(city)}
                            />
                            <OptForm.Label>{city.name}</OptForm.Label>
                        </OptForm.Group>
                    ))}
                </OptForm.Frame>
            </OptForm.Base>
        </OptForm>
    )
}
