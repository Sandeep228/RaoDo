import { StatData } from "../../types";

interface StatisticsCardProps {
  data: StatData;
}

const StatisticsCard = ({ data }: StatisticsCardProps) => {
  const isPercent = data.percentage.endsWith("%");
  let formattedValue;

  if (!isPercent) {
    formattedValue = String(data.value);
  } else {
    formattedValue = data.value;
  }

  const changeColor = () => {
    if (data.percentage.startsWith("-")) {
      return "bg-[#FFE0E3] text-[#DC3545]";
    } else if (data.percentage === "0.00") {
      return "bg-[#F2F4F7] text-[#5F6980]";
    } else {
      return "bg-[#DCFFF5] text-[#20C997]";
    }
  };

  return (
    <div className="p-4 md:min-w-[14vw] md:max-w-[17vw] md:w-full md:min-h-[6vh] bg-white shadow-md rounded-xl flex flex-col">
      <p className="text-sm text-[#5f6980]">{data.title}</p>
      <p className="text-[2rem] text-[#282828] font-semibold">{formattedValue}</p>
      <div className="mt-5 flex items-center gap-2">
        <div
          className={`py-1 px-2 rounded-full w-max ${changeColor()}`}
        >
          <p className={`text-sm font-semibold`}>{data.percentage}</p>
        </div>
        {data.comparison && (
          <p className="font-semibold text-[#9d9fa1] text-sm">
            {data.comparison}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatisticsCard;
