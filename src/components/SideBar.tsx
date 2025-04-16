import Dashboard from "./Dashboard";
import User from "./User";

const SideBar = () => {
  return (
    <aside className="w-3xs h-screen bg-[#FAFAFA] p-2 border-r border-r-gray-200">
      <User />
      <Dashboard />
    </aside>
  );
};

export default SideBar;
