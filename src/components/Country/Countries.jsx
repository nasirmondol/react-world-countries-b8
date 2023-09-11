import { useEffect } from "react";
import { useState } from "react";
import Country from "../SingleCountry/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [addFlag, setAddFlag] = useState([]);
    console.log(addFlag);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountry = visitCountry => {
        const newVisiteCountry = [...visitedCountries, visitCountry];
        setVisitedCountries(newVisiteCountry)
    };

    const handleAddFlag = flag => {
        const newFlag = [...addFlag, flag];
        setAddFlag(newFlag);
    }

    return (
        <div>
            <div className="flag-container">
                {
                    addFlag.map((singleFlag, idx) => <img key={idx} src={singleFlag.flags.png}></img>)
                }
            </div>
            <h2>Visited Countries: {visitedCountries.length}</h2>
            {
                visitedCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)
            }
            <h2>Countries</h2>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.name.common}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleAddFlag={handleAddFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;