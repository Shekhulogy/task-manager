import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { optionType } from "./AddNewTask";

interface ButtonProps {
  onClick(): void;
  selectedOption?: optionType;
}

const DropDownButton: React.FC<ButtonProps> = ({ onClick, selectedOption = "Medium"}) => {
  let buttonBgColor: string = "bg-pink-100";
  let buttonTextColor: string = "text-pink-500";

  if (selectedOption === "Low") {
    buttonBgColor = "bg-violet-100";
    buttonTextColor = "text-violet-500";
  } else if (selectedOption === "Medium") {
    buttonBgColor = "bg-pink-100";
    buttonTextColor = "text-pink-500";
  } else {
    buttonBgColor = "bg-red-100";
    buttonTextColor = "text-red-500";
  }

  return (
    <div
    id="priority"
      className={`relative h-10 inline-flex flex-1 items-center justify-between w-full rounded-md border border-gray-200 ${buttonBgColor} text-sm focus:outline-0`}
    >
      <span className={`absolute flex items-center pl-4 ${buttonTextColor}`}>
        <TurnedInNotIcon fontSize="small" />
      </span>
      <input
        type="button"
        value={selectedOption}
        className={`h-10 w-full px-11 py-2 text-left font-medium rounded-md ${buttonTextColor} focus:outline-0 z-10 cursor-pointer`}
        onClick={onClick}
      />
      <span className="absolute right-0 pr-2">
        <ArrowDropDownIcon />
      </span>
    </div>
  );
};

export default DropDownButton;
