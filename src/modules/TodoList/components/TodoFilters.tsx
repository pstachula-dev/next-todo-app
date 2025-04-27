import { ChangeEvent } from "react";

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
  }: ChangeEvent<HTMLSelectElement>) => {
    if (isFilterStatusGuard(value)) {
      onChange(value);
    }
  };

  return (
    <select
      className="bg-zinc-200 rounded-md p-2"
      id="filter"
      value={filter}
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
