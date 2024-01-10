import "./ModuleHeader.scss";
import { useState } from "react";
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
  const [filterPopOver, setFilterPopOver] = useState(false);
  const current_Li_From_Redux = useSelector(
    (state: any) => state.courses.activeLi
  );
  const dispatch = useDispatch();

  const change_Li = (currentLi: number) => {
    let activeLi = currentLi;
    //Todo : Make This action on Module Header Slice
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

  const showFilterPopOver = () => {
    setFilterPopOver(!filterPopOver);
  };

  return (
    <div className="ModuleHeader animate__animated animate__fadeIn">
      <div className="col-span-12 w-full row-span-1 animate__animated animate__fadeIn">
        <div className="grid grid-cols-2 xs:grid-col-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          <div className="col-start-1 col-end-3 sm:col-start-1">
            <div className="flex gap-4">
              {props.navItems.map((item) => {
                return (
                  <div
                    className={
                      item.id === current_Li_From_Redux
                        ? "header-item-active transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        : "header-item transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    }
                    onClick={() => change_Li(item.id)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="sm:col-start-2 lg:col-start-3 flex justify-end gap-4"
            style={{ alignItems: "center" }}
          >
            <div className="flex pt-1">
              <div className="lg:mr-12">
                {filterPopOver === true ? (
                  <>
                    <div className="filter-popover animate__animated animate__fadeIn">
                      <div className="flex justify-end">
                        <img
                          src={arrowIcon}
                          alt="arrow"
                          onClick={() => showFilterPopOver()}
                        />
                      </div>

                      <div>
                        <ul>
                          <li>Sort by Date</li>
                          <li>Sort by Name</li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      className="animate__animated animate__fadeIn"
                      src={arrowIcon}
                      alt="arrow"
                      onClick={() => showFilterPopOver()}
                    />
                  </>
                )}
              </div>
              {props.icons.map((item) => {
                return (
                  <div className="lg:mr-12">
                    <img
                      className="animate__animated animate__fadeIn"
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
        </div>
      </div>
    </div>
  );
};
