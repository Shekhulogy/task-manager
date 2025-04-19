import React, { useReducer } from "react";
import { TaskContext } from "./TaskContext";

export type TaskType = {
  id: string ;
  text: string;
  dueDate?: string;
  priority?: "Low" | "Medium" | "High";
  isChecked?: boolean;
};

export type ActionType = {
  type: string;
  payload: TaskType | string;
};

const initialValue: TaskType[] = JSON.parse(
  localStorage.getItem("tasks") || '""'
);

const tasksReducer = (state: TaskType[], action: ActionType): TaskType[] => {
  switch (action.type) {
    case "ADD":
      const tasks = [...state, action.payload];
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return JSON.parse(localStorage.getItem("tasks") ?? '""');

    case "UPDATE":
      const updatedTasks = state.map((curTask) => {
        if (typeof action.payload !== "string") {
          if (curTask.id === action.payload.id) {
            return (curTask = action.payload);
          }
          return curTask;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return JSON.parse(localStorage.getItem("tasks") ?? '""');

    case "DELETE": {
      const remainingTasks = state.filter(
        (curTask) => curTask.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(remainingTasks));
      return JSON.parse(localStorage.getItem("tasks") ?? '""');
    }

    default:
      return state;
  }
};

interface TaskContextProps {
  children: React.ReactNode;
}

const TaskContextProvider: React.FC<TaskContextProps> = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialValue);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
