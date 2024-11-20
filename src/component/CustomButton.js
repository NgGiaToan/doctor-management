const CustomButton = ({link, activeLink, text, textColor, activeTextColor, backgroundColor, activeBackgroundColor, active = false, onClick}) => {
    return (
        <button  onClick={() => {
            if (!active) 
                {
                    onClick(); 
                }
            }}
            disabled={active} 
            className={`bg-[${active ? activeBackgroundColor : backgroundColor}] flex h-[72px] w-[285px] pl-24 rounded-xl`}>
            <img className="h-[40px] w-[40px] mt-16" src={active ? activeLink : link} alt="windows-11"/>
            <text className={`text-2xl mt-[22px] ml-10 text-[${active ? activeTextColor : textColor}]`}>{text}</text>
        </button>
    ); 
};

export default CustomButton;