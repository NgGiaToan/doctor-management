import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

const ConfirmationDialog = ({title, message, onConfirm, onCancel }) => {
    return (
        <div className={`z-50 flex items-center justify-center fixed inset-0 bg-black bg-opacity-50`}>  
                <div className={`border-4 font-medium rounded-lg w-[320px] ${title === "Confirmed" ? 'bg-blue-50 text-indigo-800' : 'bg-red-50 text-red-800'}`}>
                    <div className="h-[160px] p-20 shadow-2xl">
                        {title==="Confirmed"?<img className="ml-[94px]" width="80px" height="80px" src="https://img.icons8.com/ios/500/228BE6/ok--v1.png" alt="ok--v1"/>:<img className="ml-[94px]" width="80px" height="80px" src="https://img.icons8.com/ios/500/FA5252/cancel-2.png" alt="cancel-2"/>}
                        <p className="text-xl mt-20 ml-20 mb-20">{message}</p>
                    </div>
                    <div className="bg-white h-[50px]">
                        <button className="mt-12 font-medium ml-[120px] rounded-lg bg-green-500 hover:bg-green-300 text-green-800 p-4 w-80" onClick={onConfirm}>Okay</button>
                        <button className="mt-12 font-medium ml-[20px] rounded-lg bg-red-500 hover:bg-red-300 text-red-800 p-4 w-80" onClick={onCancel}>Cancel</button>
                    </div>
                </div>
        </div>
    );
};

