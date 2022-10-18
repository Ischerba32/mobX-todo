import { FC, useEffect } from "react";

import { ChakraProvider, Box, theme } from "@chakra-ui/react";

import Header from "./components/header/header.component";
import TodoListObserver from "./components/todo-list/todo-list.component";
import TodoAdd from "./components/todo-add/todo-add.component";
import store from "./store/store";

const App: FC = () => {
  useEffect(() => {
    store.getData('./data.json');
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <Header />
        <TodoListObserver />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  );
}

export default App;
