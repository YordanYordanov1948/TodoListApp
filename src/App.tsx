import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  return (
    <div>
      <NewTodo onAdd={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
