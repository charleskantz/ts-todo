type Todo = {
  text: string;
  completed: boolean;
  id: string;
  date: Date;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type UpdateTodo = (text: string, date: Date, id: string) => void;

type SetTodo = (text: string, date: Date) => void;

type AddTodo = (newTodo: string) => void;

type ReactCSSTransitionGroup = any;