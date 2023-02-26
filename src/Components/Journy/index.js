import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const Journy = () => {
  const [component, setComponent] = useState(0);

  const next = () => {
    if (component === componentsArr.length - 1) {
      setComponent(0);
    } else {
      setComponent(component + 1);
    }
  };
  const componentsArr = [
    <Step1 next={next} />,
    <Step2 next={next} />,
    <Step3 next={next} />,
  ];
  return <div className="min-h-screen w-full ">{componentsArr[component]}</div>;
};

export default Journy;
