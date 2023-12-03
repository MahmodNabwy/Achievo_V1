import * as React from "react";
import { Progress } from "../../../@/components/ui/progress";

type ProgressLineProps = {
  value: number;
};
const ProgressLine = (props: ProgressLineProps) => {
  const [progress, setProgress] = React.useState(props.value);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} />;
};
export default ProgressLine;
