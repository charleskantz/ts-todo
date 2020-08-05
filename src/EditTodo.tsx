import React, { useState, ChangeEvent, FormEvent  } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

/*
  EditTodo: text input for editing todo text inline
*/

interface EditTodoProps {
  initial: string;
  setTodo: AddTodo;
}

const Form = styled.form`
  display: inline;
`;

const Input = styled.input`
  font-size: inherit;
  font-family: inherit;
  display: inline-block;
  border: 0;
  outline: 0;
  color: white;
  padding: 0 0 0 12px;
  background: transparent;
`;

export const EditTodo: React.FC<EditTodoProps> = ({ initial = '', setTodo }) => {

  const [ todoText, setTodoText ] = useState(initial);

  const handleSubmit = (evt: FormEvent<HTMLFormElement | HTMLInputElement>) => {
    evt.preventDefault();
    setTodo(todoText || "New Todo");
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTodoText(evt.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        autoFocus
        type="text"
        value={todoText}
        onChange={handleChange}
        onBlur={handleSubmit}
        placeholder="New Todo"
      />
      <Button label={initial ? "Update" : "Add"} />
    </Form>
  )
}