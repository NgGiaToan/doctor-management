import React from 'react';
import AppointmentRequest from './AppointmentRequest';
import Appointment from './Appointment';
import PatientChart from './PatientChart';
import GenderChart from './GenderChart';
import Patient from './Patient';

const Dashboard = () => {
  return (
    <div className="bg-gray-200 h-auto w-screen flex pb-[200px]">
        <div className="bg-white w-[326px] h-full mr-[39px] rounded-xl">

        </div>
        <div>
          <div className="h-[400px]"> 

          </div>
          <div className="flex">
            <AppointmentRequest/>
            <div className="ml-[39px] mr-[39px]">
              <PatientChart/>
              <div className="mt-28">
                <GenderChart />
              </div>
            </div>
            <Appointment/>
          </div>
          <div>
            <Patient/>
          </div>
        </div>
      
    </div>
  );
};


export default Dashboard;