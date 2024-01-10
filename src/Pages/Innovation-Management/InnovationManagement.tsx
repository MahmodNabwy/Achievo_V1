import "./InnovationManagement.scss";
import filterIcon from "../Policies&Procedures/Assets/Icons/Login.svg";
import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import { Approved } from "../../Components/InnovationManagement/Approved/Approved";
import { Reviewing } from "../../Components/InnovationManagement/Reviewing/Reviewing";
import { NeedAction } from "../../Components/InnovationManagement/NeedAction/NeedAction";
import { useSelector } from "react-redux";

export const InnovationManagement = () => {
  const current_Li_From_Redux = useSelector(
    (state: any) => state.courses.activeLi
  );
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
      { id: 5, title: "New Innovation" },
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
        <div className="grid sm:grid grid-cols-1 lg:grid-cols-3 gap-5 pb-56 pr-4 pl-4">
          {current_Li_From_Redux === 1 ? (
            <>
              <Approved />
              <Reviewing />
              <NeedAction />
            </>
          ) : current_Li_From_Redux === 2 ? (
            <>
              <Approved />
              <Approved />
              <Approved />
            </>
          ) : current_Li_From_Redux === 3 ? (
            <>
              <Reviewing />
              <Reviewing />
              <Reviewing />
            </>
          ) : (
            <>
              <NeedAction />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
