import { isFilterStatusGuard } from "@/utils/isFilterStatusGuard";
import { FilterStatus } from "../TodoList.types";

const options: { label: string; value: FilterStatus }[] = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Uncompleted", value: "uncompleted" },
];

export const TodoFilters = ({
  onChange,
  filter,
}: {
  onChange: (value: FilterStatus) => void;
  filter: FilterStatus;
}) => {
  const handleFilterChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    if (isFilterStatusGuard(value)) {
      onChange(value);
    }
  };

  return (
    <select
      data-testid="todo-filters"
      className="bg-zinc-200 rounded-md p-2"
      id="filter"
      defaultValue={filter}
      onChange={handleFilterChange}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
