import React, { useContext} from "react";
import TaskNavigation from "./TaskNavigation";
import AllTask from "./AllTask";
import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import DueSoon from "./DueSoon";
import { NavigationContext } from "../context/NavigationContext";

const TaskContainer: React.FC = () => {
  const navigation = useContext(NavigationContext)

  return (
    <div className="w-full">
      <TaskNavigation/>
      {navigation.isActive === "all" && <AllTask />}
      {navigation.isActive === "active" && <ActiveTask />}
      {navigation.isActive === "completed" && <CompletedTask />}
      {navigation.isActive === "dueSoon" && <DueSoon />}
    </div>
  );
};

export default TaskContainer;
