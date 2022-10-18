import { Todo } from "../types/todo.interface";

export interface IStore {
  todoList: Todo[];
  newTodo: string;

  addTodo: () => void;
  removeTodo: (id: number) => void;
  getData: (url: string) => void;
  setDone: (id: number) => void;
  setNewTodo: (text: string) => void;
  setTodoList: (data: Todo[]) => void;
  setTodoText: (id: number, text: string) => void;
}