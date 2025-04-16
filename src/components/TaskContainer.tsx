import React from "react";
import TaskNavigation from "./TaskNavigation";
import AllTask from "./AllTask";

const TaskContainer: React.FC = () => {
  return (
    <div className="w-full">
      <TaskNavigation />
      <AllTask />
    </div>
  );
};

export default TaskContainer;
