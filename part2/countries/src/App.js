import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import Display from './components/Display'



const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)

  let filteredCountries = []

  if (search) {
    filteredCountries = countries.filter(
      country => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    )
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log({filteredCountries})
  }

  

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  return (
    <div>
      <SearchBar value={search} onChange={handleSearch} />
      <Display countries={filteredCountries} setSearch={setSearch} />
      
    </div>
  )
}

export default App;
