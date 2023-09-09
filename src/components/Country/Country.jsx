
import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(true)
    }
    const { name, flags, population, area, cca3 } = country;
    // console.log(country);
    return (
        <div className='country'>
            <h3>Name:{name.common}</h3>
            <img className='img-width' src={flags.png} alt="" />
            <h5>Population: {population}</h5>
            <h6>Area: {area}</h6>
            <p><small>code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
        </div>
    );
};

export default Country;