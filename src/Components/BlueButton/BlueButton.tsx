import "./BlueButton.scss";
type BlueButtonProps = {
  title: string;
};
export const BlueButton = (props: BlueButtonProps) => {
  return (
    <div className="BlueButton">
      <button className="main-class">{props.title}</button>
    </div>
  );
};
