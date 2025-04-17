import React from "react";

const AllEmptyTab: React.FC = () => {
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
          className="lucide lucide-list h-12 w-12 text-gray-500"
          data-lov-id="src/components/EmptyState.tsx:11:13"
          data-lov-name="List"
          data-component-path="src/components/EmptyState.tsx"
          data-component-line="11"
          data-component-file="EmptyState.tsx"
          data-component-name="List"
          data-component-content="%7B%22className%22%3A%22h-12%20w-12%20text-muted-foreground%22%7D"
        >
          <path d="M3 12h.01"></path>
          <path d="M3 18h.01"></path>
          <path d="M3 6h.01"></path>
          <path d="M8 12h13"></path>
          <path d="M8 18h13"></path>
          <path d="M8 6h13"></path>
        </svg>
        <h3 className="mt-4 text-lg font-medium">No tasks found</h3>
        <p className="mt-2 text-gray-500">You have no tasks yet. Add a task to get started!</p>
      </div>
    </div>
  );
};

export default AllEmptyTab;
