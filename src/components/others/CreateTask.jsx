import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

//     const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
    e.preventDefault();

    const newTaskObj = {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle,
        taskDate,
        assignTo,
        category,
        taskDescription
    };

      const data = Array.isArray(userData) ? userData : [];

data.forEach(function (elem) {
    if (assignTo === elem.firstName) {
        elem.tasks.push(newTaskObj);
        elem.taskCounts.newTask += 1;
    }
});

localStorage.setItem("employees", JSON.stringify(data));

        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAssignTo('')
        setTaskDate('')
        setTaskDescription('')

    };



      return ( 
            <div>
                  <form onSubmit={(e) => submitHandler(e)} className="text-white flex items-center bg-[#1C1C1C] mt-10 rounded-xl p-4">
                        <div className="w-1/2">
                              <div>
                                    <h3>Task Title</h3>
                                    <input 
                                    value={taskTitle}
                                    onChange={(e) => {
                                          setTaskTitle(e.target.value);
                                    }}
                                    className="mt-2 border-2 border-emerald-400 rounded-sm" type="text" placeholder="Task Title" />
                              </div>
                              <div 
                              value={taskDate}
                              onChange={(e) => {
                                    setTaskDate(e.target.value);
                              }}
                              className="mt-4">
                                    <h3>Date</h3>
                                    <input 
                                    value={taskDate}
                                    onChange={(e) => {
                                          setTaskDate(e.target.value);
                                    }}
                                    className="mt-2 border-2 border-emerald-400 rounded-sm" type="date" />
                              </div>
                              <div className="mt-4">
                                    <h3>Assign to</h3>
                                    <input 
                                    value={assignTo}
                                    onChange={(e) => {
                                          setAssignTo(e.target.value);
                                    }}
                                    className="mt-2 border-2 border-emerald-400 rounded-sm" type="text" placeholder="Assign to" />
                              </div>
                              <div className="mt-4">
                                    <h3>Category</h3>
                                    <input 
                                    value={category}
                                    onChange={(e) => {
                                          setCategory(e.target.value);
                                    }}
                                    className="mt-2 border-2 border-emerald-400 rounded-sm" type="text" placeholder="design,dev etc." />
                              </div>
                        </div>
                        <div className="w-1/2 flex flex-col">
                              <h3>Description</h3>
                              <textarea 
                              value={taskDescription}
                              onChange={(e) => {
                                    setTaskDescription(e.target.value);
                              }}
                              className="mt-2 border-2 border-emerald-400 rounded-sm" name="" id="" cols={30} rows={10}></textarea>
                              <button className="mt-4 text-white bg-emerald-500 text-lg font-medium rounded-sm px-6 py-2">Create Task</button>
                        </div>
                  </form>
            </div>
       );
}

export default CreateTask;