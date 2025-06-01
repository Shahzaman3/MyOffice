import React from "react";

export const HeaderEmployee = (props) => {

      const logOutUser =()=>{
            localStorage.setItem('loggedInUser','')
            props.changeUser('')
      }

      return ( 
            <div className="bg-[#1c1c1c] p-10 rounded-2xl flex justify-between items-end">
                  <h1 className="text-white text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">{props.data.firstName} 👋</span></h1>
                  <button onClick={logOutUser} className="text-white bg-red-500 text-lg font-medium rounded-sm px-6 py-2">Log Out</button>
            </div>
       );
}
export default HeaderEmployee;