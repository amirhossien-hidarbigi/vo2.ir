import React, { useState } from "react";
import LogoImage from "../assets/TP-LOGO1.Png";
import Home from "../assets/Home.svg";
import Date from "../assets/Calendar.svg";
import Chart from "../assets/Chart.svg";
import Atp from "../assets/Group10.svg";
import User from "../assets/User.svg";
import FitNes from "../assets/fitness.svg";
import Route from "../assets/route.svg";
import Setting from "../assets/Setting.svg";
import Notif from "../assets/Notification.svg";
function SideBar() {
  const svgStyle = {
    width: "20px",
    height: "20px",
    marginRight: "8px",
    fill: "#222",
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex justify-center p-5">
          <img src={LogoImage} alt="" />
        </div>
        <div>
          <div className=" px-3 py-4 rounded-[1rem] flex gap-2 items-center hover:bg-[#ffe5f1] hover:text-[red] hover:fill-[red]">
            <img src={Home} alt="" className="text-[#fff]" />
            <span className="pt-1">خانه</span>
          </div>
        </div>
        <div>
          <div className="px-3 py-4 rounded-[1rem] flex gap-2 items-center hover:bg-[#ffe5f1] hover:text-[red] hover:fill-[red]">
            <img src={Date} alt="" style={svgStyle} />
            <span className="pt-1">تقوبم</span>
          </div>
        </div>
        <div>
          <div className=" px-3 py-4 rounded-[1rem] flex gap-2 items-center hover:bg-[#ffe5f1] hover:text-[red] hover:fill-[red]">
            <img src={Chart} alt="" style={svgStyle} />
            <span className="pt-1">انالیز</span>
          </div>
        </div>
        <div>
          <div className=" px-3 py-4 rounded-[1rem] flex gap-2 items-center hover:bg-[#ffe5f1] hover:text-[red] hover:fill-[red]">
            <img src={Atp} alt="" style={svgStyle} />
            <span className="pt-1">ATP</span>
          </div>
        </div>
        <div>
          <div className=" px-3 py-4 rounded-[1rem] flex gap-2 items-center hover:bg-[#ffe5f1] hover:text-[red] hover:fill-[red]">
            <img src={User} alt="" style={svgStyle} />
            <span className="pt-1">مدیریت ورزشکاران</span>
          </div>
        </div>
        <hr />
        <div>
          <div className=" px-3 py-4 rounded-[1rem] flex gap-2 items-center hover:bg-[#ffe5f1] hover:text-[red] hover:fill-[red]">
            <img src={FitNes} alt="" style={svgStyle} />
            <span className="pt-1"> مخزن تمرین‌ها</span>
          </div>
        </div>
        <div>
          <div className=" px-3 py-4 rounded-[1rem] flex gap-2 items-center hover:bg-[#ffe5f1] hover:text-[red] hover:fill-[red]">
            <img src={Route} alt="" style={svgStyle} />
            <span className="pt-1">استراتژِی</span>
          </div>
        </div>
        <div>
          <div className=" px-3 py-4 rounded-[1rem] flex gap-2 items-center hover:bg-[#ffe5f1] hover:text-[red] hover:fill-[red]">
            <img src={Setting} alt="" style={svgStyle} />
            <span className="pt-1">تنظیمات</span>
          </div>
        </div>
        <div>
          <div className=" px-3 py-4 rounded-[1rem] flex gap-2 items-center hover:bg-[#ffe5f1] hover:text-[red] hover:fill-[red]">
            <img src={Notif} alt="" style={svgStyle} />
            <span className="pt-1">آخرین فعالیت‌ها</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
