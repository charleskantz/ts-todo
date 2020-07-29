import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const initialTodos: Array<Todo> = [
  { text: 'test todo', completed: false, id: '1' },
  { text: 'finish todo list', completed: true, id: '2' }
];

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Branding = styled.h1`
  color: white;
  font-size: 2rem;
`;

const App: React.FC = () => {

  const [ todos, setTodos ] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
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

  const updateTodo = (newText: string, id: string) => {
    const updatedTodos = todos.map(todo => {
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
    setTodos(todos => [
      ...todos,
      addTodo
    ]);
  }

  return (
    <Container>
      <Branding>Hello</Branding>
      <TodoList todos={todos} toggleTodo={toggleTodo} updateTodo={updateTodo} />
      <AddTodoForm addTodo={addTodo} />
    </Container>
  );
}

export default App;
