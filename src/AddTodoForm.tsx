import React, { MouseEvent } from 'react';
import styled from 'styled-components';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const Button = styled.button`

`;

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {

  const newTodo = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    addTodo('');
  }

  return (
      <Button onClick={newTodo} type="submit">New Todo</Button>
  )
}