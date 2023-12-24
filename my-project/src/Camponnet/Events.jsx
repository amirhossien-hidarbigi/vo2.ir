import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryFlag = ({ countryName, style }) => {
  const [flagUrl, setFlagUrl] = useState(null);

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const alternativeName = "IN";

        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${alternativeName.toLowerCase()}`
        );
        const flag = response.data[0]?.flags?.svg;

        setFlagUrl(flag);
      } catch (error) {
        console.error(`Error fetching flag for ${alternativeName}:`, error);

        setFlagUrl(null);
      }
    };

    fetchFlag();
  }, [countryName]);

  return (
    flagUrl && <img src={flagUrl} alt={`${countryName} flag`} style={style} />
  );
};

const Events = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://vo2.ir/api/getEvents");

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 rounded-md  md:flex justify-around mt-10">
      {data && (
        <div className="flex flex-col p-10 gap-1">
          {data.map(event => (
            <div
              key={event.id}
              className="flex items-center p-2 mb-2 gap-8  rounded-md  cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="text-base mr-2">{event.event_date}</div>
              <CountryFlag
                countryName={event.location}
                style={{ width: "25px", height: "25px", borderRadius: "2px" }}
              />
              <div className="text-lg font-bold">{event.name}</div>
            </div>
          ))}
        </div>
      )}
      {data && (
        <div className="flex flex-col p-10 gap-1">
          {data.map(event => (
            <div
              key={event.id}
              className="flex items-center p-2 mb-2 gap-8  rounded-md  cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="text-base mr-2">{event.event_date}</div>
              <CountryFlag
                countryName={event.location}
                style={{ width: "25px", height: "25px", borderRadius: "2px" }}
              />
              <div className="text-lg font-bold">{event.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Events;
