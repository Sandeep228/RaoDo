import "./App.css";
import Header from "./components/Header/Header";
import HeaderMobile from "./components/Header/HeaderMobile";
import SideBar from "./components/SideBar/SideBar.tsx";
import UpgradeInfo from "./components/MainComponents/InfoComponent.tsx";
import StatInfo from "./components/Statistics/StatisticsInfo.tsx";
import Graph from "./components/Statistics/StatisticsGraph.tsx";
import TableComponent from "./components/MainComponents/TableComponent.tsx";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="min-w-[100vw] max-w-[100vw] min-h-[100vh] bg-white md:bg-[#f2f4f7] flex overflow-x-hidden">
        <SideBar />
        <div className="hidden md:block min-w-[20vw] max-w-[20vw] min-h-[100vh] max-h-[100vh] bg-white"></div>
        <div className="md:max-w-[80vw] overflow-x-hidden ">
          <div className="md:hidden w-full flex justify-center">
            <HeaderMobile />
          </div>
          <div className="hidden md:block">
            <Header />
          </div>
          <UpgradeInfo />
          <div className="flex flex-col items-center overflow-y-auto overflow-x-hidden">
            <StatInfo />
            <Graph />
            {/* <div className="overflow-x-hidden"> */}
            <TableComponent />
            {/* </div> */}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
