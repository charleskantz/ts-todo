type Todo = {
  text: string;
  completed: boolean;
  id: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type UpdateTodo = (newText: string, id: string) => void;

type AddTodo = (newTodo: string) => void;

type ReactCSSTransitionGroup = any;