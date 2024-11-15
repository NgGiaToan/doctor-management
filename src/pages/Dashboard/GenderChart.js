import React from 'react'
import { useState, useEffect } from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
}from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
);

import { Doughnut } from 'react-chartjs-2';

const GenderChart = () => {

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


    const chartData = {
        labels: ['Male', 'Female', 'Child'],
        datasets: [
            {
                label: 'Số lượng bệnh nhân',
                data: [
                    items["maleCount"],items["femaleCount"],items["childCount"]
                ],
                backgroundColor: [
                    '#FFA901',
                    '#7A6EFE',
                    '#24A6F7' 
                ],
                hoverBackgroundColor: [
                    '#FFBA12',
                    '#8B7FFF',
                    '#35B7F8' 
                ]
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom',
                align: 'center',
                flex_wrap: 'nowrap',
                overflow_x: 'auto',
                labels: {
                    font: {
                        size: 18
                    },
                    color: '#333' ,
                    usePointStyle: true,
                    boxWidth: 120,
                    boxHeight: 10,
                    padding: 30,
                }

            },
            tooltip: {
                backgroundColor: '#000',
                bodyColor: '#fff',
                titleFont: {
                    size: 16
                }
            }
        },
        
        maintainAspectRatio: false,
        cutout: '66%' 
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="w-[346px]">
                    <div className= "top-20 mb-16">
                        <text className="text-3xl font-semibold">
                            Gender
                        </text>
                        
                        <select 
                            className="text-gray-800 text-lg pt-4 pb-4 pl-16 pr-12 rounded ml-[169px]" 
                            id="year" 
                            value={year} 
                            onChange={()=> setYear(event.target.value)}
                            >
                            {[2020, 2021, 2022, 2023, 2024].map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="bg-white h-[320px] pt-60 rounded-xl">
                        <div className="h-[240px] w-full">
                            <div className="max-w-4xl mx-auto h-[200px]">
                                <Doughnut 
                                    data = {chartData}
                                    options={options}
                                />
                            </div>
                            <div className="relative text-gray-600 text-lg font-medium">
                                <text className="absolute ml-[60px]">
                                    {Math.round(items["maleCount"]*100 / items["inYear"])}%
                                </text>
                                <text className="absolute ml-[170px]">
                                    {Math.round(items["femaleCount"]*100 / items["inYear"])}%
                                </text>
                                <text className="absolute ml-[280px]">
                                    {Math.round(items["childCount"]*100 / items["inYear"])}%
                                </text>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default GenderChart;