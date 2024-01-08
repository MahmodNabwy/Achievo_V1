import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import "./Policies_Procedures.scss";
import filterIcon from "./Assets/Icons/Login.svg";
import { PoliciesProceduresFrame } from "../../Components/PoliciesProceduresFrame/PoliciesProceduresFrame";
export const PoliciesProcedures = () => {
  const header = {
    data: [
      {
        id: 1,
        title: "All",
      },
      {
        id: 2,
        title: "Policies",
      },
      {
        id: 3,
        title: "Procedures",
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
      <div className="Policies_Procedures">
        <div className="grid sm:grid grid-cols-1 lg:grid-cols-4 gap-1 pb-56 pr-4 pl-4">
          <PoliciesProceduresFrame id={1} />
          <PoliciesProceduresFrame id={2} />
          <PoliciesProceduresFrame id={3} />
          <PoliciesProceduresFrame id={4} />
          <PoliciesProceduresFrame id={5} />
        </div>
      </div>
    </div>
  );
};
