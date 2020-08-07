import React, { useState, useContext, ChangeEvent } from 'react';
import styled from 'styled-components';
import { EditTodo } from './EditTodo';
import TodoContext from './todoContext';
import moment from 'moment';

interface TodoListItemProps {
  todo: Todo;
}

const TodoLabel = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  line-height: 24px;
  height: 28px;
  width: 28px;
  clear: both;
  z-index: 10;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 40;
  width: 28px;
  height: 28px;
  margin: 0 0 0 0;

  &:checked ~ .custom-checkbox {
    background-color: rgb(87, 152, 246);
    border-radius: 5px;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity:1;
    border: 2px solid rgb(87, 152, 246);
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
    border: solid rgb(33,37,43);
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
    border: solid rgb(128, 128, 130);
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

// parts of styling is dependent on whether that todo is being edited.
// effect is a focus-like area when a todo is created/being edited
interface isEditingProp {
  readonly isEditing: boolean;
}

const TodoContainer = styled.div<isEditingProp>`
  width: 100%;
  margin: 4px 0;
  ${props => props.isEditing
    ? `
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        z-index: -1;
      }
    `
      : null
  }
`;

const TodoFocus = styled.div<isEditingProp>`
  border-radius: 4px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px;
  background: transparent;
  margin: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: all .5s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 10;

  &:hover {
    background: rgba(87, 152, 246, .1);
  }

  ${props => props.isEditing ? `
    height: 36px;
    padding: 16px 16px;
    background: rgb(46, 47, 50);
    margin: 36px 0;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
    box-shadow: $0px 0px 5px 2px rgba(0,0,0,0.2);

    &:hover {
      background: rgb(46, 47, 50);
    }
  `
    : null
  }
`;

const TodoDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface TodoTextProps {
  readonly todoCompleted: boolean;
}

// grab completed state from todo prop for text decoration
const TodoText = styled.div<TodoTextProps>`
  display: inline-block;
  padding: 0 0 0 12px;
  text-decoration: ${props => props.todoCompleted ? "line-through" : "none"};
  color: ${props => props.todoCompleted ? "rgb(128, 128, 130)" : "white"};
`;

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {

  const { updateTodo, toggleTodo } = useContext(TodoContext);

  // if new todo is created, start with text input active, otherwise just display text
  const [ isEditing, setIsEditing ] = useState(!todo.text);

  const handleUpdate = (text: string, date: Date) => {
    updateTodo(text, date, todo.id);
    setIsEditing(false);
  }

  const handleClose: HandleClose = (text, date, evt: any) => {
    if (evt.currentTarget.id === 'test' || evt.currentTarget.id === 'root') {
      updateTodo(text, date, todo.id);
      setIsEditing(false);
    }
  }

  const handleCompletedTodo = (evt: ChangeEvent) => {
    evt.stopPropagation();
    toggleTodo(todo)
  }

  return (
    <TodoContainer isEditing={isEditing} id="test">
      <TodoFocus isEditing={isEditing} onClick={() => setIsEditing(true)}>
        <TodoLabel htmlFor="todo">
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={handleCompletedTodo}
            onClick={e => e.stopPropagation()}
          />
          <CustomCheckbox className="custom-checkbox"></CustomCheckbox>
        </TodoLabel>
        <TodoDetails>
          {isEditing // shows text input for adding new todo or editing existing todo
            ? <EditTodo initial={todo.text} handleClose={handleClose} setTodo={handleUpdate} date={todo.date} />
            : <>
                <TodoText todoCompleted={todo.completed} onClick={() => setIsEditing(true)}>{todo.text}</TodoText>
                <div>{moment(todo.date).format("MMM Do")}</div>
              </>
          }
        </TodoDetails>
      </TodoFocus>
    </TodoContainer>
  );
}