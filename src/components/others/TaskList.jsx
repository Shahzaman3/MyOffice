import React from "react";

export const TaskList = ({data}) => {
      return ( 
            <div className="flex justify-between gap-4 mt-20">
                  <div className="bg-red-300 w-[45%] py-6 px-10 rounded-xl">
                        <h2 className="text-3xl font-semibold text-white">{data.taskCounts.newTask}</h2>
                        <h3 className="text-xl font-medium text-white">New Task</h3>
                  </div>
                  <div className="bg-blue-300 w-[45%] py-6 px-10 rounded-xl">
                        <h2 className="text-3xl font-semibold text-white">{data.taskCounts.completed}</h2>
                        <h3 className="text-xl font-medium text-white">Completed</h3>
                  </div>
                  <div className="bg-green-300 w-[45%] py-6 px-10 rounded-xl">
                        <h2 className="text-3xl font-semibold text-white">{data.taskCounts.active}</h2>
                        <h3 className="text-xl font-medium text-white">Accepted</h3>
                  </div>
                  <div className="bg-yellow-300 w-[45%] py-6 px-10 rounded-xl">
                        <h2 className="text-3xl font-semibold text-white">{data.taskCounts.failed}</h2>
                        <h3 className="text-xl font-medium text-white">Failed</h3>
                  </div>
            </div>
       );
}
export default TaskList;