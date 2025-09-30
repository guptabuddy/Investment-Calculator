import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
	// lifting state up from the UserInput component, because this userInput date is needed in the UserInput component and the Results component as well.
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = userInput.duration >= 1;

	// Function brought here from the UserInput component.
	function handleChange(userInputField, userInputValue) {
		setUserInput((prevUserInput) => ({ ...prevUserInput, [userInputField]: parseInt(userInputValue) }));

		// In the above line, while we are putting the userInputValue into its respective property we are using either the "+" or "parseInt" function, this is because while we get the value from the input field, it is a string, so we need to convert it into an integer. Otherwise String concatenation will happen while calculating values in the Results component (inside calculateInvestmentResults function).
	}

	return (
		<>
			<Header />
			<UserInput onChange={handleChange} userInput={userInput} />
			{!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
			{inputIsValid && <Results userInput={userInput} />}
		</>
	);
}

export default App;
