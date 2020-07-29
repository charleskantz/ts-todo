import React from 'react';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  updateTodo: any;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, updateTodo }) => {

  const generateTodos = () => {
    return todos.map((todo: Todo) => (
      <TodoListItem todo={todo} key={todo.text} toggleTodo={toggleTodo} updateTodo={updateTodo} />
      ));
  }

  return (
    <ul>
      {generateTodos()}
    </ul>
  )
}