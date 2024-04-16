import { IoSearchOutline } from "react-icons/io5";
import notificationIcon from "../../assets/icons/notification.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import appIcon from "../../assets/icons/apps.svg";
import profileIcon from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="min-h-[8vh] max-h-[8vh] min-w-[80vw] border-b-2 bg-white flex items-center justify-center px-1">
      <div className="flex justify-between w-[90%]">
        <div className="min-h-[5vh] min-w-[50vw] max-w-[50vw] border-2 rounded-lg flex items-center px-4 ">
          <IoSearchOutline className="" />
          <input
            placeholder="Search..."
            type="text"
            className="w-full outline-none ml-4 text-sm"
          />
        </div>
        <div className="w-max flex gap-7">
          <div className="relative flex items-center min-w-max min-h-max">
            <div className="absolute right-0 top-0 h-2 w-2 bg-red-500 rounded-full"></div>
            <img src={notificationIcon} alt="" />
          </div>
          <div className="flex items-center min-w-max min-h-max">
            <img src={calendarIcon} alt="" />
          </div>
          <div className="flex items-center min-w-max min-h-max">
            <img src={appIcon} alt="" />
          </div>
          <div className="relative flex items-center ">
            <div className="absolute right-0 bottom-0 h-2 w-2 bg-green-500 rounded-full"></div>
            <img src={profileIcon} alt="" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
