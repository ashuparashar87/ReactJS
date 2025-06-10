import React, { useContext, useState,useEffect,useRef} from 'react';
// import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addBudget } from '../Redux/BudgetAction';

const AddExpenseForm = (props) => {
	var inputRef=useRef(null)
	//const { dispatch } = useContext(AppContext);
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

useEffect(() => {
	inputRef.current.focus();
},[]);
	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};
        dispatch(addBudget(expense));
		//  dispatch({
		//  	type: 'ADD_EXPENSE',
		//  	payload: expense,
		//  });

		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
					ref={inputRef}
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
