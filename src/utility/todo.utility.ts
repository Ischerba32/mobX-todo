import { Todo } from "../types/todo.interface";

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

export const getTodo = (todos: Todo[], id: number): Todo | undefined => {
  return todos.find((item: Todo) => item.id === id);
}

export const getTodosFromLocalStorage = (): string | null => {
  return localStorage.getItem('mobX-todo');
}

export const setTodoToLocalStorage = (todos: Todo[]): void => {
  localStorage.setItem('mobX-todo', JSON.stringify(todos));
}