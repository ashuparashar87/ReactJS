import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
// import { AppContext } from '../context/AppContext';
import { useSelector } from 'react-redux';
<h1>hi</h1>

const ExpenseList = () => {
	//const { expenses } = useContext(AppContext);
	 const expenses = useSelector((state) => state.expenses);
	 
	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
					    key={expense.id}
					    d={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;
