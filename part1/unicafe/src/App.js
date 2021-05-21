import React, { useState } from 'react'

const Statistics = (props) => {
  const {good, bad, neutral} = props
  const all =  good + bad + neutral
  const avg = (all === 0) ? 0 : (good + (neutral * 0) + bad * -1) / all
  const pos = (all === 0) ? 0 : (good / all) * 100 

  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <Statistic text='good' stats={good} />
          <Statistic text='neutral' stats={neutral} />
          <Statistic text='bad' stats={bad} />
          <Statistic text='all' stats={all} />
          <Statistic text='average' stats={avg} />
          <Statistic text='positive' stats={pos} />
        </tbody>
      </table>
    </div>
  )
}

const Statistic = (props) => {
return (
  <tr>
    <td>{props.text}</td>
    <td>{props.stats}</td>
  </tr>
)
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
   
  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='Good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
    
  )
}

export default App
