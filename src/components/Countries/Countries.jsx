import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    const handleVistedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h1>Total number o countries: {countries.length}</h1>
            <h3>Number of Visited country: {visitedCountries.length}</h3>
            {
                visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
            }
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        country={country}
                        handleVistedCountries={handleVistedCountries}
                        key={country.cca3}
                    ></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;