import { getTodos } from "@/libs/http-methods/todos/getTodosRequest";
import { TodoList } from "@/modules/TodoList/TodoList";
import { Suspense } from "react";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main>
      <div className="my-4">TODO List</div>
      <Suspense fallback={<div>Loading todo list...</div>}>
        <TodoList todos={todos} />
      </Suspense>
    </main>
  );
}
