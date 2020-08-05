import React, { useState, FormEvent } from 'react';
import { TodoList } from './TodoList';
import { Button } from './Button';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import TodoContext from './todoContext';

const initialTodos: Array<Todo> = [
  { text: 'test todo', completed: false, id: '1' },
  { text: 'finish todo list', completed: true, id: '2' }
];

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Branding = styled.h1`
  padding-top: 2rem;
  font-family: "Recursive", sans-serif;
  color: lightgray;
  font-size: 2rem;
`;

const App: React.FC = () => {

  const [ todos, setTodos ] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const updateTodo: UpdateTodo = (newText, id) => {
    const updatedTodos = todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: newText
        }
      }
      return todo;
    });
    setTodos (updatedTodos);
  }

  const addTodo: AddTodo = newTodo => {
    const addTodo: Todo = {
      text: newTodo,
      completed: false,
      id: uuid()
    }
    setTodos((todos: Array<Todo>) => [
      ...todos,
      addTodo
    ]);
  }

  const handleNewTodo = (evt: FormEvent<HTMLFormElement | HTMLInputElement>) => {
    evt.preventDefault();
    addTodo("");
  }

  return (
    <TodoContext.Provider
      value={{ todos, toggleTodo, updateTodo, addTodo }}
    >
      <Container>
        <Branding>geterdun</Branding>
        <TodoList />
        <form onSubmit={handleNewTodo}>
          <Button label="+ New Todo" />
        </form>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
