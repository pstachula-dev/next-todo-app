import { ChangeEvent } from "react";
import { TodoDTO } from "@/libs/dto/TodoDTO";

export const TodoItem = ({
  todo: { id, completed, title },
  onChange,
}: {
  todo: TodoDTO;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <li key={id}>
      <label className="flex gap-2 p-2 rounded-md my-2 bg-zinc-100 hover:cursor-pointer hover:bg-zinc-200 transition">
        <input
          id={id.toString()}
          type="checkbox"
          onChange={onChange}
          defaultChecked={completed}
        />
        {title}
      </label>
    </li>
  );
};
