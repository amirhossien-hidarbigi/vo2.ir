import React, { useState, useEffect } from "react";
import axios from "axios";
import SettingIcon from "../assets/Setting.svg";
import DateIcon from "../assets/Calendar.svg";
import Action from "../assets/action.svg";
import { useSidebar } from "../App";

function Header() {
  const [optionsData, setOptionsData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { isSidebarVisible, toggleSidebar } = useSidebar();

  useEffect(() => {
    axios
      .get("https://vo2.ir/api/getEvents")
      .then(response => {
        console.log(response.data);

        const responseData = response.data.data;

        const eventsWithTimeDifference = responseData.map((event, index) => {
          const eventDate = new Date(event.event_date);
          eventDate.setHours(0, 0, 0, 0);

          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const timeDifference = eventDate - today;

          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

          return { ...event, timeDifference, days, nextEventIndex: index + 1 };
        });

        setOptionsData(eventsWithTimeDifference);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex items-start justify-between">
        <h1 className="mb-4">ورزشکاران من</h1>
        <button onClick={toggleSidebar}>
          <img src={Action} alt="" className="md:hidden block" />
        </button>
      </div>
      <div className="flex sm:flex-row-reverse justify-start w-full gap-4">
        <select
          id="events"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
          className="w-full sm:w-auto rtl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 px-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {optionsData.map((event, index) => {
            const date = new Date(event.event_date);
            date.setDate(date.getDate() + 1);

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            const formattedDate = `${year}/${month}/${day}`;

            return (
              <option key={event.id} value={event.event_date}>
                {event.name} - {formattedDate}
              </option>
            );
          })}
        </select>
        <div className="flex gap-4">
          <img src={SettingIcon} alt="" />
          <img src={DateIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
