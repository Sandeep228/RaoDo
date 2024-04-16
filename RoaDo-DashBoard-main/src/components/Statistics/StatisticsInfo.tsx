import StatisticsCard from "./StatisticsCard";
import { StatData } from "../../types";

const StatisticsInfo = () => {
  const statData: StatData[] = [
    {
      title: "Revenue",
      value: "$56,945",
      percentage: "+45%",
      comparison: "From 4.6%",
    },
    {
      title: "Users",
      value: "7.68%",
      percentage: "-1.7%",
      comparison: "From 4.6%",
    },
    { 
      title: "New Signups",
      value: "116",
      percentage: "0.00",
      comparison: ""
    },
    {
      title: "Retention",
      value: "12.67%",
      percentage: "+0.6%",
      comparison: "From 4.6%",
    },
  ];

  return (
    <div className="mt-8 flex md:flex-row min-w-[90%] max-w-[90%] md:justify-between flex-col gap-4 md:gap-0">
      {statData.map((data, index) => (
        <StatisticsCard key={index} data={data} />
      ))}
    </div>
  );
};

export default StatisticsInfo;
