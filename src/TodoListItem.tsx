import React, { useState } from 'react';
import styled from 'styled-components';
import { EditTodo } from './EditTodo';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  updateTodo: any;
}

const TodoLabel = styled.label`
  display: inline-block;
  position: relative;
  margin: auto;
  cursor: pointer;
  font-size: 22px;
  line-height: 24px;
  height: 24px;
  width: 24px;
  clear: both;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 40;
  width: 24px;
  height: 24px;

  &:checked ~ .custom-checkbox {
    background-color: #FFFFFF;
    border-radius: 5px;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity:1;
    border: 2px solid #FFFFFF;
  }

  &:checked ~ .custom-checkbox::after {
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity:1;
    left: 8px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid #009BFF;
    border-width: 0 2px 2px 0;
    background-color: transparent;
    border-radius: 0;

    &:checked ~ .custom-checkbox::before {
      left: -3px;
      top: -3px;
      width: 24px;
      height: 24px;
      border-radius: 5px;
      -webkit-transform: scale(3);
      -ms-transform: scale(3);
      transform: scale(3);
      opacity:0;
      z-index: 20;
      transition: all 0.3s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
    }
  }
`;

const CustomCheckbox = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 24px;
  width: 24px;
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  border: 2px solid #FFFFFF;

  &::after {
    position: absolute;
    content: "";
    left: 12px;
    top: 12px;
    height: 0px;
    width: 0px;
    border-radius: 5px;
    border: solid #009BFF;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity:1;
  	transition: all 0.3s ease-out;
  	-webkit-transition: all 0.3s ease-out;
  	-moz-transition: all 0.3s ease-out;
  	-ms-transition: all 0.3s ease-out;
  	-o-transition: all 0.3s ease-out;
  }

  &::before {
    position: absolute;
    content: "";
    left: 10px;
    top: 10px;
    width: 0px;
    height: 0px;
    border-radius: 5px;
    border: 2px solid #FFFFFF;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

`;

const TodoContainer = styled.div`
  width: 100%;
  padding-left: 2px;
`;

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, updateTodo }) => {

  const [ isEditing, setIsEditing ] = useState(false);

  const TodoText = styled.div`
    display: inline-block;
    padding: 0 0 4px 12px;
    text-decoration: ${todo.completed ? "line-through" : "none"};
  `;

  const handleUpdate = (newText: string) => {
    updateTodo(newText, todo.id);
    setIsEditing(false);
  }

  return (
    <TodoContainer>
      <TodoLabel htmlFor="todo">
        <Checkbox
          type="checkbox"
          checked={todo.completed}
          onChange={ () => toggleTodo(todo) }
        />
        <CustomCheckbox className="custom-checkbox"></CustomCheckbox>
      </TodoLabel>
      {isEditing
        ? <EditTodo initial={todo.text} setTodo={handleUpdate} />
        : <TodoText onClick={() => setIsEditing(true)}>{todo.text}</TodoText>
      }
    </TodoContainer>
  );
}