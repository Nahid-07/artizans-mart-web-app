const Sidebar = () => {
    
    return (
        <div className="fixed left-0 bg-orange-500 h-screen w-[240px] top-0 flex items-center justify-center">
            <button className="absolute right-0 top-5 text-2xl mr-3 font-bold cursor-pointer">
            </button>
            <div className="flex flex-col gap-5 text-xl">
               <a href="">Smartwatch</a>
               <a href="">Smartwatch</a>
               <a href="">Smartwatch</a>
               <a href="">Smartwatch</a>
               <a href="">Smartwatch</a>
            </div>
        </div>
    );
};

export default Sidebar;