import { Todo } from "../../types/todo.interface";

export interface TodoItemProps {
  todo: Todo;
  setDone: (id: number) => void;
  setTodoText: (id: number, text: string) => void;
  removeTodo: (id: number) =>  void;
}