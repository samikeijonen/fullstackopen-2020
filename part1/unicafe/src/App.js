import React, { useState } from 'react'

import Button from './components/Button';
import Header from './components/Header';

import './App.css';

function sum(good, neutral, bad) {
	return (
		good + neutral + bad
	);
}

function SumAll({good, neutral, bad}) {
	return (
		sum(good, neutral, bad)
	);
}

function Average({good, neutral, bad}) {
	return (
		( good + neutral * 0 + bad * -1 ) / sum(good, neutral, bad)
	);
}

function Positive({good, neutral, bad}) {
	return (
		good / sum(good, neutral, bad) * 100
	);
}

function Stat({text, value}) {
	return(
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
}

function Statistics({good, neutral, bad}) {
	if (good === 0 && neutral === 0 && bad === 0) {
		return(
			<p>No feedback yet.</p>
		);
	}

	return(
		<>
			<table>
				<caption>Stats data</caption>
				<thead><tr><th>Heading</th><th>Value</th></tr></thead>
				<tbody>
					<Stat text="Good" value={good} />
					<Stat text="Neutral" value={neutral} />
					<Stat text="Bad" value={bad} />

					<tr>
						<td>All</td>
						<td><SumAll good={good} neutral={neutral} bad={bad} /></td>
					</tr>
					<tr>
						<td>Average</td>
						<td><Average good={good} neutral={neutral} bad={bad} /></td>
					</tr>
					<tr>
						<td>Positive</td>
						<td><Positive good={good} neutral={neutral} bad={bad} />%</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

function App() {

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	function handleGoodClick() {
		setGood(good + 1);
	}

	function handleNeutralClick() {
		setNeutral(neutral + 1);
	}

	function handleBadClick() {
		setBad(bad + 1);
	}

	return (
		<main className="App">
			<Header level={1} title="Give Feedback" />

			<Button handleClick={handleGoodClick} text="Good" />
			<Button handleClick={handleNeutralClick} text="Neutral" />
			<Button handleClick={handleBadClick} text="Bad" />

			<Header level={2} title="Stats" />

			<Statistics good={good} neutral={neutral} bad={bad} />
		</main>
	);
}

export default App;
