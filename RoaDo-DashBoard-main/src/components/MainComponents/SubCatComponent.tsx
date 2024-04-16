import UpArrow from "../../assets/icons/up-arrow.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";
import { DashboardItem, DashboardSubItem } from "../../types";

interface SubCatComponentProps {
  dashboardItem: DashboardItem;
  isExpanded: boolean;
   onToggle: () => void; 
}

const SubCatComponent = ({ dashboardItem, isExpanded, onToggle }: SubCatComponentProps) => {

  const toggleExpanded = () => {
    onToggle();
  };
  return (
    <div>
      <div className="flex gap-6 mt-6 justify-between" onClick={toggleExpanded}>
        <div className="flex gap-6">
          <img src={dashboardItem.icon} alt="" />
          <p className="font-semibold">{dashboardItem.name}</p>
        </div>
        <div className="flex mr-12 justify-center items-center">
        <img src={isExpanded ? UpArrow : DownArrow} alt="" />
        </div>
      </div>
      <div className={`ml-10 mt-2 ${isExpanded ? 'block' : 'hidden'}`}>
        {dashboardItem.isExpanded && dashboardItem.subitems.map((subitem: DashboardSubItem, index) => (
          <p key={index} className="text-sm text-[#9d9fa1] my-2 ml-1">{subitem.name}</p>
        ))}
      </div>
    </div>
  );
};

export default SubCatComponent;
