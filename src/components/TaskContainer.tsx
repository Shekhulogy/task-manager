import React, {useState} from "react";
import TaskNavigation from "./TaskNavigation";
import AllTask from "./AllTask";
import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";

export type TabState = {
  all: boolean;
  active: boolean;
  completed: boolean;
};

const TaskContainer: React.FC = () => {
  const [isActive, setIsActive] = useState<TabState>({
      all: true,
      active: false,
      completed: false,
    });
  return (
    <div className="w-full">
      <TaskNavigation isActive={isActive} setIsActive={setIsActive}/>
      {isActive.all && <AllTask />}
      {isActive.active && <ActiveTask />}
      {isActive.completed && <CompletedTask />}
    </div>
  );
};

export default TaskContainer;
