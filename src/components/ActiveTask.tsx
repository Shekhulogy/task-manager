import React, { useContext } from "react";
import ActiveEmptyTab from "./ActiveEmptyTab";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

const ActiveTask: React.FC = () => {
  const taskContext = useContext(TaskContext);
  const activeTask = taskContext?.tasks.filter(
    (curTask) => curTask.isChecked === false
  );
  return (
    <>
      {activeTask?.length === 0 ? (
        <ActiveEmptyTab />
      ) : (
        <div className="space-y-2">
          {activeTask && activeTask?.map((curTask) => (
            <Task key={curTask.id} curTask={curTask} />
          ))}
        </div>
      )}
    </>
  );
};

export default ActiveTask;
