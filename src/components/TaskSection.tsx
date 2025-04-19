import AddNewTask from "./AddNewTask";
import TaskContainer from "./TaskContainer";

const TaskSection:React.FC = () => {
  return (
    <section className="max-h-screen flex-1 py-12 bg-[#F5F3FF] overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl font-bold tracking-tight">Snappy Todo</h1>
        <p className="mt-2 text-gray-500">Stay organized and get things done</p>
        <AddNewTask />
        <TaskContainer />
      </div>
    </section>
  ); 
};

export default TaskSection;
