import React, { createContext, useContext, useState } from "react";
import Heder from "./HomeLayout/Heder";
import Echart from "./Camponnet/Echart";
import Events from "./Camponnet/Events";
import SideBar from "./Camponnet/SideBar";

const SidebarContext = createContext();

const useSidebar = () => useContext(SidebarContext);

function App() {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar }}>
      <div className="flex w-full">
        <div
          className={`md:w-[15%] ${
            isSidebarVisible ? "hidden" : "block"
          } absolute md:block md:relative bg-white w-[50%] z-[100] rounded-e-[2rem] md:rounded-none`}
        >
          <SideBar />
        </div>

        <div className=" md:p-10 p-5 bg-[#fcfcfc] md:w-[85%] h-[100vh] w-full ">
          <Heder />
          <Echart />
          <Events />
        </div>
      </div>
    </SidebarContext.Provider>
  );
}

export { useSidebar };
export default App;
