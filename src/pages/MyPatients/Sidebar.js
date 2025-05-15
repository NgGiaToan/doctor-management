import React, { useState } from "react";
import CustomButton from "src/component/CustomButton";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(2);

    const dataButtons = [
        { 
            id: 1, 
            text: "Overview", 
            link: "https://img.icons8.com/ios/500/555962/windows-11.png", 
            activeLink: "https://img.icons8.com/ios/500/000000/windows-11.png"
        },
        { 
            id: 2, 
            text: "Appointment", 
            link: "https://img.icons8.com/ios/500/555962/planner.png",
            activeLink: "https://img.icons8.com/ios/500/000000/planner.png"
        },
        { 
            id: 3, 
            text: "My Patients", 
            link: "https://img.icons8.com/parakeet-line/500/555962/user.png",
            activeLink: "https://img.icons8.com/parakeet-line/500/000000/user.png"
        },
        { 
            id: 4, 
            text: "Schedule Timings", 
            link: "https://img.icons8.com/pastel-glyph/500/555962/clock--v1.png",
            activeLink: "https://img.icons8.com/pastel-glyph/500/000000/clock--v1.png"
        },
        { 
            id: 5, 
            text: "Payments", 
            link: "https://img.icons8.com/ios/500/555962/bank-card-back-side--v1.png",
            activeLink: "https://img.icons8.com/ios/500/000000/bank-card-back-side--v1.png"
        },
        {
            id: 6, 
            text: "Message", 
            link: "https://img.icons8.com/ios/500/555962/new-post.png",
            activeLink: "https://img.icons8.com/ios/500/000000/new-post.png"
        },
        {
            id: 7, 
            text: "Blog", 
            link: "https://img.icons8.com/ios/500/555962/document--v1.png",
            activeLink: "https://img.icons8.com/ios/500/000000/document--v1.png"
        },
        {
            id: 8, 
            text: "Settings", 
            link: "https://img.icons8.com/ios/500/555962/settings--v1.png",
            activeLink: "https://img.icons8.com/ios/500/000000/settings--v1.png"
        },
        
    ];

    const navigate = useNavigate();

    const toggleActive = (index) => {
        
        setActiveIndex(index);
        if (index === 0) navigate("/dashboard");
    };

    return (
        <div>
            <div className="bg-[#282A32] fixed w-[326px] h-full p-20 pt-[200px]">
                {dataButtons.map((button, index) => (
                    <CustomButton
                        key= {button.id}
                        link = {button.link}
                        activeLink= {button.activeLink}
                        backgroundColor= ''
                        activeBackgroundColor= '#FFFFFF'
                        text={button.text}
                        textColor= '#555962'
                        activeTextColor= '#000000'
                        active={activeIndex === index}
                        onClick = {() => toggleActive(index)}
                    ></CustomButton>
                ))}
                
            </div>
        </div>
    );
}

export default Sidebar;