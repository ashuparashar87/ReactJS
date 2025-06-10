import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import UseCustomHook from './components/UseCustomHook';
import { Provider } from 'react-redux'; 
import store from './Redux/store';


const App = () => {
	return (
		// <AppProvider>
			<Provider store={store}>
			<div className='container'>
			<DataFetchingOne></DataFetchingOne>
			<DataFetchingTwo></DataFetchingTwo>
			<UseCustomHook></UseCustomHook>
				<h1 className='mt-3'>My Expense Tracker</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
			</Provider>
		// </AppProvider>
	);
};

export default App;
