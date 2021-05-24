import React from 'react'
import SingleCountry from './SingleCountry'
import Countries from './Countries'



const Display = ({countries, setSearch}) => {
    if (countries.length === 1) {
        return(
            <SingleCountry countries={countries} />
        )
    }
    else if (countries.length <= 10) {

        return(
            <Countries countries={countries} setSearch={setSearch} />
        )
     
     /*   return (
            <div>
            {countries.map(country => 
            <div>
            <p key={country.alpha3Code}>
                {country.name}
                <button onClick={() => setShow(!show)}>show</button>
            </p>           
            <p>
                    capital: {country.capital} <br />
                    population: {country.population}
            </p>               
                <h3>languages</h3>
            <p>
                    {country.languages.map(lang => <p><li>{lang.name}</li></p>)}
                </p>
                <p><img src={country.flag} width='200px'></img></p>
            </div>

            )}  
            </div>
            )*/} else {
            return(
                <div>Too many matches, specify another filter</div>
            )
        }
    }

export default Display