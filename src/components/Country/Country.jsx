/* eslint-disable react/prop-types */
import './Country.css'
const Country = ({ country }) => {
    const { name, flags } = country;
    console.log(country);
    return (
        <div className='country'>
            <h3>name:{name.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;