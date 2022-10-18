import { makeAutoObservable } from "mobx";

import { addTodo, getTodo, getTodosFromLocalStorage, removeTodo, setTodoToLocalStorage } from "../utility/todo.utility";
import { Todo } from "../types/todo.interface";
import { IStore } from "./store.interface";

class Store implements IStore {
  todoList: Todo[] = [];
  newTodo: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    if (this.newTodo) {
      this.todoList = addTodo(this.todoList, this.newTodo);
      this.newTodo = '';
      localStorage.setItem('mobX-todo', JSON.stringify(this.todoList));
    }
  }

  removeTodo(id: number): void {
    this.todoList = removeTodo(this.todoList, id);
    setTodoToLocalStorage(this.todoList);
  }

  getData(url: string): void {
    const data: string | null = getTodosFromLocalStorage();
    data
    ? this.setTodoList(JSON.parse(data))
    : fetch(url)
      .then((response) => response.json())
      .then((data) => this.setTodoList(data))
  }

  setDone(id: number): void {
    const todoInList = getTodo(this.todoList, id);
    if (todoInList) {
      todoInList.done = !todoInList.done;
      setTodoToLocalStorage(this.todoList);
    }

  }

  setNewTodo(text: string): void{
    this.newTodo = text;
  }

  setTodoList(data: Todo[]): void {
    this.todoList = data;
    if (!getTodosFromLocalStorage()) setTodoToLocalStorage(this.todoList);
  }

  setTodoText(id: number, text: string): void {
    const todoInList = getTodo(this.todoList, id);
    if (todoInList && text) {
      todoInList.text = text;
      setTodoToLocalStorage(this.todoList);
    }
  }
}

const store = new Store();

export default store;