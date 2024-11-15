import React from 'react'
import { useState, useEffect } from 'react'

const PatientChart = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [year, setYear] = useState(2024);

    useEffect(() => {
        fetch(`https://localhost:7169/api/Patient/year/${year}`)
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
    },[year]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>Error: {error.message}</div>; 
    }

    

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="w-[346px]">
                    <div className= "top-20 mb-16">
                        <text className="text-3xl font-semibold">
                            Patients
                        </text>
                        
                        <select 
                            className="text-gray-800 text-lg pt-4 pb-4 pl-16 pr-12 rounded ml-[158px]" 
                            id="year" 
                            value={year} 
                            onChange={()=> setYear(event.target.value)}
                            >
                            {[2021, 2022, 2023, 2024].map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="bg-white h-[320px] pl-28 pt-[60px] rounded-xl">
                        <div className="flex">
                            <div className="w-[68px] h-[68px] bg-blue-100 rounded-full pt-14 pl-[15px]">
                                <img className="h-[36px] w-[36px]" src="https://img.icons8.com/parakeet-line/48/228BE6/user.png" alt="user"/>
                            </div>
                            <div className="ml-20">
                                <div className="text-4xl font-bold">
                                    {items["inYear"]}
                                </div>
                                <div className="text-base">
                                    New Patients
                                </div>
                            </div>
                            <div className="ml-12 flex">
                                <img className="h-[20px] w-[20px] mt-2" src="https://img.icons8.com/pastel-glyph/100/C850F2/chart-arrow-rise.png" alt="chart-arrow-rise"/>
                                <text className="text-pink-800 font-medium ml-4 text-xl">
                                    {Math.round(items["inYear"] *100/ items["beforeYear"])}%
                                </text>
                            </div>
                        </div>
                        <div className="mt-60 flex">
                            <div className="w-[68px] h-[68px] bg-yellow-100 rounded-full pt-14 pl-[15px]">
                                <img className="h-[36px] w-[36px]" src="https://img.icons8.com/parakeet-line/100/FAB005/user.png" alt="user"/>
                            </div>
                            <div className="ml-20">
                                <div className="text-4xl font-bold">
                                    {items["beforeYear"]}
                                </div>
                                <div className="text-base">
                                    Old Patients
                                </div>
                            </div>
                            <div className="ml-12 flex">
                                <img className="h-[20px] w-[20px] mt-2" src="https://img.icons8.com/pastel-glyph/100/C850F2/chart-arrow-rise.png" alt="chart-arrow-rise"/>
                                <text className="text-pink-800 font-medium ml-4 text-xl">
                                    {Math.round(items["inYear"] *100/ items["beforeYear"])}%
                                </text>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default PatientChart;