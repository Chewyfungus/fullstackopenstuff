import { useState } from 'react'

const Header = (props) => {
  const text = props.text
  return (<h1>{text}</h1>)
}

const Button = ({ onClick, text }) => (
	<button onClick={onClick}>
		{text}
	</button>
)

const Display = (props) => {
  const text = props.text
  return (<div>{text}</div>)
}

const Best = ({anecdotes, votes}) => {
  const bestVote = Math.max(...votes)
  const bestIndex = votes.indexOf(bestVote)
  const best = anecdotes[bestIndex]

  if (bestVote === 0) {
    return (
      <p>none</p>
    )
  }

    return (
      <div>
        <p>{best}</p>
        <p>has {bestVote} votes</p>
      </div>
    )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [best, setBest] = useState(0)

  const getVotes = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const getSelected = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }

  return (
    <div>
      <Header text="Quote of the Day!" />
      <Display text={anecdotes[selected]} />
      <br></br>
      <Display text="votes: " />
      <Display text={votes[selected]} />
      <Button onClick={getVotes} text="vote" />
      <Button onClick={getSelected} text="get quote" />
      <Header text="Best Quote: " />
      <Best anecdotes={anecdotes} votes={votes} />
    </div>

  )
}

export default App