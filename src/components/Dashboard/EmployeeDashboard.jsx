import React from "react";
import HeaderEmployee from "../others/HeaderEmployee";
import TaskList from "../others/TaskList";
import Task from "../TaskList/Task";

export const EmployeeDashboard = (props) => {
      return ( 
            <div className=" bg-[#1C1C1C] p-10">
                  <HeaderEmployee changeUser={props.changeUser} data={props.data} />
                  <TaskList data={props.data} />
                  <Task data={props.data} />
            </div>
       );
}

export default EmployeeDashboard;