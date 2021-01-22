import { ADDTODO, DELTODO } from './constants';
import { ModifyAction } from './actions';

export interface StoreState {
  todoList: { id: number; name: string }[];
}

const defaultState: StoreState = {
  todoList: [
    { id: 1, name: '李磊' },
    { id: 2, name: '韩梅梅' },
    { id: 3, name: 'cobe' },
  ],
};

const todoListReducer = (state = defaultState, action: ModifyAction): StoreState => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELTODO:
      return { todoList: state.todoList.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

export default todoListReducer;
