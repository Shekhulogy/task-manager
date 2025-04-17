import React, { useContext } from "react";
import Task from "./Task";
import {TaskContext} from "../context/TaskContext";
import AllEmptyTab from "./AllEmptyTab";

const AllTask: React.FC = () => {
  const taskContext = useContext(TaskContext);

  return (
    <>
      {taskContext?.tasks.length === 0 ? (
        <AllEmptyTab />
      ) : (
        <div className="space-y-2">
          {taskContext?.tasks &&
            taskContext?.tasks.map((curTask) => (
              <Task key={curTask.id} curTask={curTask} />
            ))}
        </div>
      )}
    </>
  );
};

export default AllTask;
