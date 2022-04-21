import { useState } from 'react'

// const Display = ({props}) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }
      //simplified below

const Display = ({ counter }) => <div>{counter}</div> //destructured, and compacted because it contains only the return statement

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button 
        onClick={increaseByOne}
        text='plus' 
      />
      <Button 
        onClick={setToZero}
        text='zero' 
      />
      <Button 
        onClick={decreaseByOne}
        text='minus' 
      />
    </div>
  )
}

export default App