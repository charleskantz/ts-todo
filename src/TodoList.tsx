import React from 'react';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {

  const generateTodos = () => {
    return todos.map((todo: Todo) => (
      <TodoListItem todo={todo} key={todo.text} toggleTodo={toggleTodo} />
      ));
  }

  return (
    <ul>
      {generateTodos()}
    </ul>
  )
}