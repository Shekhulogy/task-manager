import React, { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";


const TaskNavigation: React.FC = () => {
  const navigation = useContext(NavigationContext);

  const btnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigation.setIsActive(e.currentTarget.id);

  };
  return (
    <div className="flex items-center mb-4">
      <div className="inline-flex items-center justify-center h-10 p-1 bg-indigo-50 rounded-md ">
        <button
          id="all"
          type="button"
          aria-selected="true"
          className={`inline-flex h-full items-center justify-center whitespace-nowrap rounded-sm px-3 py1.5 text-gray-500 text-sm font-medium transition-all focus-visible:outline-none cursor-pointer ${
            navigation.isActive === "all" ? "text-gray-950 shadow-sm bg-white" : null
          }  `}
          onClick={btnClickHandler}
        >
          All
        </button>
        <button
          id="active"
          type="button"
          className={`inline-flex h-full items-center justify-center whitespace-nowrap rounded-sm px-3 py1.5 text-gray-500 text-sm font-medium transition-all focus-visible:outline-none cursor-pointer ${
            navigation.isActive === "active" ? "text-gray-950 shadow-sm bg-white" : null
          }`}
          onClick={btnClickHandler}
        >
          Active
        </button>
        <button
          id="completed"
          type="button"
          className={`inline-flex h-full items-center justify-center whitespace-nowrap rounded-sm px-3 py1.5 text-gray-500 text-sm font-medium transition-all focus-visible:outline-none active:shadow-sm active:bg-white cursor-pointer ${
            navigation.isActive === "completed" ? "text-gray-950 shadow-sm bg-white" : null
          }`}
          onClick={btnClickHandler}
        >
          Completed
        </button>
        <button
          id="dueSoon"
          type="button"
          className={`inline-flex h-full items-center justify-center whitespace-nowrap rounded-sm px-3 py1.5 text-gray-500 text-sm font-medium transition-all focus-visible:outline-none active:shadow-sm active:bg-white cursor-pointer ${
            navigation.isActive === "dueSoon" ? "text-gray-950 shadow-sm bg-white" : null
          }`}
          onClick={btnClickHandler}
        >
          Due Soon
        </button>
      </div>
    </div>
  );
};

export default TaskNavigation;
