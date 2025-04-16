import React from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

interface ContentProps {
  setSelectedOption(value: string): void,
  onClick(): void
}

const DropDownContent: React.FC<ContentProps> = ({ setSelectedOption, onClick }) => {
    const handelClick = (e: React.MouseEvent) => {
        if(e.currentTarget.id === "low"){
          setSelectedOption("Low");
        }else if(e.currentTarget.id === "medium"){
          setSelectedOption("Medium")
        }else{
          setSelectedOption("High")
        }

        onClick();
    }
  return (
    <div className="absolute w-full overflow-hidden flex flex-col gap-2 p-1 bg-white rounded-md mt-20 z-50 shadow-md cursor-pointer border border-gray-200">
      <div
        id="low"
        className="w-full flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-violet-100"
        onClick={handelClick}
      >
        <span className="flex items-center text-violet-500 ">
          <TurnedInNotIcon fontSize="small" />
        </span>
        <span className="text-sm font-medium">Low</span>
      </div>
      <div
      id="medium"
        className="w-full flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-pink-100"
        onClick={handelClick}
      >
        <span className="flex items-center text-pink-500 ">
          <TurnedInNotIcon fontSize="small" />
        </span>
        <span className="text-sm font-medium">Medium</span>
      </div>
      <div
      id="high"
        className="w-full flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-red-100"
        onClick={handelClick}
      >
        <span className="flex items-center text-red-500 ">
          <TurnedInNotIcon fontSize="small" />
        </span>
        <span className="text-sm font-medium">High</span>
      </div>
    </div>
  );
};

export default DropDownContent;
