import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {

  const [ textEntry, setTextEntry ] = useState("");

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addTodo(textEntry);
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTextEntry(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={textEntry} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  )
}