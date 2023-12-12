import * as React from "react";
import { Progress } from "../../../@/components/ui/progress";

type ProgressLineProps = {
  value: number;
};
const ProgressLine = (props: ProgressLineProps) => {
  return <Progress value={props.value} />;
};
export default ProgressLine;
