type Todo = {
  text: string;
  completed: boolean;
  id: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type ReactCSSTransitionGroup = any;