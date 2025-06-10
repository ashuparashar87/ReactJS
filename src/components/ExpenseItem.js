import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
// import { AppContext } from '../context/AppContext';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../Redux/BudgetAction';



const ExpenseItem = (props) => {
	//const { dispatch } = useContext(AppContext);
	 const dispatch = useDispatch();

	// const handleDeleteExpense = () => {
	// 	dispatch({
	// 		type: 'DELETE_EXPENSE',
	// 		payload: props.id,
	// 	});
	// };
	const handleDeleteExpense = () => {
		dispatch(deleteExpense(props.id));
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3'>₹{props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;
