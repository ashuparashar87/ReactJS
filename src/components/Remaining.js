import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AppContext } from '../context/AppContext';

// const RemainingBudget = () => {
// 	const { expenses, budget } = useContext(AppContext);

// 	const totalExpenses = expenses.reduce((total, item) => {
// 		return (total += item.cost);
// 	}, 0);

// 	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

// 	return (
// 		<div class={`alert p-4 ${alertType}`}>
// 			<span>Remaining: ₹{budget - totalExpenses}</span>
// 		</div>
// 	);
// };
const RemainingBudget = () => {
    const budget = useSelector((state) => state.budget);
    const expenses = useSelector((state) => state.expenses);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert p-4 ${alertType}`}>
            <span>Remaining: ₹{budget - totalExpenses}</span>
        </div>
    );
};

export default RemainingBudget;
