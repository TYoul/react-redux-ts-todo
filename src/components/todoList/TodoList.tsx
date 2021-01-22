import React from 'react';
import { delTodoAction } from '../../redux/todoList/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';

import Todo from '../todo/Todo';

const TodoList: React.FC = () => {
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  return (
    <ul>
      {todoList.map(item => (
        <div>
          <Todo key={item.id} name={item.name} />
          <button onClick={e => dispatch(delTodoAction(item.id))}>DEL</button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
