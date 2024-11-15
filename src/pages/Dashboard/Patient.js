import React, { useState, useEffect } from 'react';

const Patient = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [pageSize, setPageSize] = useState(4);

    useEffect(() => {
        fetch(`https://localhost:7169/api/Appointment/RecentPatient/${pageSize}`)
        .then(response => {
            if (!response.ok) { 
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setItems(data);
            setLoading(false); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setError(error); 
            setLoading(false);
        });
    }, [pageSize]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>Error: {error.message}</div>; 
    }

    return(
        <div>
            <div className="flex items-center justify-center">
                <div className="w-[1516px] mt-28">
                    <div className= "top-20 mb-16">
                        <text className="text-3xl font-semibold">Recent Patients</text>
                        <button 
                        onClick={() => setPageSize(8)}
                        className={`${pageSize===8 ? 'hidden' : 'visible'} pt-2 pb-2 pr-4 pl-4 ml-[1240px]`}>
                            <span className="flex items-center text-cyan-500 font-medium text-lg">
                                View All
                                <img 
                                    className="w-12 h-12 ml-3" 
                                    src="https://img.icons8.com/ios-glyphs/30/22C3E6/more-than.png" 
                                    alt="more than icon" 
                                    aria-hidden="true" 
                                />
                            </span>
                        </button>
                        <button 
                        onClick = {()=> setPageSize(4)}
                        className={`${pageSize===4 ? 'hidden' : 'visible'} absolute pt-2 pb-2 pr-4 pl-4 mt-6 ml-[1240px]`}
                        >
                            <span className="flex items-center text-red-600 font-medium text-lg">
                                <img 
                                    className="w-20 h-20 ml-2" 
                                    src="https://img.icons8.com/sf-regular-filled/100/FA5252/x.png" 
                                    alt="x"
                                />
                                Cancel
                            </span>
                        </button>
                    </div>
                    <div className="bg-[#dfe3e6] h-[72px] text-3xl text-gray-700 font-medium rounded-xl relative pt-20">
                        <text className="absolute ml-28">Patient Name</text>
                        <text className="ml-[370px] absolute">Visit ID</text>
                        <text className="ml-[690px] absolute">Date</text>
                        <text className="ml-[890px] absolute">Gender</text>
                        <text className="ml-[1050px] absolute">Diseases</text>
                        <text className="ml-[1250px] absolute">Status</text>
                    </div>
                    <div>
                        {items.map((item, index) => (
                            <div className="mt-10 h-[94px] bg-white text-gray-700 flex pt-20 rounded-xl relative">
                                <div className="ml-28 w-[54px] h-[54px] overflow-hidden flex-none" key={index}>
                                    <img className="w-full h-full object-cover rounded-full" src={item.avatar}></img>
                                </div>
                                <text className="ml-12 text-3xl mt-8">{item.fullName}</text>
                                <text className="absolute ml-[370px] text-3xl">{item.patientId.slice(0, 18)} <br /> {item.patientId.slice(18, 32)}</text>
                                <text className="ml-[690px] absolute text-3xl mt-8">{new Date(item.appointmentTime).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })}</text>
                                <text className="ml-[890px] absolute text-3xl mt-8">{item.gender}</text>
                                <text className="ml-[1050px] absolute text-3xl mt-8">{item.diseases}</text>
                                <text className="ml-[1250px] absolute text-3xl mt-8">{item.patientStatus}</text>
                                <button className="ml-[1460px] absolute mt-12">
                                    <img className="h-[30px] w-[30px]" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/100/4D4D4D/external-dot-basic-ui-jumpicon-glyph-jumpicon-glyph-ayub-irawan.png"></img>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patient;