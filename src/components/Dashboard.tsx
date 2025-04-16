import Navigation from "./Navigation";
import OverView from "./OverView";

const Dashboard = () => {
  return (
    <div className=" mt-10">
      <h3 className="font-medium text-xl text-center text-[#3f3f46]">
        Dashboard
      </h3>
      <div className="flex flex-col gap-2">
        <OverView />
        <Navigation />
      </div>
    </div>
  );
};

export default Dashboard;
