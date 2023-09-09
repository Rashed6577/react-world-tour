import { useState } from 'react';
import './country.css'
const Country = ({country, handelVisitedCountry, handleVisitedFlags}) => {

    const [visited, setVisited] = useState(false);

    const handelVisit = () => {
        setVisited(!visited);
    }

    // const passWithParams = () => handelVisitedCountry(country);

    const {name, flags, population, area, cca3} = country;
    return (
        <div className={`country ${visited && 'visit'}`}>
            <h3>Name: {name?.common}</h3>
            <img className='img' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button style={{backgroundColor: 'gray', color: 'white'}} onClick={() => handelVisitedCountry(country)}>Mark as visited</button> <br />
            <button style={{backgroundColor: 'gray', color: 'white', marginTop: '5px'}} onClick={() => handleVisitedFlags(flags)}>Add Flag</button> <br />
            <button className='btn' onClick={handelVisit}>Visited</button>
            {visited ? 'I have visit this Country' : 'I want to visit this Country'}
        </div>
    );
};



export default Country;