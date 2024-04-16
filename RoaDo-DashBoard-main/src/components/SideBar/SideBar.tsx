import Clonify from "../../assets/Clonify.svg";
import DashboardImage from "../../assets/icons/dashboard.svg";
import messageIcon from "../../assets/icons/message.svg";
import friendsIcon from "../../assets/icons/user.svg";
import appsIcon from "../../assets/icons/apps.svg";
import helpIcon from "../../assets/icons/help.svg";
import fileIcon from "../../assets/icons/file.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import loginIcon from "../../assets/icons/login.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleItemExpansion } from "../../features/expandedItems";
import { DashboardItem } from "../../types";
import DropDowns from "../MainComponents/SubCatComponent";

const SideBar = () => {
  const expandedItems = useSelector((state: any) => state.expandedItems);
  const dispatch = useDispatch();

  const dashboardData: DashboardItem[] = [
    {
      name: "Dashboard",
      subitems: [{ name: "Analytics" }, { name: "Finance" }, { name: "Job Board" }],
      isExpanded: true,
      icon: DashboardImage,
    },
    {
      name: "Messages",
      subitems: [{ name: "Sent" }, { name: "Received" }],
      isExpanded: true,
      icon: messageIcon,
    },
    {
      name: "Friends",
      subitems: [{ name: "All Friends" }, { name: "Request" }, { name: "Received" }],
      isExpanded: true,
      icon: friendsIcon,
    },
    {
      name: "Apps",
      subitems: [{ name: "Clock" }, { name: "Weather" }, { name: "Calendar" }],
      isExpanded: true,
      icon: appsIcon,
    },
  ];

  const pageData: DashboardItem[] = [
    {
      name: "Help Center",
      subitems: [{ name: "About Us" }, { name: "Contact Us" }],
      isExpanded: true,
      icon: helpIcon,
    },
    {
      name: "File Manager",
      subitems: [{ name: "Documents" }, { name: "Images" }, { name: "Videos" }, { name: "Audio" }],
      isExpanded: true,
      icon: fileIcon,
    },
  ];

  return (
    <div className="hidden md:block fixed min-w-[20vw] max-w-[20vw] min-h-[100vh] max-h-[100vh] bg-white shadow-md pl-5">
      <div className="flex justify-start items-center mt-5">
        <img src={Clonify} alt="Clonify logo" className="h-8" />
      </div>
      <div className="w-full pt-5 overflow-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
        <p className="text-sm font-semibold text-[#9d9fa1] tracking-[0.1rem]">
          DASHBOARD
        </p>
        {dashboardData.map((dashboardItem, index) => (
          <DropDowns
            key={index}
            dashboardItem={dashboardItem}
            isExpanded={expandedItems.includes(dashboardItem.name)}
            onToggle={() => dispatch(toggleItemExpansion(dashboardItem.name))}
          />
        ))}
        <p className="text-sm font-semibold text-[#9d9fa1] tracking-[0.1rem] mt-5">
          PAGES
        </p>
        {pageData.map((dashboardItem, index) => (
          <DropDowns
            key={index}
            dashboardItem={dashboardItem}
            isExpanded={expandedItems.includes(dashboardItem.name)}
            onToggle={() => dispatch(toggleItemExpansion(dashboardItem.name))}
          />
        ))}
      </div>
      <div className="absolute py-4 bottom-0 left-0 w-full flex justify-evenly border-t">
        <img src={settingsIcon} alt="" className="h-4" />
        <img src={logoutIcon} alt="" className="h-4" />
        <img src={loginIcon} alt="" className="h-4" />
      </div>
    </div>
  );
};

export default SideBar;
