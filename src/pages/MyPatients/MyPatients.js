import React from 'react';
import PatientList from './PatientList';
import Sidebar from './Sidebar';

const MyPatients = () => {
    return (
        <div className="bg-[#242632] w-screen h-auto">
            <div className="flex"> 
                <div className="mr-[39px] ">
                    <Sidebar></Sidebar>
                </div>
                <div className="ml-[340px] mb-[20px]">
                    <PatientList></PatientList>
                </div>
            </div>
        </div>
    )
}

export default MyPatients;