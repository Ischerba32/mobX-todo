import { FC } from "react";

import { Button, Input, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react";

import store from "../../store/store";

const TodoAdd: FC = () => {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={store.newTodo}
        onChange={(e) => store.setNewTodo(e.target.value)}
      />
      <Button
        onClick={() => store.addTodo()}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default observer(TodoAdd);
