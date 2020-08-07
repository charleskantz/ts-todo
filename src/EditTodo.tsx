import React, { useState, ChangeEvent, FormEvent, FocusEvent  } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

/*
  EditTodo: text input for editing todo text inline
*/

interface EditTodoProps {
  initial: string;
  setTodo: SetTodo;
  date: Date;
  handleClose: HandleClose | null;
}

const Form = styled.form`
  display: inline;
  z-index: 20;
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

interface DateButtonProps {
  dueDateStyle: string;
}

const DateButton = styled.span<DateButtonProps>`
  display: inline-block;
  background: transparent;
  border-radius: 5px;
  padding: 4px 10px;
  cursor: pointer;
  border: 1px solid transparent;

  color: ${props => props.dueDateStyle === "Past Due"
    ? "red"
    : props.dueDateStyle === "Today"
      ? "white"
      : "rgb(128, 128, 130)"
  };
  &:hover {
    border: 1px solid rgb(128, 128, 130);

  }
`;

interface TodoData {
  text: string
  date: Date;
}

export const EditTodo: React.FC<EditTodoProps> = ({ initial = '', setTodo, date, handleClose }) => {

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

  const formattedDate = () => {
    const todayDate = moment();

    if (moment(todoData.date).isBefore(todayDate, 'day')) {
      return "Past Due"
    } else if (moment(todoData.date).isSame(todayDate, 'day')) {
      return "Today";
    } else {
      return moment(todoData.date).format("MMM Do");;
    }
  }

  const dueDate = formattedDate();

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
      <DatePicker
        allowSameDay={true}
        onChange={handleDateChange}
        selected={todoData.date}
        dateFormat="MM/dd"
        customInput={<DateButton dueDateStyle={dueDate}>{dueDate}</DateButton>}
      />
      <Button label={initial ? "Update" : "Add"} />
    </Form>
  )
}