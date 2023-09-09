import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countries = () => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitadFlags, setVisitedFlags] = useState([]);

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handelVisitedCountry = country => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        const newVisitedflages = [...visitadFlags, flag];
        setVisitedFlags(newVisitedflages);
    }

    return (
        <>
        <h3>Countries: {countries.length}</h3>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>

        <h5>Visited Flag</h5>
        <div className="flag">
        {
            visitadFlags.map((flag, idx) => <img key={idx} src={flag.png}></img>)
        }
        </div>
        <div className="country-container">
            
            {
                countries.map(country => <Country 
                    handelVisitedCountry={handelVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    key={country.cca3} 
                    country={country} ></Country>)
            }
        </div>
        </>
    );
};

export default Countries;