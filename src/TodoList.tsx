import React, { useContext } from 'react';
import { TodoListItem } from './TodoListItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './cssTransitions.css';
import TodoContext from './todoContext';

export const TodoList: React.FC = () => {

  const { todos } = useContext(TodoContext);

  const generateTodos = () => {
    return todos.map((todo: Todo) => (
      <TodoListItem todo={todo} key={todo.id} />
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