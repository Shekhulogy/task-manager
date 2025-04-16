import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../context/TaskContext";

const AllTask: React.FC = () => {
  const taskContext = useContext(TaskContext);
  console.log(taskContext?.tasks);

  return (
    <div className="space-y-2">
      {taskContext?.tasks &&
        taskContext?.tasks.map((curTask) => (
          <Task key={curTask.id} curTask={curTask} />
        ))}
    </div>
  );
};

export default AllTask;
