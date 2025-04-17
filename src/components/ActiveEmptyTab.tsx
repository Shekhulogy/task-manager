import React from "react";

const ActiveEmptyTab: React.FC = () => {
  return (
    <div id="emptyTab" className="mt-2">
      <div
        id="card"
        className="rounded-lg border border-gray-200 bg-white shadow-sm p-8 flex flex-col items-center justify-center text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-square-check h-12 w-12 text-emerald-500"
          data-lov-id="src/components/EmptyState.tsx:18:11"
          data-lov-name="SquareCheck"
          data-component-path="src/components/EmptyState.tsx"
          data-component-line="18"
          data-component-file="EmptyState.tsx"
          data-component-name="SquareCheck"
          data-component-content="%7B%22className%22%3A%22h-12%20w-12%20text-todo-completed%22%7D"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
        <h3 className="mt-4 text-lg font-medium">No tasks found</h3>
        <p className="mt-2 text-gray-500">
          You have no active tasks. Great job!
        </p>
      </div>
    </div>
  );
};

export default ActiveEmptyTab;
