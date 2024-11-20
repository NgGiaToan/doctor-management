import React from 'react'
import { useState, useEffect, useRef } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactPaginate from 'react-paginate';
import AddPatient from './AddPatient.js';

const PatientList = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [pageSize, setPageSize] = useState(4);
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [showAdd, setShowAdd] = useState(false);
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://localhost:7169/api/Patient?page=1&page_size=0&search=${search}`);
            if (!response.ok) { 
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json(); 

            setTotalItems(data.length); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1); 
    };

    useEffect(() => {
        fetchData();
        fetch(`https://localhost:7169/api/Patient?page=${currentPage}&page_size=${pageSize}&search=${search}`)
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
    }, [pageSize,currentPage,search]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>Error: {error.message}</div>; 
    }

    const handleButtonClick = (event) => {
        if (isModalOpen === false){
            const rect = event.target.getBoundingClientRect(); 
            setModalPosition({
                top: rect.top + window.scrollY + rect.height + 28, 
                left: rect.left + window.scrollX - 300,
            });
            setIsModalOpen(true);
        }
        else {
            setIsModalOpen(false);
        }

    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSearch(newValue);
      };

    return (
        <div>
            {showAdd && 
            <AddPatient onClose={() => setShowAdd(false)}></AddPatient>}
            <div className="h-full w-[1516px]">
                <div className="flex mt-40 justify-between items-baseline">
                    <p className="text-4xl font-bold text-white">Patient List</p>
                    <button onClick ={() => setShowAdd(true)} className="flex pt-20 pb-20 pl-32 pr-36 bg-[#6D64E5] hover:bg-[#7168E9] rounded-xl">
                        <img className="h-[36px] w-[36px]" src="https://img.icons8.com/ios/500/FFFFFF/plus-math--v1.png" alt="plus-math--v1"/>
                        <text className="text-white text-3xl ml-10 mt-2">Add Patient</text>
                    </button>
                </div>

                <div className="flex mt-40 justify-between items-baseline">
                    <div className="flex items-baseline">
                        <p className="text-2xl font-medium text-white">Show</p>
                        <select 
                            className="text-white text-xl text-medium pt-12 pb-12 pl-16 pr-12 rounded ml-20 bg-[#323A45]" 
                            id="year" 
                            value={pageSize === 0 ? 'all': pageSize} 
                            onChange={()=> setPageSize(event.target.value==='all' ? 0 : event.target.value)}
                            >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'all'].map((a) => (
                                <option key={a} value={a}>
                                    {a}  
                                </option>
                            ))}
                        </select>
                        <p className="text-2xl font-medium text-white ml-20">enitres</p>
                    </div>
                    <div>
                        <button className="flex pt-16 pb-16 pl-28 pr-24 bg-[#323A43] rounded-xl">
                            <text className="text-white text-2xl">Filter</text>
                            <img className="ml-8 h-[24px] w-[24px] mt-2" src="https://img.icons8.com/ios/500/FFFFFF/empty-filter--v1.png" alt="empty-filter--v1"/>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-baseline mt-20">
                    <div className="flex flex-col">
                        <label for='patient' className="text-white text-2xl">Patient</label>
                        <input 
                            id= "patient"
                            className= "placeholder-[#8E919A] text-[#FFFFFF] text-2xl bg-[#282A36] mt-12 border-[#333A44] border-2 rounded-lg p-20 w-[480px]" 
                            type="text" 
                            placeholder='Patient name, Patient Id, Pho...'
                            onChange={handleChange}
                        >
                        </input>
                        <button className="absolute mt-60 ml-[430px]">
                            <img className="h-[32px] w-[32px]" src="https://img.icons8.com/ios-glyphs/500/8E919A/search--v1.png" alt="search--v1"/>
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <label for='patient' className="text-white text-2xl">Category</label>
                        <select
                            id="dropdown"
                            class="text-[#8E919A] focus:ring-[##8E919A] focus:border-[##8E919A] placeholder-[#8E919A] text-2xl bg-[#282A36] mt-12 border-[#333A44] border-2 rounded-lg p-20 w-[480px]"
                        >
                            <option value="all">All Category</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label for='date' className="text-white text-2xl">Date Of Joining</label>
                        <DatePicker
                            selected={selectedDate} 
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy" 
                            placeholderText="Select a date" 
                            className="p-20 bg-[#282A36] text-[#8E919A] border-[#333A44] border-2 rounded-lg w-[480px] text-2xl mt-12" // Thêm class để tùy chỉnh giao diện
                        />
                        <img style={{ pointerEvents: 'none' }} className="absolute h-[20px] mt-[66px] ml-[436px]" src="https://img.icons8.com/pastel-glyph/500/8E919A/calendar.png" alt="calendar"/>
                    </div>
                </div>

                <div className="bg-[#1B2433] h-[72px] text-3xl text-gray-400 font-medium rounded-xl relative pt-20 mt-20">
                    <text className="absolute ml-28">Patient Name</text>
                    <text className="ml-[310px] absolute">Patient ID</text>
                    <text className="ml-[600px] absolute">Date</text>
                    <text className="ml-[790px] absolute">Gender</text>
                    <text className="ml-[920px] absolute">Diseases</text>
                    <text className="ml-[1100px] absolute">Status</text>
                    <text className="ml-[1230px] absolute">Payment</text>
                    <text className="ml-[1410px] absolute">Action</text>
                    
                </div>
                <div> {/*className="h-[420px] overflow-y-scroll snap-y snap-mandatory"*/}
                    {items.length === 0 ? 
                    <div className="text-gray-700 mt-40 text-3xl ml-28">No patients found with names or IDs containing the {search}. Please try again with different keywords!</div>:
                    items.map((item, index) => (
                        <div className="mt-10 h-[94px] bg-[#272934] text-gray-400 flex pt-20 rounded-xl relative">
                            <div className="ml-28 w-[54px] h-[54px] overflow-hidden flex-none" key={index}>
                                <img className="w-full h-full object-cover rounded-full" src={item.avatar}></img>
                            </div>
                            <text className="ml-12 text-3xl mt-8">{item.fullName}</text>
                            <text className="absolute ml-[310px] text-3xl">{item.patientId.slice(0, 18)} <br /> {item.patientId.slice(18, 32)}</text>
                            <text className="ml-[600px] absolute text-3xl mt-8">{new Date(item.appointmentTime).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })}</text>
                            <text className="ml-[790px] absolute text-3xl mt-8">{item.gender}</text>
                            <text className="ml-[910px] absolute text-3xl mt-8">{item.diseases}</text>
                            <text className="ml-[1090px] absolute text-3xl mt-8">{item.status}</text>
                            <text className="ml-[1240px] absolute text-3xl mt-8">{item.paymentName}</text>
                            <button onClick={handleButtonClick} className="ml-[1430px] absolute mt-8">
                                <img className="h-[40px] w-[40px]" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/100/ADADAD/external-dot-basic-ui-jumpicon-glyph-jumpicon-glyph-ayub-irawan-2.png"></img>
                            </button>
                        </div>
                    ))}
                    {isModalOpen && (
                        <div 
                            style={{ top: `${modalPosition.top}px`, left: `${modalPosition.left}px` }}
                            className="bg-[#282A36] h-[148px] w-320 absolute pt-10 pb-10 rounded-xl border-1 border-gray-800"
                        >
                            <div className="group relative h-64 flex items-baseline p-16 hover:bg-[#242632]">
                                <img className="absolute mt-2 h-28 ml-20 group-hover:opacity-0 transition-opacity" src="https://img.icons8.com/forma-light/500/ADADAD/stethoscope.png" alt="stethoscope"/>
                                <img className="absolute mt-2 h-28 ml-20 opacity-0 group-hover:opacity-100 transition-opacity" src="https://img.icons8.com/forma-light/500/FFFFFF/stethoscope.png" alt="stethoscope"/>
                                <p className="text-gray-500 text-2xl ml-64 group-hover:text-white">Log Consulting</p>
                            </div>
                            <div className="group relative h-64 flex items-baseline p-16 hover:bg-[#242632]">
                                <img className="absolute h-32 ml-16 group-hover:opacity-0 transition-opacity" src="https://img.icons8.com/pastel-glyph/500/ADADAD/new-post--v2.png" alt="new-post"/>
                                <img className="absolute h-32 ml-16 opacity-0 group-hover:opacity-100 transition-opacity" src="https://img.icons8.com/pastel-glyph/500/FFFFFF/new-post--v2.png" alt="new-post"/>
                                <p className="text-gray-500 text-2xl ml-64 group-hover:text-white">Message</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-end mt-40">
                    <ReactPaginate
                        className="flex text-2xl text-gray-700"
                        activeClassName="text-[#7D71ED] px-16 py-4"
                        breakLabel="..."
                        breakClassName=""
                        nextLabel=" > "
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={Math.floor(totalItems / pageSize) + (totalItems % pageSize > 0 ? 1 : 0)}
                        previousLabel=" < "
                        renderOnZeroPageCount={null}
                        pageClassName="px-16 py-4 hover:text-gray-400"
                        previousClassName="rounded px-12 py-4 border-2 border-gray-700 cursor-pointer hover:text-gray-400 hover:border-gray-400"
                        nextClassName="rounded px-12 py-4 border-2 border-gray-700 cursor-pointer hover:text-gray-400 hover:border-gray-400"
                    />
                </div>
            </div>
        </div>
    );
}

export default PatientList;