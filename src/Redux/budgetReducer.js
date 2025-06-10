import {ADD_EXPENSE, DELETE_EXPENSE, SET_BUDGET} from './BudgetType';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    budget: 2500,
    expenses: [
        { id: uuidv4(), name: 'Shopping', cost: 50 },
        { id: uuidv4(), name: 'Holiday', cost: 300 },
        { id: uuidv4(), name: 'Transportation', cost: 70 },
        { id: uuidv4(), name: 'Fuel', cost: 40 },
        { id: uuidv4(), name: 'Child Care', cost: 500 },
        { id: uuidv4(), name: 'Medicine', cost: 100 },
    ],
};

export const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
            case DELETE_EXPENSE:
                return {
                    ...state,
                    expenses: state.expenses.filter(
                        (expense) => expense.id !== action.payload
                    ),
                };
            case SET_BUDGET:
                return {
                    ...state,
                    budget: action.payload,
                };
        default:
            return state;
    }
};