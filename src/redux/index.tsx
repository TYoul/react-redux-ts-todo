import { createStore } from 'redux';
import todoListReducer from './todoList/reducer';

const store = createStore(todoListReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
