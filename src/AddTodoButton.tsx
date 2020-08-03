import React, { MouseEvent, useContext } from 'react';
import styled from 'styled-components';
import TodoContext from './todoContext';

const Button = styled.button`

`;

export const AddTodoButton: React.FC = () => {

  const { addTodo } = useContext(TodoContext);

  const newTodo = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    addTodo('');
  }

  return (
      <Button onClick={newTodo} type="submit">New Todo</Button>
  )
}