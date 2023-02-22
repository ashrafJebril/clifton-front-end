import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
const Journy = () => {
  const componentsArr = [<Step1 />, <Step2 />];
  const [component, setComponent] = useState(0);
  return <div className="min-h-screen">{componentsArr[component]}</div>;
};

export default Journy;
