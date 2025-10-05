import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
	const resultsData = calculateInvestmentResults(userInput);

	const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment - resultsData[0].interest;

	// console.log(results);

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultsData.map((yearData) => {
					let totalInterest = yearData.valueEndOfYear - yearData.year * yearData.annualInvestment - initialInvestment;

					return (
						<tr key={yearData.year}>
							{/* Above key is used to identify the rows, so that React can identify which row is being updated and which is being added. If we don't use the key, React will not be able to identify which row is being updated and which is being added. This is the same as we used to do with the List items.*/}
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(yearData.valueEndOfYear - totalInterest)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
