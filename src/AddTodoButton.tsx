import React, { MouseEvent } from 'react';
import styled from 'styled-components';

interface AddTodoButtonProps {
  addTodo: AddTodo;
}

const Button = styled.button`

`;

export const AddTodoButton: React.FC<AddTodoButtonProps> = ({ addTodo }) => {

  const newTodo = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    addTodo('');
  }

  return (
      <Button onClick={newTodo} type="submit">New Todo</Button>
  )
}