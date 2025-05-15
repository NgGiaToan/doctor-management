import React from 'react';
import AppointmentRequest from './AppointmentRequest';
import Appointment from './Appointment';
import PatientChart from './PatientChart';
import GenderChart from './GenderChart';
import Patient from './Patient';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="bg-gray-200 h-auto w-screen flex pb-[0px]">
        <Sidebar ></Sidebar>
        
        <div className="ml-[380px] ">
          <div className="h-[400px]"> 
            <div>
              <div className="flex pt-[24px] items-center">
                <img className="h-[36px] w-[36px]" src="https://img.icons8.com/ios-glyphs/500/8E919A/search--v1.png" alt="search--v1"/>
                <p className="w-[400px] text-[#8E919A] font-500 text-xl mt-[4px] ml-[8px]">Search Appointment, Patient or etc</p>
                <img className="ml-[700px] h-[32px] w-[32px]" src="https://img.icons8.com/parakeet-line/500/8e919a/help.png" alt="help"/>
                <img className="ml-[20px] h-[32px] w-[32px]" src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/500/8e919a/external-bell-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" alt="external-bell-interface-royyan-wijaya-detailed-outline-royyan-wijaya"/>
                <img className="object-cover h-[48px] w-[48px] rounded-full ml-[20px]" src="https://img.freepik.com/free-photo/bearded-doctor-glasses_23-2147896187.jpg?t=st=1747228817~exp=1747232417~hmac=926e1a31e7feebee414ab7b7039ec418edfbd32e9386f78cafc9f6863b9d4cef&w=740"></img>
                <div className="flex-col ml-[10px]">
                  <p className="text-[18px] font-600">Stephen Conley</p>
                  <p className="text-[#8E919A] text-[14px] mt-[4px]">Cardiologist</p>
                </div>
                <img className="h-[24px] w-[24px] ml-[20px]" src="https://img.icons8.com/ios-filled/500/8e919a/sort-down.png" alt="sort-down"/>
              </div>
            </div>

            <div className="pt-[48px]">
              <p className="text-[32px] font-600">Welcome, Dr.Stephen</p>
              <p className="text-[16px] text-[#72757C]">Have a nice day at great work</p>
            </div>

            <div className="flex pt-[32px]">
              <div className="bg-[#7A6EFE] h-[160px] w-[360px] rounded-[16px] flex items-center pl-[30px]">
                <div className="bg-[#9188FF] rounded-full h-[80px] w-[80px]">
                  <img className="p-[24px]" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/500/FFFFFF/external-calendar-library-tanah-basah-basic-outline-tanah-basah.png" alt="external-calendar-library-tanah-basah-basic-outline-tanah-basah"/>
                </div>

                <div className="ml-[30px]">
                  <p className="text-white text-[32px] font-600">24.4k</p>
                  <p className="text-white mt-[4px] text-[16px]">Appointments</p>
                </div>
              </div>

              <div className="ml-[20px] bg-[#FF5363] h-[160px] w-[360px] rounded-[16px] flex items-center pl-[30px]">
                <div className="bg-[#FF717F] rounded-full h-[80px] w-[80px]">
                  <img className="p-[18px]" src="https://img.icons8.com/pastel-glyph/500/FFFFFF/person-male--v2.png" alt="person-male--v2"/>
                </div>

                <div className="ml-[30px]">
                  <p className="text-white text-[32px] font-600">166.3k</p>
                  <p className="text-white mt-[4px] text-[16px]">Total Patient</p>
                </div>
              </div>

              <div className="ml-[20px] bg-[#FFA901] h-[160px] w-[360px] rounded-[16px] flex items-center pl-[30px]">
                <div className="bg-[#FFB72D] rounded-full h-[80px] w-[80px]">
                  <img className="p-[26px]" src="https://img.icons8.com/pastel-glyph/500/FFFFFF/hospital--v3.png" alt="hospital--v3"/>
                </div>

                <div className="ml-[30px]">
                  <p className="text-white text-[32px] font-600">53.5k</p>
                  <p className="text-white mt-[4px] text-[16px]">Clinic Consulting</p>
                </div>
              </div>

              <div className="ml-[20px] bg-[#24A8FA] h-[160px] w-[360px] rounded-[16px] flex items-center pl-[30px]">
                <div className="bg-[#4BB8F9] rounded-full h-[80px] w-[80px]">
                  <img className="p-[24px]" src="https://img.icons8.com/ios/500/FFFFFF/video-call.png" alt="video-call"/>
                </div>

                <div className="ml-[30px]">
                  <p className="text-white text-[32px] font-600">28.0k</p>
                  <p className="text-white mt-[4px] text-[16px]">Video Consulting</p>
                </div>
              </div>
            </div>
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