import Avatar from "../assets/svg/avatar.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const User = () => {
  return (
    <div className="flex items-center gap-3 mt-3 p-2 font-medium text-gray-500">
      <img src={Avatar} alt="avatar svg" className="w-[30px] h-[30px]" />
      <span>{"user name"}</span>
      <span>
        <ArrowDropDownIcon />
      </span>
    </div>
  );
};

export default User;
