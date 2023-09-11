import CountryData from "../CountryData/CountryData";

const CountryDetails = ({ handleVisitedCountry, handleAddFlag, country }) => {
    return (
        <div>
            <p>Country details: {country.name.common}</p>
            <CountryData />
        </div>
    );
};

export default CountryDetails;