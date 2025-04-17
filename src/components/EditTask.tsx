import React, { useContext, useState } from "react";
import DropDownButton from "./DropDownButton";
import DropDownContent from "./DropDownContent";
import { TaskType } from "../context/TaskContextProvider";
import { optionType } from "./AddNewTask";
import { TaskContext } from "../context/TaskContext";

type EditTaskProps = {
  curTask: TaskType;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditTask: React.FC<EditTaskProps> = ({ curTask, setEdit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<optionType>(
    curTask.priority as optionType
  );

  const [editedTask, setEditedTask] = useState<TaskType>(curTask);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
      priority: selectedOption,
    });
  };

  const taskContext = useContext(TaskContext);
  const handleSave = () => {
    taskContext?.dispatch({ type: "UPDATE", payload: editedTask });
    setEdit(false);
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        name="text"
        defaultValue={curTask.text}
        value={editedTask.text}
        className="h-10 w-full rounded-md border border-gray-200  bg-white px-3 py-2 text-sm focus:outline-0 placeholder:text-gray-500 placeholder:font-[450]"
        onChange={handleChange}
      />
      <div className="flex gap-2">
        <input
          type="date"
          name="dueDate"
          value={editedTask.dueDate}
          className="flex h-10 w-1/2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-center md:text-sm focus:outline-0 cursor-pointer"
          onChange={handleChange}
        />
        <div className="relative w-1/2">
          <DropDownButton
            selectedOption={selectedOption}
            onClick={() => setIsOpen((prev) => !prev)}
          />
          {isOpen && (
            <DropDownContent
              setSelectedOption={setSelectedOption}
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          id="save"
          type="button"
          className="h-9 w-full sm:w-auto px-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-gray-900 text-white gap-2 transition duration-300 ease-in-out hover:bg-gray-800 cursor-pointer"
          onClick={handleSave}
        >
          <span>
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
              className="lucide lucide-check h-4 w-4 mr-1"
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
          <span>Save</span>
        </button>
        <button
          id="cancel"
          type="button"
          className="h-9 w-full sm:w-auto px-3 inline-flex items-center justify-center border border-gray-200 whitespace-nowrap rounded-md text-sm font-medium bg-white gap-2 transition duration-300 ease-in-out hover:bg-gray-200 cursor-pointer"
          onClick={() => setEdit(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;
