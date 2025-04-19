import SideBar from "./components/SideBar";
import TaskSection from "./components/TaskSection";
import { NavigationContextProvider } from "./context/NavigationContextProvider";
import TaskContextProvider from "./context/TaskContextProvider";

const App = () => {
  return (
    <div className="flex min-h-screen w-full">
      <TaskContextProvider>
        <NavigationContextProvider>
          <SideBar />
          <TaskSection />
        </NavigationContextProvider>
      </TaskContextProvider>
    </div>
  );
};

export default App;
