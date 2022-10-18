import { FC } from "react";

import { Button, Input, Flex, Checkbox } from "@chakra-ui/react";
import { observer } from "mobx-react";

import { TodoItemProps } from "./todo-item.interface";

const TodoItem: FC<TodoItemProps> = ({
  todo,
  setDone,
  removeTodo,
  setTodoText
}) => {
  return (
    <Flex pt={2}>
      <Checkbox
        onChange={() => setDone(todo.id)}
        defaultChecked={todo.done}
      />
      <Input mx={2} value={todo.text} onChange={(e) => setTodoText(todo.id, e.target.value)} />
      <Button
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </Button>
    </Flex>
  );
}

export default observer(TodoItem);

