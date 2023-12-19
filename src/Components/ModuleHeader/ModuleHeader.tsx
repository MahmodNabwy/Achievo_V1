import "./ModuleHeader.scss";
import { useSelector, useDispatch } from "react-redux";
import arrowIcon from "./Assets/images/PaperPlus.svg";
import {
  change_Li_Status,
  rectangleFigure,
  squareFigure,
} from "../../redux/Slices/CoursesSlice";

type ModuleHeaderProps = {
  navItems: {
    title: string;
    id: number;
  }[];
  icons: {
    src: string;
    type: number;
  }[];
};
export const ModuleHeader = (props: ModuleHeaderProps) => {
  const current_Li_From_Redux = useSelector(
    (state: any) => state.courses.activeLi
  );
  const dispatch = useDispatch();

  const change_Li = (currentLi: number) => {
    let activeLi = currentLi;
    dispatch(change_Li_Status({ activeLi }));
  };

  const changeFigureType = (currentType: number) => {
    if (currentType === 1) {
      let type = 1;
      dispatch(rectangleFigure({ type }));
    } else {
      let type = 2;
      dispatch(squareFigure({ type }));
    }
  };

  return (
    <div className="ModuleHeader animate__animated animate__fadeIn">
      <div className="flex">
        {props.navItems.map((item) => {
          return (
            <div
              className={
                item.id === current_Li_From_Redux
                  ? "header-item-active"
                  : "header-item"
              }
              onClick={() => change_Li(item.id)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="flex pt-1">
        <div className="mr-12">
          <img src={arrowIcon} alt="arrow" />
        </div>
        {props.icons.map((item) => {
          return (
            <div className="mr-12">
              <img
                src={item.src}
                alt="icon"
                onClick={() =>
                  item.type === 1 || item.type === 2
                    ? changeFigureType(item.type)
                    : null
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
