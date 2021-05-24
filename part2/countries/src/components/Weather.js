import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({countries}) => {
    const [weather, setWeather] = useState("")
    const api_key = process.env.REACT_APP_API_KEY
    const capital = countries.capital
    const api = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`

    useEffect (() => {
        axios.get(api).then((response) => {
            setWeather(response.data)
            console.log(response.data)
        })
    }, [api])

    return !weather ? (
        <div>No weather information available</div>
    ) : (
        <div>
            <h2>Weather in {capital}</h2>
            <p>
                <strong>Temperature:</strong> {weather.current.temperature} <br />
                <img src={weather.current.weather_icons[0]} alt="weather icon" /> <br />
                <strong>Wind:</strong> {weather.current.wind_speed}mph {weather.current.wind_dir}
            </p>
            
        </div>
    )
}

export default Weather