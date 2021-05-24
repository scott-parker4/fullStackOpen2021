import React from 'react'
import Weather from './Weather'

const SingleCountry = ({countries}) => {
    return(
        
            <div>
                <h2>{countries[0].name}</h2>
                <p>
                    capital: {countries[0].capital} <br />
                    population: {countries[0].population}
                </p>
                
                <h3>languages</h3>
                
                <p>
                    {countries[0].languages.map(lang => <p><li>{lang.name}</li></p>)}
                </p>
                <p><img src={countries[0].flag} width='200px'></img></p>
                <Weather countries ={countries[0]} />
            </div>
        
    )
}

export default SingleCountry