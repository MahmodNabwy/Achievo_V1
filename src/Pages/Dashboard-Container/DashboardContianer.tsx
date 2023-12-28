import { Cards } from "../Dashboard-Cards/Cards";
import { Circles } from "../Dashboard-Circles/Circles";

export const DashboardContainer = () => {
  return (
    <div className="p-4">
      <Circles />
      <Cards />
    </div>
  );
};
