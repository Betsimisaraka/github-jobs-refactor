import React, { useContext, useEffect, useState } from 'react'
import { OptForm } from '../components';
import { GlobalContext } from '../context/globalContext';

export default function OptFormContainer() {
    const { state, dispatch } = useContext(GlobalContext);

    const [location, setLocation] = useState('');
    const [selectedCities, setSelectedCities] = useState(null);
    const [fullTime, setFullTime] = useState(false);

    let cities = [
        { id: 1, name: "London" },
        { id: 2, name: "Amsterdam" },
        { id: 3, name: "New york" },
        { id: 4, name: "Berlin" }
    ];

    function handleClick() {
        setFullTime(!fullTime);
        dispatch({ type: "fulltime", value: true });
    }

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
                                type="radio"
                                checked={selectedCities ? city.id === selectedCities.id: false}
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
