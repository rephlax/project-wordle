import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses/Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import BannerWin from "../BannerWin/BannerWin";
import BannerLose from "../BannerLose/BannerLose";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	//running, won or lost
	const [gameStatus, setGameStatus] = React.useState("running");
	//guess submit handler
	const handleFormSubmit = (textInput) => {
		const nextGuesses = [...guesses, textInput];
		setGuesses(nextGuesses);

		if (textInput.toUpperCase() === answer) {
			setGameStatus("won");
		} else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	};
	return (
		<>
			<Guesses answer={answer} guesses={guesses} />
			<GuessInput handleFormSubmit={handleFormSubmit} gameStatus={gameStatus} />
			{gameStatus === "won" && <BannerWin numOfGuesses={guesses.length} />}
			{gameStatus === "lost" && <BannerLose answer={answer} />}
		</>
	);
}

export default Game;
