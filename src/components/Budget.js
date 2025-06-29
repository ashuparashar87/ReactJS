import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
// import { AppContext } from '../context/AppContext';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBudget } from '../Redux/BudgetAction';



const Budget = () => {
	 const budget = useSelector((state) => state.budget);
	 const dispatch = useDispatch();
    //const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		// dispatch({
		// 	type: 'SET_BUDGET',
		// 	payload: value,
		// });
		dispatch(setBudget(value));
		setIsEditing(false);
	};

	return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;
