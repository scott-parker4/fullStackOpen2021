import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Phonebook from './components/Phonebook'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import phoneService from './services/phoneService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    phoneService
    .getAll()
    .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const filterMatch = persons.map(value => value.name.toLowerCase())
    const updatePerson = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
    const nameObject = {
      name: newName,
      number: newNumber  
    } 
    
    if (filterMatch.includes(nameObject.name)) {
      if (window.confirm(`${nameObject.name} is already added to phonebook, replace the old number with a new one?`)) {
        
        const personId = updatePerson[0].id
        console.log(personId)
        phoneService
          .update(personId, nameObject)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) => 
              person.id === personId ? updatedPerson : person
              )
            )
            setNewName('')
            setNewNumber('')
            setMessage(`${newName} was updated`)
            setTimeout(() => {
            setMessage(null)
              }, 5000)
          })
          .catch((error) => {
            console.log(error)
            setMessage(
              `Error ${updatePerson[0].name} was already deleted from server`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
    } else {
    phoneService
        .create(nameObject)
        .then(response => {
          console.log(response.data)
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      setMessage(`${newName} was added`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
    }
  }

  const deletePerson = (id) => {
    const delPerson = persons.filter( person => person.id === id )
    const personId = delPerson[0].id
    const personName = delPerson[0].name
    if (window.confirm(`Delete ${personName}?`)) {
          phoneService
              .remove(personId) 
              setMessage(`${personName} was deleted`)
              setTimeout(() => {
              setMessage(null)
                }, 5000)         
    }
    setPersons(persons.filter(person => person.id !== personId))

  }

  const handleFilter = (event) => {
    setFilterName(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  

  let filteredPersons = persons

  if (filterName) {
    filteredPersons = persons.filter(
      person => person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value={filterName} onChange={handleFilter} />
        <h2>add new</h2>
        <PersonForm addName={addName} 
                    newName={newName} 
                    handleNameChange={handleNameChange} 
                    newNumber={newNumber} 
                    handleNumberChange={handleNumberChange} 
        />
        <Notification message={message} />
      <h2>Numbers</h2>
        <Phonebook persons={filteredPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App
