import React, { useContext } from "react";
import DueSoonEmptyTab from "./DueSoonEmptyTab";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

const DueSoon: React.FC = () => {
  const taskContext = useContext(TaskContext);
  const dueSoonTasks = taskContext?.tasks.filter((curTask) => {
    const dueDate = new Date(curTask.dueDate ?? "");
    const curDate = new Date();

    if (
      curDate.getFullYear() === dueDate.getFullYear() &&
      curDate.getMonth() === dueDate.getMonth()
    ) {
      if (
        dueDate.getDate() > curDate.getDate() &&
        dueDate.getDate() <= curDate.getDate() + 2
      ) {
        return curTask;
      }
    }
  });
  return (
    <>
      {dueSoonTasks?.length === 0 ? (
        <DueSoonEmptyTab />
      ) : (
        <div className="space-y-2">
          {dueSoonTasks &&
            dueSoonTasks?.map((curTask) => <Task curTask={curTask} />)}
        </div>
      )}
    </>
  );
};

export default DueSoon;
