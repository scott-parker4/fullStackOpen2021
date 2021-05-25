import React from 'react'

const Phonebook = ({persons, deletePerson}) => {
    return(
      <div>
        {persons.map(person => <p key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></p>)}
      </div>
    ) 
  }

  export default Phonebook