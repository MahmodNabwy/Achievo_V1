import * as React from "react";
import { Progress } from "../../../@/components/ui/progress";

// Define the interface for the props
interface ProgressLineProps {
  value: number;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ value }) => {
  const [progress, setProgress] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[90%]" />;
};
export default ProgressLine;
