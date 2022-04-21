import { useState } from 'react'

const Display = (props) => <div>{props.text}, {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const [counter, setCounter] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const args = props

  const updateValues = (args) => {
    setCounter(props.good + neutral + bad);
    setAverage(((good) + (bad * (-1))) / counter);
    setPositive();
  }

  return (
    <div>
      <Display text="reviews" value={counter} />
      <Display text="average" value={(average / counter)} />
      <Display text="positive" value={((good / counter) * 100)} />
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodToValue = () => {
    setGood(prev => prev + 1);
  }

  const neutralToValue = () => {
    setNeutral(prev => prev + 1);
  }

  const badToValue = () => {
    setBad(prev => prev + 1);
  }

  return (
    <div>
      <div>
        <h1>hullo; welcyum to mine good coffe haus</h1>
        <Button handleClick={() => goodToValue()} text="good" />
        <Button handleClick={() => neutralToValue()} text="neutral" />
        <Button handleClick={() => badToValue()} text="bad" />
      </div>
      <div>
        <Display text="good" value={good} />
        <Display text="neutral" value={neutral} />
        <Display text="bad" value={bad} />
        <Statistics {...updateValues()} good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
    
  )
}

export default App