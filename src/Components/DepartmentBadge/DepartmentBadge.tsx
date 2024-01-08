import "./DepartmentBadge.scss";
type DepartmentBadgeProps = {
  title: string;
};
export const DepartmentBadge = (props: DepartmentBadgeProps) => {
  return <div className="DepartmentBadge">{props.title}</div>;
};
