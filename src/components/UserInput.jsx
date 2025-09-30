import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
	// Here we need userInput prop, as we have Lifted the state up into the App component, and we need to put the updated values back into the Input field, so we get a userInput prop from the App component, and put the value into the Input fields.

	// const [userInputs, setUserInputs] = useState({
	// 	initialInvestment: 10000,
	// 	annualInvestment: 1200,
	// 	expectedReturn: 6,
	// 	duration: 10,
	// });

	// function handleChange(event) {
	// 	setUserInputs((prevUserInputs) => ({ ...prevUserInputs, [event.target.name]: event.target.value }));
	// }

	// function handleChange(userInputField, userInputValue) {
	// 	setUserInputs((prevUserInput) => ({ ...prevUserInput, [userInputField]: userInputValue }));
	// }

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="initial-investment">Initial Investment</label>
					<input
						// onChange={handleChange}
						//       Above way when I used the name attribute as "initialName".

						// onChange={(event) => handleChange("initialInvestment", event.target.value)}
						//     Above way when I used the handleChange function in this component. And below way when we lifted the state and function to App component.
						onChange={(event) => onChange("initialInvestment", event.target.value)}
						value={userInput.initialInvestment}
						type="number"
						// name="initialInvestment"
						name="initial-investment"
						required
					/>
				</p>

				<p>
					<label htmlFor="annual-investment">Annual Investment</label>
					<input
						type="number"
						// onChange={(event) => handleChange("annualInvestment", event.target.value)}
						onChange={(event) => onChange("annualInvestment", event.target.value)}
						value={userInput.annualInvestment}
						required
					/>
				</p>
			</div>

			<div className="input-group">
				<p>
					<label htmlFor="expected-return">Expected Return</label>
					<input
						type="number"
						// onChange={(event) => handleChange("expectedReturn", event.target.value)}
						onChange={(event) => onChange("expectedReturn", event.target.value)}
						value={userInput.expectedReturn}
						required
					/>
				</p>

				<p>
					<label htmlFor="duration">duration</label>
					<input
						type="number"
						// onChange={(event) => handleChange("duration", event.target.value)}
						onChange={(event) => onChange("duration", event.target.value)}
						value={userInput.duration}
						required
					/>
				</p>
			</div>
		</section>
	);
}
