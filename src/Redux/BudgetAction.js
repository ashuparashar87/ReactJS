// Action Createor
import {ADD_EXPENSE} from './BudgetType';
import {DELETE_EXPENSE} from './BudgetType';
import {SET_BUDGET} from './BudgetType';

export const addBudget = (budget) => {
    return {
        type: ADD_EXPENSE,
        payload: budget,
    };
}

export const deleteExpense = (id) => {
    return {
        type: DELETE_EXPENSE,
        payload: id,
    };
};

export const setBudget = (value) => {
    return {
        type: SET_BUDGET,
        payload: value,
    };
}