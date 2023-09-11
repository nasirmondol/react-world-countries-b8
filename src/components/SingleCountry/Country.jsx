import { useState } from 'react';
import './country.css'
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({ country, handleVisitedCountry, handleAddFlag }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country);
    const { name, flags, area, population, capital, cca3 } = country;

    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className='country-container'>
            <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
                <img src={flags?.png} alt="" />
                <h3>{name?.common}</h3>
                <p>Area: {area}</p>
                <p>Population: {population}</p>
                <p>City: {capital}</p>
                <p>Code: {cca3}</p>
                <button onClick={() => handleAddFlag(country)}>Add flag</button>
                <br />
                <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button><br />
                <button onClick={handleVisited}>{visited ? 'Visited' : 'Go later'}</button>
                <br />
                <label>{visited ? `I am visited ${name?.common}` : `I want to visit ${name.common}`}</label>
                <hr />
                <CountryDetails
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    handleAddFlag={handleAddFlag}
                ></CountryDetails>
            </div>

        </div>
    );
};

export default Country;