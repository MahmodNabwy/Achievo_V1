import "./InnovationManagement.scss";
import filterIcon from "../Policies&Procedures/Assets/Icons/Login.svg";
import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import { Approved } from "../../Components/InnovationManagement/Approved/Approved";

export const InnovationManagement = () => {
  const header = {
    data: [
      {
        id: 1,
        title: "All",
      },
      {
        id: 2,
        title: "Approved",
      },
      {
        id: 3,
        title: "Reviewing",
      },
      {
        id: 4,
        title: "Need Action",
      },
    ],
    icons: [
      {
        src: filterIcon,
        type: 1,
      },
    ],
  };
  return (
    <div>
      <ModuleHeader navItems={header.data} icons={header.icons} />

      <div className="InnovationManagement">
        <div className="grid sm:grid grid-cols-1 lg:grid-cols-4 gap-1 pb-56 pr-4 pl-4">
          <Approved />
        </div>
      </div>
    </div>
  );
};
