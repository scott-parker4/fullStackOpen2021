import React from 'react'

const Countries = ({countries, setSearch}) => {
    
    
    return(
        <div>
        {countries.map(country => 
        <div>
        <p key={country.alpha3Code}>
            {country.name}
            <button onClick={() => setSearch(country.name)}>show</button>
        </p> 
                  
       
        </div>

        )}  
        </div>
    )
}

export default Countries