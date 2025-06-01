import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const AllTask = () => {

      const [userData,setUserData] = useContext(AuthContext);

      return ( 
            <div className="bg-[#1c1c1c] p-5 mt-8 rounded-xl">
                  <div className="flex items-center justify-between rounded mb-4 border-2 border-emerald-500 py-1 px-2">
                        <h2 className="w-1/5 font-medium text-lg">Employee</h2>
                        <h3 className="w-1/5 font-medium text-lg">NewTask</h3>
                        <h5 className="w-1/5 font-medium text-lg">Active Task</h5>
                        <h5 className="w-1/5 font-medium text-lg">Completed</h5>
                        <h5 className="w-1/5 font-medium text-lg">Failed</h5>
                  </div>
                  <div>
                  {userData.map(function(elem,idx){
                        return ( 
                              <div key={idx} className="flex items-center justify-between rounded mb-4 border-2 border-emerald-500 py-1 px-2">
                                    <h2 className="w-1/5 font-medium text-lg text-emerald-500">{elem.firstName}</h2>
                                    <h3 className="w-1/5 font-medium text-lg text-amber-400">{elem.taskCounts.newTask}</h3>
                                    <h5 className="w-1/5 font-medium text-lg text-blue-500">{elem.taskCounts.active}</h5>
                                    <h5 className="w-1/5 font-medium text-lg text-green-500">{elem.taskCounts.completed}</h5>
                                    <h5 className="w-1/5 font-medium text-lg text-red-500">{elem.taskCounts.failed}</h5>
                              </div>
                         );
                  })}
                  </div>
            </div>
       );
}
export default AllTask;