import React, { useState, ChangeEvent, FormEvent  } from 'react';
import styled from 'styled-components';

interface EditTodoProps {
  initial: string;
  setTodo: AddTodo;
}

const Form = styled.form`
  display: inline-block;
`;

const Input = styled.input`
  display: inline-block;
`;

export const EditTodo: React.FC<EditTodoProps> = ({ initial = '', setTodo }) => {

  const [ todoText, setTodoText ] = useState(initial);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setTodo(todoText);
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTodoText(evt.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={todoText} onChange={handleChange} />
    </Form>
  )
}