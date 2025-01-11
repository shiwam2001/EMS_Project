import { useContext } from "react"
import React from 'react'
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    // console.log(authData);


    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded  h-43'>
            {/* {authData.employees.map(function (elem) { */}

            <div className='bg-red-400 mb-6 flex border-2 rounded justify-between py-3 px-3'>
                <h2 className="w-1/6 bg-blue-300 rounded p-2  text-black">Employee Name</h2>
                <h3 className="w-1/6 bg-blue-300 rounded p-2  text-black">New Task</h3>
                <h5 className="w-1/6 bg-blue-300 rounded p-2  text-black">Active Task</h5>
                <h5 className="w-1/6 bg-blue-300 rounded p-2  text-black">Completed</h5>
                <h5 className="w-1/6 bg-blue-300 rounded p-2  text-black">Failed</h5>
            </div>


            <div className="h-[40%] overflow-auto">
                {userData.map(function (elem,idx) {

                    return <div key={(idx)} className='bg-red-400 mb-3 border-2 overflow-auto flex rounded justify-between py-3 px-3'>
                        <h2 className="w-1/6 bg-blue-300 rounded p-2  text-red-900">{elem.firstName}</h2>
                        <h3 className="w-1/6 bg-blue-300 rounded p-2  text-red-900">{elem.taskCounts.newTask}</h3>
                        <h5 className="w-1/6 bg-blue-300 rounded p-2  text-red-900">{elem.taskCounts.active}</h5>
                        <h5 className="w-1/6 bg-blue-300 rounded p-2  text-red-900">{elem.taskCounts.completed}</h5>
                        <h5 className="w-1/6 bg-blue-300 rounded p-2  text-red-900">{elem.taskCounts.failed}</h5>


                    </div>

                })}
            </div>

        </div>

    )
}

export default AllTask
