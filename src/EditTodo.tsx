import React, { useState, ChangeEvent, FormEvent  } from 'react';
import styled from 'styled-components';

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
  display: inline-block;
  border: 0;
  outline: 0;
  color: white;
  padding: 0 0 0 12px;
  background: transparent;
`;

const Button = styled.button`
  color: white;
  background: transparent;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 4px 10px;
  cursor: pointer;

  &:hover {
    background: rgba(255,255,255,.2)
  }
`;

export const EditTodo: React.FC<EditTodoProps> = ({ initial = '', setTodo }) => {

  const [ todoText, setTodoText ] = useState(initial);

  const handleSubmit = (evt: FormEvent<HTMLFormElement | HTMLInputElement>) => {
    evt.preventDefault();
    setTodo(todoText);
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTodoText(evt.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input autoFocus type="text" value={todoText} onChange={handleChange} onBlur={handleSubmit} />
      <Button>{initial ? "Update" : "Add"}</Button>
    </Form>
  )
}