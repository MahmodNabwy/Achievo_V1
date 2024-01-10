import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import filterIcon from "../Policies&Procedures/Assets/Icons/Login.svg";
import { useSelector } from "react-redux";
import "./Certificates.scss";
import { Cards } from "../../Components/Certificates/Cards/Cards";
import { Loading } from "../../Components/Loading/Loading";
export const Certificates = () => {
  const current_Li_From_Redux = useSelector(
    (state: any) => state.courses.activeLi
  );
  const header = {
    data: [],
    icons: [],
  };
  return (
    <div className="Certificates">
      <ModuleHeader navItems={header.data} icons={header.icons} />
      <div className="grid sm:grid grid-cols-1 lg:grid-cols-3 gap-5 pb-56 pr-4 pl-4">
        <Cards />
      </div>
    </div>
  );
};
