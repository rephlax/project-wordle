import React from "react";

function GuessInput({ handleFormSubmit }) {
	const [textInput, setTextInput] = React.useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		handleFormSubmit(textInput);
		setTextInput("");
	};

	const handleChange = (event) => {
		const nextGuess = event.target.value.toUpperCase();
		setTextInput(nextGuess);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="guess-input-wrapper">
				<label htmlFor="guess-input">Enter Guess:</label>
				<input
					value={textInput}
					onChange={handleChange}
					id="guess-input"
					type="text"
					pattern="[a-zA-Z]{5}"
					minLength={5}
					maxLength={5}
				></input>
			</form>
		</>
	);
}

export default GuessInput;
