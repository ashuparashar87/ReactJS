import {ADD_EXPENSE} from './BudgetType';
import {DELETE_EXPENSE} from './BudgetType';
import {SET_BUDGET} from './BudgetType';
// Types
export interface Expense {
    id: string;
    name: string;
    cost: number;
}
// Action Createor
export const addBudget = (budget:Expense) => {
    return {
        type: ADD_EXPENSE,
        payload: budget,
    };
}

export const deleteExpense = (id:string) => {
    return {
        type: DELETE_EXPENSE,
        payload: id,
    };
};


export const setBudget = (value:number) => {
    return {
        type: SET_BUDGET,
        payload: value,
    };
}