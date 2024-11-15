const Appointment = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="w-[502px]">
                    <div className= "top-20 mb-16">
                        <text className="text-3xl font-semibold">Appoitment Today</text>
                        
                    </div>

                    <div className="bg-white h-[720px] w-full rounded-xl">
                        <div className="h-[600px]">
                        
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