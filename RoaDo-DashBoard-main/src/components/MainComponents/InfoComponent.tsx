import thunderIcon from "../../assets/icons/thunder.svg";

const InfoComponent = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="py-10 px-2 md:py-5 md:px-6 min-w-[90%] max-w-[90%] min-h-[10vh] bg-[#282828] rounded-xl flex md:flex-row flex-col md:justify-between">
        <div className="md:mb-0 mb-2 flex flex-col gap-3 md:items-start items-center ">
          <p className="font-semibold text-white text-[1.6rem] md:text-2xl">
            Unlock Premium Stats
          </p>
          <p className="text-white text-sm md:max-w-full max-w-[80%] text-center  ">
            Get upto 10TB of storage for a limited time
          </p>
        </div>
        <div className="h-full flex justify-center items-center">
          <button className="px-3 py-2 bg-white flex gap-2 justify-center items-center rounded-full">
            <img src={thunderIcon} alt="" />
            <p className=" text-black font-semibold">Upgrade</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
