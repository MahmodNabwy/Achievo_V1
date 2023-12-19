import "./ModuleHeader.scss";
import { useSelector, useDispatch } from "react-redux";
import arrowIcon from "./Assets/images/PaperPlus.svg";
import { rectangleFigure, squareFigure } from "../../redux/Slices/CoursesSlice";

type ModuleHeaderProps = {
  navItems: string[];
  icons: string[];
};
export const ModuleHeader = (props: ModuleHeaderProps) => {
  const dispatch = useDispatch();
  const figureType = useSelector((state: any) => state.courses.type);
  const changeFigureType = () => {
    if (figureType === 1) {
      let type = 2;
      dispatch(squareFigure({ type }));
    } else {
      let type = 1;
      dispatch(rectangleFigure({ type }));
    }
  };
  return (
    <div className="ModuleHeader">
      <div className="flex">
        {props.navItems.map((item) => {
          return <div className="header-item-active">{item}</div>;
        })}
      </div>
      <div className="flex pt-1">
        <div className="mr-12">
          <img src={arrowIcon} alt="arrow" onClick={() => changeFigureType()} />
        </div>
        {props.icons.map((item) => {
          return (
            <div className="mr-12">
              <img src={item} alt="icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