const AppointmentRequest = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [status, setStatus] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [value, setValue] = useState('');
    const [dialogConfig, setDialogConfig] = useState({});
    const [pageSize, setPageSize] = useState(7);

    const handleStatusChange = async (title, appointmentId) => {
        setValue(title);
        const isConfirmed = await confirmAction(title);
        if (isConfirmed) 
        {
            
            try {
                await updateAppointmentStatus(appointmentId, title); 
                setStatus([title, appointmentId]); 
            } catch (error) {
                console.error("Failed to update status:", error);
            }
        }
    };

    const confirmAction = (title) => {
        return new Promise((resolve) => {
            setShowDialog(true);
            setDialogConfig({
                title,
                message: `${title === "Confirmed" ? "Confirm" : "Decline"} this appointment?`,
                onConfirm: () => {
                    setShowDialog(false);
                    resolve(true); 
                },
                onCancel: () => {
                    setShowDialog(false);
                    resolve(false);
                },
            });
        });
    };

    const updateAppointmentStatus = async (appointmentId, title) => {
        if(status != []){
            if (title == "Confirmed"){
                enqueueSnackbar('Appointment Request Confirmed', { variant: 'success' });
            }
            else {
                enqueueSnackbar('Appointment Request Declined!', { variant: 'error' });
            }
            try {
                const currentAppointment = await fetch(`https://localhost:7169/api/Appointment/${appointmentId}`);
                const appointmentData = await currentAppointment.json();
                
                const updatedData = {
                ...appointmentData, 
                appointmentStatus: title, 
                };

                const response = await fetch(`https://localhost:7169/api/Appointment/${appointmentId}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
      
            } catch (error) {
                console.error('Error updating appointment:', error);
            }
        }
    };

    useEffect(() => {
        const page = 1; 
        fetch(`https://localhost:7169/api/Appointment?page=${page}&page_size=${pageSize}`)
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
    }, [status,pageSize]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>Error: {error.message}</div>; 
    }

    return (
        <div>
            {showDialog && (
                <ConfirmationDialog
                    title={dialogConfig.title}
                    message={dialogConfig.message}
                    onConfirm={dialogConfig.onConfirm}
                    onCancel={dialogConfig.onCancel}
                />
            )}
            <div className="flex items-center justify-center">
                <div className="w-[590px]">
                    <div className= "top-20 mb-16">
                        <text className="text-3xl font-semibold">Appoitment Request</text>
                        
                        <button 
                        onClick={() => setPageSize(0)}
                        className={`${pageSize===0 ? 'hidden' : 'visible'} pt-2 pb-2 pr-4 pl-4 ml-[252px]`}>
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
                        onClick = {()=> setPageSize(7)}
                        className={`${pageSize===7 ? 'hidden' : 'visible'} absolute pt-2 pb-2 pr-4 pl-4 mt-6 ml-[256px]`}
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

                    <div className="bg-white h-[720px] pt-24 pl-24 w-full rounded-xl">
                        <div className="h-[696px] overflow-y-scroll snap-y snap-mandatory">
                        {items.map((item, index) => (
                            <div className="snap-start flex mb-[24px] ">
                                    <div className="ml-4 w-[75px] h-[75px] overflow-hidden flex-none" key={index}>
                                        <img className="w-full h-full object-cover rounded-full" src={item.avatar}></img>
                                    </div>
                                    <div className="ml-16 w-[280px] flex-auto ">
                                        <p className="mt-6 text-2xl font-medium">
                                            {item.fullName}
                                        </p>
                                        <p className="mt-8 text-[15px]">
                                            {item.gender} {item.age}, {(() => {
                                                const date = new Date(item.appointmentTime);
                                                if (!isNaN(date.getTime())) {
                                                    const day = date.toLocaleString('vi-VN', { day: '2-digit' });
                                                    const month = date.toLocaleString('en-US', { month: 'long' }); 
                                                    const year = date.toLocaleString('vi-VN', { year: 'numeric' });
                                                    const hour = date.toLocaleString('vi-VN', { hour: '2-digit', hour12: false });
                                                    const minute = date.toLocaleString('vi-VN', { minute: '2-digit' });

                                                    let formattedDate= `${day} ${month} ${year} ${hour}:${minute}`;
                                                    
                                                    formattedDate = formattedDate.replace(" giờ", ""); 
                                                    
                                                    return formattedDate;
                                                } else {
                                                    return 'Ngày không hợp lệ'; 
                                                }
                                            })()}
                                        </p>    
                                    </div>
                                    <div className="mt-2 mr-2 flex-auto w-auto font-medium text-lg">
                                        <button 
                                            className={
                                                `mt-14 w-[140px] pt-10 pb-10 rounded-lg font-medium ml-60 
                                                ${item.appointmentStatus === 'Declined' ? 'bg-red-50 text-red-600':''}
                                                ${item.appointmentStatus === 'Confirmed' ? 'bg-blue-50 text-indigo-600':''}
                                                ${item.appointmentStatus === 'Pending' ? 'hidden':''}
                                                `
                                            }
                                        >{item.appointmentStatus}
                                        </button>
                                        <button
                                            className={
                                                `ml-40 mt-14 flex-auto rounded
                                                ${item.appointmentStatus === 'Declined' ? 'hidden':''}
                                                ${item.appointmentStatus === 'Confirmed' ? 'hidden':''}
                                                ${item.appointmentStatus === 'Pending' ? 'border-red-600 border-2':''}
                                                `
                                            }
                                            onClick={() => handleStatusChange('Declined', item.appointmentId)}
                                        ><img className="h-28 w-28 m-1" src="https://img.icons8.com/sf-regular-filled/50/FA5252/x.png" alt="x"/>
                                        </button>
                                        <button
                                            className={
                                                `flex-auto ml-16 rounded
                                                ${item.appointmentStatus === 'Declined' ? 'hidden':''}
                                                ${item.appointmentStatus === 'Confirmed' ? 'hidden':''}
                                                ${item.appointmentStatus === 'Pending' ? 'border-indigo-600 border-2':''}
                                                `
                                            }
                                            onClick={() => handleStatusChange('Confirmed', item.appointmentId)}
                                        ><img className="h-28 w-28 m-1" src="https://img.icons8.com/ios-filled/50/7950F2/checkmark--v1.png" alt="checkmark--v1"/>
                                        </button>
                                    </div>
                                    <div className="">
                                        
                                    </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default AppointmentRequest;