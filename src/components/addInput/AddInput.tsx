import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../redux/todoList/actions';

const AddInput: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <input type="text" onChange={e => setInputText(e.target.value)} />
      <button onClick={e => dispatch(addTodoAction({ id: Number(new Date()), name: inputText }))}>ADD</button>
    </>
  );
};

export default AddInput;
