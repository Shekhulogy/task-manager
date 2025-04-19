import SideBar from "./components/SideBar";
import TaskSection from "./components/TaskSection";
import TaskContextProvider from "./context/TaskContextProvider";

const App = () => {
  return (
    <div className="flex min-h-screen w-full">
      <TaskContextProvider>
        <SideBar />
        <TaskSection />
      </TaskContextProvider>
    </div>
  );
};

export default App;
