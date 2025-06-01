import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompletedTask from "./CompletedTask";

export const Task = ({data}) => {
      return ( 
            <div id="task" className="flex overflow-x-auto bg-[#1c1c1c] flex-shrink-0 gap-4 items-center justify-start mt-10 py-5 h-[55%]">
                  {data.tasks.map((elem, idx) => {
                        if (elem.newTask) {
                              return <NewTask key={idx} data={elem} />;
                        }
                        if (elem.active) {
                              return <AcceptTask key={idx} data={elem} />;
                        }
                        if (elem.failed) {
                              return <FailedTask key={idx} data={elem} />;
                        }
                        if (elem.completed) {
                              return <CompletedTask key={idx} data={elem} />;
                        }
                  })}
            </div>
       );
}

export default Task;