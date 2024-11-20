import React from 'react';
import PatientList from './PatientList';
import Sidebar from './Sidebar';

const MyPatients = () => {
    return (
        <div className="bg-[#242632] w-screen h-full">
            <div className="flex mb-[400px]"> 
                <div className="mr-[39px]">
                    <Sidebar></Sidebar>
                </div>
                <PatientList></PatientList>
            </div>
        </div>
    )
}

export default MyPatients;