import { ADDTODO, DELTODO } from './constants';

interface ADDTODO {
  type: typeof ADDTODO;
  payload: { id: number; name: string };
}

interface DELTODO {
  type: typeof DELTODO;
  payload: number;
}

export type ModifyAction = ADDTODO | DELTODO;

export const addTodoAction = (payload: { id: number; name: string }): ADDTODO => ({
  type: ADDTODO,
  payload,
});

export const delTodoAction = (payload: number): DELTODO => ({
  type: DELTODO,
  payload,
});
