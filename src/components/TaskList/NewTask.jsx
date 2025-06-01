import { data } from "autoprefixer";
import React from "react";
export const NewTask = ({data}) => {

      const [isclicked, setIsClicked] = React.useState(false);
      const handleAccept = () => {
            console.log("clicked");
            setIsClicked(!isclicked);
      }

      const markCompleted = () => {
            console.log("clicked");
      }

      const markFailed = () => {
            console.log("clicked");
      }

      return ( 
            <div className="h-full w-[20%] bg-blue-400 rounded-2xl flex-shrink-0">
                  <div className="flex items-center justify-between p-5">
                        <h3 className="bg-red-600 font-semibold text-sm text-white rounded-xl px-4 py-1">{data.category}</h3>
                        <h3 className="text-white font-medium">{data.taskDate}</h3>
                  </div>
                  <h2 className="text-2xl font-semibold text-white mt-4 px-2">{data.taskTitle}</h2>
                  <p className="text-white px-2 text-sm mt-3">{data.taskDescription}</p>
                  <div className="flex justify-center mt-4">
                        {!isclicked ? (
                        <button
                        onClick={handleAccept}
                        className="bg-green-500 py-1 px-2 text-sm m-1 rounded text-teal-50">
                        Accept
                        </button>) : (
                        <div className="flex justify-between mt-4">
                        <button
                        onClick={markCompleted}
                        className="bg-green-500 py-1 px-2 text-sm m-1 rounded text-teal-50">Mark as Completed</button>
                        <button
                        onClick={markFailed}
                        className="bg-red-500 py-1 px-2 text-sm m-1 rounded text-teal-50">Mark as Failed</button>
                        </div>
                        )}
                  </div>
            </div>
       );
}
export default NewTask;