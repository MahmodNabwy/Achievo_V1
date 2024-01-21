import "./Announcements.scss";
import { useSelector } from "react-redux";
import filterIcon from "../Policies&Procedures/Assets/Icons/Login.svg";

import { Loading } from "../../Components/Loading/Loading";
import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import { AllAnnouncements } from "../../Components/Announcements-Cards/AllAnnouncements";
import { UnReadAnnouncements } from "../../Components/Announcements-Cards/UnReadAnnouncements";
import { ReadAnnouncements } from "../../Components/Announcements-Cards/ReadAnnouncements";
export const Announcements = () => {
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
        title: "Unread",
      },
      {
        id: 3,
        title: "Read",
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
    <div className="Announcements">
      <ModuleHeader navItems={header.data} icons={header.icons} />
      <div className="pl-4 pr-4">
        <div className="pr-4 pl-4 search-content">
          <input type="search" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="grid sm:grid grid-cols-1 lg:grid-cols-1 gap-5 pb-56 pr-4 pl-4">
        {current_Li_From_Redux === 1 ? (
          <AllAnnouncements />
        ) : current_Li_From_Redux === 2 ? (
          <UnReadAnnouncements />
        ) : (
          <ReadAnnouncements />
        )}
      </div>
    </div>
  );
};
