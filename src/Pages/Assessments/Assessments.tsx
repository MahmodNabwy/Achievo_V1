import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";

export const Assessments = () => {
  const header = {
    data: [
      {
        id: 1,
        title: "All",
      },
      {
        id: 2,
        title: "In Progress",
      },
      {
        id: 3,
        title: "Completed",
      },
      {
        id: 4,
        title: "Not Started",
      },
    ],
    icons: [],
  };

  return (
    <div>
      <ModuleHeader navItems={header.data} icons={header.icons} />

      <h3>Assessments</h3>
    </div>
  );
};
