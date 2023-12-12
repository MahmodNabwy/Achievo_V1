import "./ContinueButton.scss";
type ContinueButtonProps = {
  name: string;
};
export const ContinueButton = (props: ContinueButtonProps) => {
  return (
    <div className="continue-container">
      <span>{props.name}</span>
    </div>
  );
};
