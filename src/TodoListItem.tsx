import React from 'react';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {

  const style = {
    textDecoration: todo.completed ? "line-through" : "none"
  };

  return (
    <li>
      <label htmlFor="todo" style={style}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={ () => toggleTodo(todo) }
        />
        {todo.text}
      </label>
    </li>
  );
}