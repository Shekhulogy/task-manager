import React, { useState } from "react";

type ButtonState = {
  all: boolean;
  active: boolean;
  completed: boolean;
};

const TaskNavigation: React.FC = () => {
  const [isActive, setIsActive] = useState<ButtonState>({
    all: true,
    active: false,
    completed: false,
  });

  const btnClickHandler = (e: React.MouseEvent) => {
    const id = e.currentTarget.id;

    if (id === "all") {
      setIsActive({ all: true, active: false, completed: false });
    } else if (id === "active") {
      setIsActive({ all: false, active: true, completed: false });
    } else {
      setIsActive({ all: false, active: false, completed: true });
    }
  };
  return (
    <div className="flex items-center mb-4">
      <div className="inline-flex items-center justify-center h-10 p-1 bg-indigo-50 rounded-md border border-indigo-100">
        <button
          id="all"
          type="button"
          aria-selected="true"
          className={`inline-flex h-full items-center justify-center whitespace-nowrap rounded-sm px-3 py1.5 text-gray-500 text-sm font-medium transition-all focus-visible:outline-none ${
            isActive.all ? "text-gray-950 shadow-sm bg-white" : null
          }  `}
          onClick={btnClickHandler}
        >
          All
        </button>
        <button
          id="active"
          type="button"
          className={`inline-flex h-full items-center justify-center whitespace-nowrap rounded-sm px-3 py1.5 text-gray-500 text-sm font-medium transition-all focus-visible:outline-none  ${
            isActive.active ? "text-gray-950 shadow-sm bg-white" : null
          }`}
          onClick={btnClickHandler}
        >
          Active
        </button>
        <button
          id="completed"
          type="button"
          className={`inline-flex h-full items-center justify-center whitespace-nowrap rounded-sm px-3 py1.5 text-gray-500 text-sm font-medium transition-all focus-visible:outline-none active:shadow-sm active:bg-white  ${
            isActive.completed ? "text-gray-950 shadow-sm bg-white" : null
          }`}
          onClick={btnClickHandler}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskNavigation;
