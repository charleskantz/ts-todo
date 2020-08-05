import React, { useState, ChangeEvent, FormEvent, FocusEvent  } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

/*
  EditTodo: text input for editing todo text inline
*/

interface EditTodoProps {
  initial: string;
  setTodo: SetTodo;
  date: Date;
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

interface TodoData {
  text: string
  date: Date;
}

export const EditTodo: React.FC<EditTodoProps> = ({ initial = '', setTodo, date }) => {

  const [ todoData, setTodoData ] = useState({ text: initial, date });


  const handleSubmit = (evt: FormEvent<HTMLFormElement | HTMLInputElement>) => {
    evt.preventDefault();
    setTodo(todoData.text || "New Todo", todoData.date);
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setTodoData((todoData: TodoData) => ({
      ...todoData,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date) => {
    setTodoData((todoData: TodoData) => ({
      ...todoData,
      date
    }));
  };

  const handleBlur  = (evt: FocusEvent) => {
    evt.persist();
    console.log(evt)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        autoFocus
        type="text"
        name="text"
        value={todoData.text}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="New Todo"
      />
      <Button label={initial ? "Update" : "Add"} />
      <DatePicker
        allowSameDay={true}
        onChange={handleDateChange}
        selected={todoData.date}
      />
    </Form>
  )
}