import { configureStore } from '@reduxjs/toolkit';

import {budgetReducer} from './budgetReducer'; // Ensure the correct path to your reducer

const store = configureStore({
  reducer: budgetReducer,
});
export default store;