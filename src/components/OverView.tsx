import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const OverView = () => {
  const taskContext = useContext(TaskContext);
  const totalTask = taskContext?.tasks.length ?? 0;
  const completedTask =
    taskContext?.tasks.filter((curTask) => curTask.isChecked === true).length ??
    0;
  const completionPercentage = Math.round((completedTask / totalTask) * 100) ;
  const dueSoonTasks = taskContext?.tasks.filter((curTask) => {
    const dueDate = new Date(curTask.dueDate ?? "");
    const curDate = new Date();

    if (
      curDate.getFullYear() === dueDate.getFullYear() &&
      curDate.getMonth() === dueDate.getMonth()
    ) {
      if (dueDate.getDate() > curDate.getDate() && dueDate.getDate() <= curDate.getDate() + 2) {
        return curTask;
      }
    }
  }).length;

  return (
    <div className="p-2 mt-5">
      <p className="p-2 px-2 text-xs font-medium text-[#64748b]">Overview</p>
      <div className="grid grid-cols-2 gap-2 px-2 py-2">
        <div className="w-[100] h-[64] rounded-md flex flex-col justify-center items-center bg-violet-50 p-2">
          <h2 className="text-2xl font-bold text-violet-600">{totalTask}</h2>
          <p className="text-xs text-[#64748b]">Total Task</p>
        </div>
        <div className="w-[100] h-[64] rounded-md flex flex-col justify-center items-center bg-green-50 p-2">
          <h2 className="text-2xl font-bold text-green-600">{completedTask}</h2>
          <p className="text-xs text-[#64748b]">Completed</p>
        </div>
        <div className="w-[100] h-[64] rounded-md flex flex-col justify-center items-center bg-amber-50 p-2">
          <h2 className="text-2xl font-bold text-amber-600">{dueSoonTasks}</h2>
          <p className="text-xs text-[#64748b]">Due Soon</p>
        </div>
        <div className="w-[100] h-[64] rounded-md flex flex-col justify-center items-center bg-blue-50 p-2">
          <h2 className="text-2xl font-bold text-blue-600">
            {completionPercentage}%
          </h2>
          <p className="text-xs text-[#64748b]">Completion</p>
        </div>
      </div>
    </div>
  );
};

export default OverView;
