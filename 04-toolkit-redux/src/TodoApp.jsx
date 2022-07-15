import { useState } from "react";

import { useGetTodosQuery, useGetTodoQuery } from "./store/apis/todosApi";

const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextId = () => {
    setTodoId(todoId + 1);
  };

  const prevId = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>

      <hr />
      <h4>isLoading {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      <button onClick={() => nextId()}>Next ID</button>
      <button onClick={() => prevId()}>Prev ID</button>
      <br />
      <button>Next Todo</button>
    </>
  );
};

export default TodoApp;
