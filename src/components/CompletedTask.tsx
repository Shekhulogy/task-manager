import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import CompletedEmptyTab from "./CompletedEmptyTab";
import Task from "./Task";

const CompletedTask: React.FC = () => {
  const taskContext = useContext(TaskContext);
  const completedTask = taskContext?.tasks.filter(
    (curTask) => curTask.isChecked === true
  );
  return (
    <>
      {completedTask?.length === 0 ? (
        <CompletedEmptyTab />
      ) : (
        <div className="space-y-2">
          {completedTask?.map((curTask) => (
            <Task key={curTask.id} curTask={curTask} />
          ))}
        </div>
      )}
    </>
  );
};

export default CompletedTask;
