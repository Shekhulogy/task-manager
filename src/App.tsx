import SideBar from "./components/SideBar";
import TaskSection from "./components/TaskSection";
import TaskContextProvider from "./context/TaskContextProvider";

const App = () => {
  return (
    <>
      <SideBar />
      <TaskContextProvider>
        <TaskSection />
      </TaskContextProvider>
    </>
  );
};

export default App;
