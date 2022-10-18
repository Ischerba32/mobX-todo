import { FC, ReactNode } from "react";

import { Heading } from "@chakra-ui/react";
import { observer } from "mobx-react";

import store from "../../store/store";
import TodoItem from "../todo-item/todo-item.component";
import { Todo } from "../../types/todo.interface";

const TodoList: FC = () => {

  const handleClickCheckbox = (id: number): void => {
    store.setDone(id);
  }

  const handleSetTodoText = (id: number, text: string): void => {
    store.setTodoText(id, text);
  }

  const handleRemoveTodo = (id: number): void => {
    store.removeTodo(id);
  }

  return (
    <>
      <Heading>Todo List</Heading>
      {store.todoList.map((todo: Todo): ReactNode => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setDone={handleClickCheckbox}
          setTodoText={handleSetTodoText}
          removeTodo={handleRemoveTodo}
        />
      ))}
    </>
  );
}

export default observer(TodoList);
