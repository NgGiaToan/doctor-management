const HomePage = () => {
    return (
        <div className="bg-white h-screen w-full p-[80px]">
            <button className="bg-teal-400 pt-12 pb-12 pl-24 pr-24 rounded-xl hover:bg-teal-300 mt-40">
                <a href="./dashboard" className="text-white text-2xl">Dashboard</a>
            </button>

            <button className="bg-green-400 pt-12 pb-12 pl-24 pr-24 rounded-xl hover:bg-green-300 ml-40">
                <a href="./mypatients" className="text-white text-2xl">My Patients</a>
            </button>
        </div>
    );
}

export default HomePage;