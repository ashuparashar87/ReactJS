import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useSelector } from 'react-redux';

const ExpenseTotal = () => {
	// const { expenses } = useContext(AppContext);
	 const expenses = useSelector((state) => state.expenses);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4'>
			<span>Spent so far: ₹{total}</span>
		</div>
	);
};

export default ExpenseTotal;
