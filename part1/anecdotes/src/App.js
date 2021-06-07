import React, { useState } from "react"

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ]

  const [selected, setSelected] = useState(0)

  const setToValue = (newValue) => {
    setSelected(newValue)
  }

  const rand = () => Math.floor(Math.random() * 6)

  const [votes, setVotes] = useState(
    new Array(6 + 1).join("0").split("").map(parseFloat)
  )

  const handleVoteClick = () => {
    const voteCopy = [...votes]
    voteCopy[selected] += 1
    setVotes(voteCopy)
  }

  const handleNextClick = () => {
    setToValue(rand)
  }

  const winner = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[winner]}</p>
    </div>
  )
}

export default App
