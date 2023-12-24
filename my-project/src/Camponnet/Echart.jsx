import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";

const Echart = () => {
  const [chartData, setChartData] = useState([]);
  const [ctlValue, setCtlValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chartResponse = await axios.get(
          "https://vo2.ir/api/getChartsData"
        );

        if (
          chartResponse.data.status === "success" &&
          chartResponse.data.data.length > 0
        ) {
          setCtlValue(chartResponse.data.data[0].ctl);
          setChartData(chartResponse.data.data);
        } else {
          console.error(
            "Empty chart data received or invalid response format."
          );
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);
  const option = {
    title: {},
    backgroundColor: "",
    grid: {
      left: 10,
      right: 10,
      top: 0,
      bottom: 0,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: chartData.map(item => item.workoutDay),
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        name: "ctl Actual",
        type: "line",
        data: chartData.map(item => item.ctl),
        lineStyle: {
          color: "pink",
          width: 2,
        },
        itemStyle: {
          color: "transparent",
          width: 0,
        },
        areaStyle: {
          color: "rgba(223, 32, 99, 0.833)",
        },
        smooth: true,
        emphasis: {},
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      formatter: params => {
        if (params[0] && params[0].data !== undefined) {
          return `<div style="background-color: rgba(255, 255, 255, 0.8); color:#000; padding: 8px; border-radius: 4px;">
            <div style="font-weight: bold; font-size:20px ">امروز </div>
            <div>CTL ${params[0].data.toFixed(2)}</div>
            </div>`;
        } else {
          return "";
        }
      },
    },
  };
  return (
    <ReactECharts
      option={option}
      style={{ height: "400px", width: "100%", marginTop: "1rem" }}
    />
  );
};

export default Echart;
