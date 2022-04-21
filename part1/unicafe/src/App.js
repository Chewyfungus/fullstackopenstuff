import { useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const StatisticLine = ({text, value}) => {
  // once i had everything else done i googled the solution to figure out how to add the % after the value lol
	if (text === "positive") {
    return (
    	<tr><td>{text} {value} %</td></tr>
		)
	}

	return (
		<tr><td>{text} {value}</td></tr>
	)
}

const Statistics = ({clicks}) => {
	const total = (clicks.good + clicks.neutral + clicks.bad)
	const average = (clicks.good * 1 + clicks.bad * -1) / total
	const positive = clicks.good * (100 / total)

	if (total === 0) { return(<div>no feedback</div>) }

	return (
		<div>
			<table>
				<tbody>
					<StatisticLine text="good" value={clicks.good} />
					<StatisticLine text="neutral" value={clicks.neutral} />
					<StatisticLine text="bad" value={clicks.bad} />
					<StatisticLine text="total" value={total} />
					<StatisticLine text="average" value={average} />
					<StatisticLine text="positive" value={positive} />
				</tbody>
			</table>
		</div>
	)
}


const Button = ({ onClick, text }) => (
	<button onClick={onClick}>
		{text}
	</button>
)

const App = () => {
	// save clicks of each button to own state
	const [clicks, setClicks] = useState({
		good: 0, neutral: 0, bad: 0
	})

	const goodToValue = () => {
		setClicks({
			...clicks, 
			good: clicks.good + 1})
	}

	const neutralToValue = () =>
		setClicks({
			...clicks, 
			neutral: clicks.neutral + 1
		})

	const badToValue = () =>
		setClicks({
			...clicks, 
			bad: clicks.bad + 1
		})

	return (
		<div>
			<Header name="welgum to mein cofe haus :)" />
			<Button onClick={goodToValue} text='good' />
			<Button onClick={neutralToValue} text='neutral' />
			<Button onClick={badToValue} text='bad' />
			<Header name="Statistics" />
			<Statistics clicks={clicks} />
		</div>
	)
}

export default App