import React from 'react';
import { useState, useId } from 'react';

const AddPatient =({ onClose })=> {

    const fNameId = useId();
    const lNameId = useId();
    const locationId = useId();
    const emailId = useId();
    const reasonId = useId();
    const phoneNumberId = useId();
    

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneCode, setPhoneCode] = useState("+84");
    const [reason, setReason] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const data = { 
            "status": "New-Patient",
            "gender": "string",
            "avatar": "string",
            "fullName": lName+" "+ fName,
            "date": new Date(),
            "time": new Date(),
            "location": location,
            "email": email,
            "phoneNumber": phoneCode+phoneNumber,
            "diseases": reason,
            "paymentId": "9bc32177-5504-43b8-8d84-9e3d2c2b8c24",
            "age": 0
        };

        try {
            const response = await fetch('https://localhost:7169/api/Patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

        setFName("");
        setLName("");
        setPhoneCode("+84");
        setPhoneNumber("");
        setEmail("");
        setLocation("");
        setReason("");
    };
        

    const handleCancel = (e) => {
        e.preventDefault();

        setFName("");
        setLName("");
        setPhoneCode("+84");
        setPhoneNumber("");
        setEmail("");
        setLocation("");
        setReason("");
    }

    return (
        <div>
            <div className="grid place-items-center h-full w-full fixed top-0 left-0 bg-black z-50 bg-opacity-60">
                <div className=" py-32 absolute h-[800px] w-[720px] bg-[#282A36] rounded shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between px-60">
                            <span className="text-white text-2xl mt-8">Add New Patient</span>
                            <button className ="text-white text-3xl" onClick={onClose}>x</button>
                        </div>
                        <hr class="border-t border-gray-700 w-full mt-16" />
                        <div className="flex px-60 mt-32">
                            <div className="flex flex-col">
                                <label htmlFor={fNameId} className="text-[#FFFFFF] text-xl">First Name</label>
                                <input 
                                    value={fName} 
                                    onChange={(e) => setFName(e.target.value)} 
                                    id= {fNameId}
                                    className= "placeholder-[#8E919A] text-[#FFFFFF] text-xl bg-[#282A36] mt-8 border-[#333A44] border-2 rounded-lg p-12 w-[280px] h-60" 
                                    type="text" 
                                    placeholder='Jhone'
                                    required
                                >
                                </input>
                            </div>
                            <div className="flex flex-col ml-40">
                                <label htmlFor={lNameId} className="text-[#FFFFFF] text-xl">Last Name</label>
                                <input 
                                    value={lName} 
                                    onChange={(e) => setLName(e.target.value)} 
                                    id= {lNameId}
                                    className= "placeholder-[#8E919A] text-[#FFFFFF] text-xl bg-[#282A36] mt-8 border-[#333A44] border-2 rounded-lg p-12 w-[280px] h-60" 
                                    type="text" 
                                    placeholder='Martin'
                                    required
                                >
                                </input>
                            </div>
                        </div>

                        <div className="flex px-60 mt-32">
                            <div className="flex flex-col">
                                <label htmlFor={locationId} className="text-[#FFFFFF] text-xl">Location</label>
                                <input 
                                    value={location} 
                                    onChange={(e) => setLocation(e.target.value)} 
                                    id= {locationId}
                                    className= "placeholder-[#8E919A] text-[#FFFFFF] text-xl bg-[#282A36] mt-8 border-[#333A44] border-2 rounded-lg p-12 w-[600px] h-60" 
                                    type="text" 
                                    placeholder='2972 Westtheimer Rd. Santa Ana, lllinois 85486'
                                    required
                                >
                                </input>
                            </div>
                        </div>

                        <div className="flex px-60 mt-32">
                            <div className="flex flex-col">
                                <label htmlFor= {emailId} className="text-[#FFFFFF] text-xl">Patient Email</label>
                                <input 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    id= {emailId}
                                    className= "placeholder-[#8E919A] text-[#FFFFFF] text-xl bg-[#282A36] mt-8 border-[#333A44] border-2 rounded-lg p-12 w-[280px] h-60" 
                                    type="text" 
                                    placeholder='Info@patient.com'
                                    required
                                >
                                </input>
                            </div>
                            <div className="flex flex-col ml-40">
                                <label htmlFor={phoneNumberId} className="text-[#FFFFFF] text-xl">Phone Number</label>
                                
                                <div className="flex">
                                    <select 
                                        value= {phoneCode}
                                        onChange={(e)=> setPhoneCode(e.target.value)}
                                        className="text-[#8E919A] text-xl bg-[#282A36] border-[#333A44] border-2 rounded-lg w-72 mr-8 h-[58px] mt-10" 
                                        id="year" 
                                    >
                                        {['+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33', '+34', '+36', '+39', '+40', '+41', '+43', '+44', '+45', '+46', '+47', '+48', '+49', '+51', '+52', '+53', '+54', '+55', '+56', '+57', '+58', '+60', '+61', '+62', '+63', '+64', '+65', '+66', '+81', '+82', '+84', '+86', '+90', '+91', '+92', '+93', '+94', '+95', '+98', '+211', '+212', '+213', '+216', '+218', '+220', '+221', '+222', '+223', '+224', '+225', '+226', '+227', '+228', '+229', '+230', '+231', '+232', '+233', '+234', '+235', '+236', '+237', '+238', '+239', '+240', '+241', '+242', '+243', '+244', '+245', '+246', '+247', '+248', '+249', '+250', '+251', '+252', '+253', '+254', '+255', '+256', '+257', '+258', '+260', '+261', '+262', '+263', '+264', '+265', '+266', '+267', '+268', '+269', '+290', '+291', '+297', '+298', '+299', '+350', '+351', '+352', '+353', '+354', '+355', '+356', '+357', '+358', '+359', '+370', '+371', '+372', '+373', '+374', '+375', '+376', '+377', '+378', '+379', '+380', '+381', '+382', '+383', '+385', '+386', '+387', '+389', '+420', '+421', '+423', '+500', '+501', '+502', '+503', '+504', '+505', '+506', '+507', '+508', '+509', '+590', '+591', '+592', '+593', '+594', '+595', '+596', '+597', '+598', '+599', '+670', '+672', '+673', '+674', '+675', '+676', '+677', '+678', '+679', '+680', '+681', '+682', '+683', '+685', '+686', '+687', '+688', '+689', '+690', '+691', '+692', '+850', '+852', '+853', '+855', '+856', '+880', '+886', '+960', '+961', '+962', '+963', '+964', '+965', '+966', '+967', '+968', '+970', '+971', '+972', '+973', '+974', '+975', '+976', '+977', '+992', '+993', '+994', '+995', '+996', '+998'].map((a) => (
                                            <option key={a} value={a}>
                                                {a}  
                                            </option>
                                        ))}
                                    </select>
                                    <input 
                                        value={phoneNumber}  
                                        onChange={(e) => setPhoneNumber(e.target.value)}     
                                        id= {phoneNumberId} 
                                        className= "placeholder-[#8E919A] text-[#FFFFFF] text-xl bg-[#282A36] mt-8 border-[#333A44] h-60 border-2 rounded-lg p-12 w-[200px]" 
                                        type="text" 
                                        placeholder='01767766336'
                                        required
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div className="flex px-60 mt-32 flex-col">
                        <label htmlFor={reasonId} className="text-[#FFFFFF] text-xl">Reason</label>
                            <textarea 
                                value={reason} 
                                onChange={(e) => setReason(e.target.value)}                                         
                                id={reasonId}
                                className="mt-8 text-xl bg-[#282A36] text-white border-[#333A44] h-[136px] border-2 rounded-lg p-12"
                                required
                            >    
                            </textarea>
                        </div>

                        <div className="flex px-60 mt-32">
                            <button className="hover:bg-[#7269F0] w-[280px] h-60 p-16 bg-[#6D64E5] rounded-lg" type="submit">
                                <text className="text-xl text-white">Save</text>
                            </button>

                            <button onClick={handleCancel} className="hover:bg-[#2D2F3C] w-[280px] h-60 p-16 border-2 border-[#6D64E5] rounded-lg ml-40">
                                <text className="text-xl text-gray-500">Cancel</text>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default AddPatient;