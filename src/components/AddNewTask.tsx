import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DropDownButton from "./DropDownButton";
import DropDownContent from "./DropDownContent";
import { TaskContext } from "../context/TaskContext";
import { TaskType } from "../context/TaskContextProvider";

export type optionType = "Low" | "Medium" | "High";

const AddNewTask: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<optionType>("Medium");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [newTask, setNewTask] = useState<TaskType>({
    id: crypto.randomUUID(),
    text: "",
    dueDate: "",
    priority: undefined,
    isChecked: false,
  });

  const taskContext = useContext(TaskContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
      priority: selectedOption,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    taskContext?.dispatch({ type: "ADD", payload: newTask });
    setNewTask({ ...newTask, text: "", dueDate: "" });
  };

  return (
    <form
      action=""
      className="space-y-4 w-full mb-6 bg-white shadow-sm rounded-lg p-4 mt-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="task" className="text-left text-sm font-medium mb-2">
            Task
          </label>
          <input
            id="task"
            type="text"
            name="text"
            value={newTask.text}
            placeholder="Add a new task..."
            className="h-10 w-full rounded-md border border-gray-200  bg-white px-3 py-2 text-sm focus:outline-0 placeholder:text-gray-500 placeholder:font-[450]"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-3 w-2/3 ">
            <div className=" w-full inline-flex flex-1 flex-col">
              <label
                htmlFor="dueDate"
                className="text-left text-sm font-medium mb-2"
              >
                Due Date
              </label>
              <div className="relative">
                <span className="absolute flex items-center inset-y-0 left-0 pl-3 text-gray-500 text-sm">
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
                    className="lucide lucide-calendar h-4 w-4 text-muted-foreground"
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
                </span>
                <input
                  id="dueDate"
                  type="date"
                  name="dueDate"
                  value={newTask.dueDate}
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-center pl-10 md:text-sm focus:outline-0 cursor-pointer"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div id="dropDown" className="relative w-1/2 ">
              <label
                htmlFor="priority"
                className="flex text-left text-sm font-medium mb-2"
              >
                Priority
              </label>
              <DropDownButton
                onClick={() => setIsOpen((prev) => !prev)}
                selectedOption={selectedOption}
              />
              {isOpen && (
                <DropDownContent
                  setSelectedOption={setSelectedOption}
                  onClick={() => setIsOpen(false)}
                />
              )}
            </div>
          </div>
          <button className="h-10 w-full sm:w-auto px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-gray-900 text-white gap-2 transition duration-300 ease-in-out hover:bg-gray-800 cursor-pointer">
            <AddIcon fontSize="small" />
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddNewTask;
