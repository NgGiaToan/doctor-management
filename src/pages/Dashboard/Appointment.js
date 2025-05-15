const Appointment = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="w-[502px]">
                    <div className= "top-20 mb-16">
                        <text className="text-3xl font-semibold">Appoitment Today</text>
                        
                    </div>

                    <div className="bg-white h-[720px] w-full rounded-xl">
                        <div className="h-[600px] pt-[20px]">
                            <div className="flex items-center py-[12px] px-[24px] rounded-[12px]">
                                <img className="object-cover rounded-full h-[80px] w-[80px]" src="https://images.unsplash.com/photo-1599566147214-ce487862ea4f?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                <div className="ml-[20px] w-[240px]">
                                    <p className="text-[24px] font-500 mb-[8px]">John Smith</p>
                                    <p className="text-[20px]">Clinic Consulting</p>
                                </div>

                                <p className="text-[18px] ml-[36px]">Ongoing</p>
                            </div>
                            
                            <div className="flex items-center py-[12px] px-[24px] rounded-[12px]">
                                <img className="object-cover rounded-full h-[80px] w-[80px]" src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                <div className="ml-[20px] w-[240px]">
                                    <p className="text-[24px] font-500 mb-[8px]">Frank Murray</p>
                                    <p className="text-[20px]">Vedio Consulting</p>
                                </div>

                                <p className="text-[18px] ml-[60px]">10:25</p>
                            </div>

                            <div className="flex items-center py-[12px] px-[24px] rounded-[12px]">
                                <img className="object-cover rounded-full h-[80px] w-[80px]" src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                <div className="ml-[20px] w-[240px]">
                                    <p className="text-[24px] font-500 mb-[8px]">Ella Lucia</p>
                                    <p className="text-[20px]">Emergency</p>
                                </div>

                                <p className="text-[18px] ml-[60px]">11:30</p>
                            </div>

                            <div className="flex items-center py-[12px] px-[24px] rounded-[12px]">
                                <img className="object-cover rounded-full h-[80px] w-[80px]" src="https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                <div className="ml-[20px] w-[240px]">
                                    <p className="text-[24px] font-500 mb-[8px]">Alyssa Dehn</p>
                                    <p className="text-[20px]">Clinic Consulting</p>
                                </div>

                                <p className="text-[18px] ml-[60px]">12:20</p>
                            </div>

                            <div>
                                <div className="ml-[24px] flex items-center mt-[20px]">
                                    <p className="text-[24px] font-600">03 - 09 May, 2021</p>
                                    <img className="h-[28px] w-[28px] ml-[12px]" src="https://img.icons8.com/ios-filled/500/20aaf8/left-squared--v2.png" alt="left-squared--v2"/>
                                    <img className="h-[28px] w-[28px] ml-[4px]" src="https://img.icons8.com/ios-filled/500/20aaf8/right-squared--v2.png" alt="left-squared--v2"/>
                                </div>
                            </div>

                            <div className="flex ml-[24px] mt-[10px]">
                                <p className="text-[22px] text-[#A7A8AD] font-500">S</p>
                                <p className="text-[22px] text-[#A7A8AD] font-500 ml-[56px]">M</p>
                                <p className="text-[22px] text-[#A7A8AD] font-500 ml-[56px]">T</p>
                                <p className="text-[22px] text-[#A7A8AD] font-500 ml-[56px]">W</p>
                                <p className="text-[22px] text-[#A7A8AD] font-500 ml-[56px]">T</p>
                                <p className="text-[22px] text-[#A7A8AD] font-500 ml-[56px]">F</p>
                                <p className="text-[22px] text-[#A7A8AD] font-500 ml-[56px]">S</p>
                            </div>

                            <div className="flex ml-[24px] mt-[12px]">
                                <p className="text-[22px] font-500">3</p>
                                <p className="text-[22px] font-500 ml-[58px]">4</p>
                                <p className="text-[22px] font-500 ml-[60px]">5</p>
                                <p className="text-[22px] font-500 ml-[60px]">6</p>
                                <p className="text-[22px] font-500 ml-[60px]">7</p>
                                <p className="text-[22px] font-500 ml-[58px]">8</p>
                                <p className="text-[22px] font-500 ml-[56px]">9</p>
                            </div>
                        </div>
                        <div className="flex h-[120px] bg-[#1B2433] rounded-xl ">
                            <div className="text-white mt-32 ml-[50px]">
                                <p className="text-3xl font-medium">Next Week</p>
                                <p className="mt-4 text-lg text-gray">Upcoming Schdules-2</p>
                            </div>
                            <div className="ml-[150px] mt-40">
                                <button className="bg-[#7A6EFE] pt-10 pb-10 rounded pl-24 pr-24 hover:bg-[#8B7FFF]">
                                    <text className="text-white text-xl font-medium">Open</text>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  export default Appointment;