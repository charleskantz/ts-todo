import React from 'react';
import { TodoListItem } from './TodoListItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './cssTransitions.css';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  updateTodo: any;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, updateTodo }) => {

  const generateTodos = () => {
    return todos.map((todo: Todo) => (
      <TodoListItem todo={todo} key={todo.id} toggleTodo={toggleTodo} updateTodo={updateTodo} />
      ));
  }

  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionAppearTimeout={500}
    >
      {generateTodos()}
    </ReactCSSTransitionGroup>
  )
}