const OverView = () => {
  return (
    <div className="p-2 mt-5">
      <p className="p-2 px-2 text-xs font-medium text-[#64748b]">Overview</p>
      <div className="grid grid-cols-2 gap-2 px-2 py-2">
        <div className="w-[100] h-[64] rounded-md flex flex-col justify-center items-center bg-violet-50 p-2">
          <h2 className="text-2xl font-bold text-violet-600">0</h2>
          <p className="text-xs text-[#64748b]">Total Task</p>
        </div>
        <div className="w-[100] h-[64] rounded-md flex flex-col justify-center items-center bg-green-50 p-2">
          <h2 className="text-2xl font-bold text-green-600">0</h2>
          <p className="text-xs text-[#64748b]">Completed</p>
        </div>
        <div className="w-[100] h-[64] rounded-md flex flex-col justify-center items-center bg-amber-50 p-2">
          <h2 className="text-2xl font-bold text-amber-600">0</h2>
          <p className="text-xs text-[#64748b]">Due Soon</p>
        </div>
        <div className="w-[100] h-[64] rounded-md flex flex-col justify-center items-center bg-blue-50 p-2">
          <h2 className="text-2xl font-bold text-blue-600">0</h2>
          <p className="text-xs text-[#64748b]">Completion</p>
        </div>
      </div>
    </div>
  );
};

export default OverView;
