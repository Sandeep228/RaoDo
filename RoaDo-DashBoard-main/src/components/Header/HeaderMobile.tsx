import Clonify from "../../assets/Clonify.svg";
import profileIcon from "../../assets/profile.png";
import { IoSearchOutline } from "react-icons/io5";

const HeaderMobile = () => {
  return (
    <div className="w-[90%] h-[15vh] pt-10">
      <div className="flex justify-between">
        <img src={Clonify} alt="" />
        <div className="relative flex items-center ">
          <div className="absolute right-0 bottom-0 h-2 w-2 bg-green-500 rounded-full"></div>
          <img src={profileIcon} alt="" className="h-8" />
        </div>
      </div>
      <div className="min-h-[5vh] mt-8 w-full border-2 rounded-lg flex items-center px-4 ">
          <IoSearchOutline className="" />
          <input
            placeholder="Search..."
            type="text"
            className="w-full outline-none ml-4 text-sm"
          />
        </div>
    </div>
  );
};

export default HeaderMobile;
