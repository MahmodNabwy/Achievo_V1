import "./ModuleHeader.scss";
type ModuleHeaderProps = {
  navItems: string[];
  icons: string[];
};
export const ModuleHeader = (props: ModuleHeaderProps) => {
  return (
    <div className="ModuleHeader">
      <div className="flex">
        {props.navItems.map((item) => {
          return <div className="header-item-active">{item}</div>;
        })}
      </div>
      <div className="flex pt-1">
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
