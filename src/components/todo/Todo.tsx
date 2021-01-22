import React from 'react';

interface Props {
  name: string;
}

const Todo: React.FC<Props> = ({ name }) => {
  return <span>{name}</span>;
};

export default Todo;
