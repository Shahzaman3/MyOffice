import React from "react";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import AdminHeader from "../others/AdminHeader";

export const AdminDashboard = (props) => {
      return ( 
            <div className="bg-[#121212] p-10 text-white">
                  <AdminHeader changeUser={props.changeUser} />
                  <CreateTask />
                  <AllTask />
            </div>
       );
}
export default AdminDashboard;