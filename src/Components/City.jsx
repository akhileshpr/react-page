import React, { useState } from 'react';

function City() {
    const [cityName, setCityName] = useState([]); 
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const addCity = () => {
        const trimmedCity = city.trim(); 
        if (!trimmedCity) {
            setError('City name cannot be empty or just whitespace');
        } else if (cityName.map(c => c.toLowerCase()).includes(trimmedCity.toLowerCase())) {
            setError(`${city} already added..`);
        } else {
            setCityName([...cityName, trimmedCity]);
            setCity('');
            setError('');
        }
    };

    return (
       <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
           <div style={{backgroundColor:'#e0e7ed'}} className='p-5 rounded'>
                <div className='mt-5 d-flex justify-content-center'>
                    <input 
                        onChange={(e) => setCity(e.target.value)} 
                        value={city} 
                        type="text" 
                        className='rounded p-2' 
                        placeholder='Enter city name' 
                    />
                    <button style={{backgroundColor:'#477191'}} className='btn ms-3 text-white' onClick={addCity}>Add City</button>
                </div>
                
                {error && <div className="text-danger mt-2">{error}</div>}

                <div>
                    <ul className='mt-3 d-flex justify-content-center align-items-center flex-column'>
                        {cityName.map((city, index) => (
                            <li style={{backgroundColor:'#c7d3dd'}} className='border p-2 mt-2 rounded w-100' key={index}>{city}</li>
                        ))}
                    </ul>
                </div>
           </div>
       </div>
    );
}

export default City;
