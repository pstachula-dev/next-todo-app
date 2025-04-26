import { http, HttpResponse } from "msw";
import { TodoDTO } from "../dto/TodoDTO";

export const getTodos200 = http.get(
  `${process.env.NEXT_PUBLIC_API_URL}/todos`,
  () => {
    return HttpResponse.json<TodoDTO[]>([
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
    ]);
  },
);
