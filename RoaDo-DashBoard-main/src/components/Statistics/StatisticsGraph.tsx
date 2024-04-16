import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import ReactApexChart from "react-apexcharts";
import threeDots from "../../assets/icons/three-dots.svg";

// chart options
const areaChartOptions = {
  chart: {
    height: 450,
    width: 800,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    strokeDashArray: 0,
  },
};

const StatisticsGraph = () => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
     ...prevState,
      colors: ["#679cf6", "#22c998"],
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: {
          style: {
            colors: Array(12).fill(secondary),
          },
        },
        axisBorder: {
          show: true,
          color: line,
        },
        tickAmount: 7,
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary],
          },
          formatter: (value: number) => {
            if ([0, 100, 200, 300, 400].includes(value)) {
              return value;
            } else {
              return "";
            }
          },
          min: 0,
          max: 400,
          forceNiceScale: true,
          tickAmount: 5,
        },
      },
      grid: {
        strokeDashArray: 0,
        borderColor: line,
      },
      tooltip: {
        theme: "light",
      },
    }));
  }, [primary, secondary, line, theme]);

  const series = [
    {
      name: "Instagram",
      data: [320, 250, 100, 350, 240, 350, 140],
    },
    {
      name: "Facebook",
      data: [140, 290, 380, 250, 260, 250, 340],
    },
  ];

  return (
    <div className="my-10 rounded-xl shadow-md bg-white min-w-[90%] max-w-[90%]">
      <div className="p-4 border-b-2 flex justify-between mr-4">
        <p className="font-semibold">Performance</p>
        <img src={threeDots} alt="" />
      </div>
      <div className="p-5">
        <ReactApexChart
          options={{...options, chart: {...options.chart, type: "area" }, stroke: {...options.stroke, curve: "smooth" } }}
          series={series}
          type="area"
          height={450}
        />
      </div>
    </div>
  );
};

export default StatisticsGraph;
