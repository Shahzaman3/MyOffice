import { data } from "autoprefixer";
import React from "react";


export const CompletedTask = ({data}) => {
      return ( 
            <div className="h-full w-[20%] bg-green-400 rounded-2xl flex-shrink-0">
                  <div className="flex items-center justify-between p-5">
                        <h3 className="bg-red-600 font-semibold text-sm text-white rounded-xl px-4 py-1">{data.category}</h3>
                        <h3 className="text-white font-medium">{data.taskDate}</h3>
                  </div>
                  <h2 className="text-2xl font-semibold text-white mt-4 px-2">{data.taskTitle}</h2>
                  <p className="text-white px-2 text-sm mt-3">{data.taskDescription}</p>
                  <div className="flex justify-center items-center mt-4">
                        <p className="text-white font-semibold text-lg">✅ Completed</p>
                  </div>
            </div>
       );
}

export default CompletedTask;