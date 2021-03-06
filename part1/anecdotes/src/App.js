import React, { useState } from 'react';

import './App.css';

function App() {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	];

	const [selected, setSelected] = useState(0);
	const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

	function getRandomInt() {
		return Math.floor(Math.random() * Math.floor(anecdotes.length));
	}

	function handleRandom() {
		setSelected(getRandomInt());
	}

	function handleVote() {
		const newPoints = [...points]
		newPoints[selected] += 1;
		setPoints(newPoints);
	}

	return (
		<main className="App">
			<h1>Random anecdotes</h1>
			{anecdotes[selected]}: has {points[selected]} votes
			<button onClick={handleVote}>Vote</button>
			<button onClick={handleRandom}>Random anecdote</button>

			<h2>Anocted with most votes</h2>
			{anecdotes[points.indexOf(Math.max(...points))]}: has {Math.max(...points)} votes
		</main>
	);
}

export default App;
