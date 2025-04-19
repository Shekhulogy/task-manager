import React, { useContext, useState } from "react";
import { TaskType } from "../context/TaskContextProvider";
import { TaskContext } from "../context/TaskContext";
import EditTask from "./EditTask";

export interface TaskProps {
  curTask: TaskType;
}

const Task: React.FC<TaskProps> = ({ curTask }) => {
  let leftBorderColor: string;
  let priorityColor: string;

  if (curTask.priority === "Low") {
    leftBorderColor = "border-l-violet-500";
    priorityColor = "bg-violet-100 text-violet-500";
  } else if (curTask.priority === "Medium") {
    leftBorderColor = "border-l-pink-500";
    priorityColor = "bg-pink-100 text-pink-500";
  } else {
    leftBorderColor = "border-l-red-500";
    priorityColor = "bg-red-100 text-red-500";
  }

  const taskContext = useContext(TaskContext);
  const [edit, setEdit] = useState<boolean>(false);

  const handleDelete = (id: string) => {
    taskContext?.dispatch({ type: "DELETE", payload: id });
  };

  let isChecked = curTask.isChecked;

  const handleCheckboxClick = () => {
    isChecked = isChecked ? false : true;
    taskContext?.dispatch({
      type: "UPDATE",
      payload: { ...curTask, isChecked },
    });
  };

  const curDate = new Date();
  const dueDate = new Date(curTask.dueDate ?? "");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[dueDate.getMonth()];
  const date = dueDate.getDate();
  const year = dueDate.getFullYear();

  let dueMassage: string = "";
  if (
    curDate.getFullYear() === year &&
    curDate.getMonth() === dueDate.getMonth()
  ) {
    if (curDate.getDate() > date || curDate.getDate() === date) {
      dueMassage = "(Overdue)";
    } else if (curDate.getDate() + 1 === date) {
      dueMassage = "(Due tomorrow)";
    } else {
      dueMassage = `(Due in ${date - curDate.getDate()} days)`;
    }
  }

  return (
    <div
      className={`w-full rounded-lg border border-gray-200 bg-white shadow-sm p-4 mb-3 border-l-4 ${
        isChecked ? "border-l-green-600" : leftBorderColor
      }`}
    >
      {edit ? (
        <EditTask curTask={curTask} setEdit={setEdit} />
      ) : (
        <div className="flex items-start gap-3">
          <div className="pt-1">
            <button
              type="button"
              role="checkbox"
              className={`peer w-4 h-4 shrink-0 rounded-sm border focus-visible:outline-none cursor-pointer ${
                isChecked && "border-green-600 bg-green-50 text-green-600"
              }`}
              onClick={handleCheckboxClick}
            >
              {isChecked && (
                <span className=" flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check h-4 w-4"
                    data-lov-id="src/components/TaskItem.tsx:128:18"
                    data-lov-name="Check"
                    data-component-path="src/components/TaskItem.tsx"
                    data-component-line="128"
                    data-component-file="TaskItem.tsx"
                    data-component-name="Check"
                    data-component-content="%7B%22className%22%3A%22h-4%20w-4%20mr-1%22%7D"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
              )}
            </button>
          </div>
          <div id="priority" className="flex-1">
            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-medium ${isChecked && "line-through"}`}
              >
                {curTask.text}
              </span>
              <span
                className={`inline-flex h-6 items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${priorityColor}`}
              >
                {curTask.priority}
              </span>
            </div>
            <div
              id="dueDate"
              className="flex items-center flex-wrap gap-2 mt-2"
            >
              <span className="flex items-center text-xs text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-calendar h-3.5 w-3.5 mr-1"
                  data-lov-id="src/components/TaskInput.tsx:61:14"
                  data-lov-name="Calendar"
                  data-component-path="src/components/TaskInput.tsx"
                  data-component-line="61"
                  data-component-file="TaskInput.tsx"
                  data-component-name="Calendar"
                  data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-muted-foreground%22%7D"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>{`${month} ${date}, ${year}`}</span>
                <span className="ml-1 text-xs">{dueMassage}</span>
              </span>
            </div>
          </div>
          <div className="flex gap-1">
            <button
              type="button"
              role="edit"
              className="h-8 w-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-indigo-50 hover:text-gray-900"
              onClick={() => setEdit(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-square-pen h-4 w-4"
                data-lov-id="src/components/TaskItem.tsx:182:14"
                data-lov-name="Edit"
                data-component-path="src/components/TaskItem.tsx"
                data-component-line="182"
                data-component-file="TaskItem.tsx"
                data-component-name="Edit"
                data-component-content="%7B%22className%22%3A%22h-4%20w-4%22%7D"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
              </svg>
            </button>
            <button
              type="button"
              role="delete"
              className="h-8 w-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-red-100 hover:text-red-600"
              onClick={() => handleDelete(curTask.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-trash2 h-4 w-4"
                data-lov-id="src/components/TaskItem.tsx:191:14"
                data-lov-name="Trash2"
                data-component-path="src/components/TaskItem.tsx"
                data-component-line="191"
                data-component-file="TaskItem.tsx"
                data-component-name="Trash2"
                data-component-content="%7B%22className%22%3A%22h-4%20w-4%22%7D"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
