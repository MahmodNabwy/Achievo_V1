import "./VersionButton.scss";
type VersionButtonProps = {
  value: number;
};
export const VersionButton = (props: VersionButtonProps) => {
  return (
    <div className="version-class">
      <button className="main-class">{props.value}</button>
    </div>
  );
};
