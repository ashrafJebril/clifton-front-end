import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
const Journy = () => {
  const [component, setComponent] = useState(0);
  const back = () => {
    setComponent(component - 1);
  };
  const next = () => {
    if (component === componentsArr.length - 1) {
      setComponent(0);
    } else {
      setComponent(component + 1);
    }
  };
  const componentsArr = [
    <Step1 next={next} back={back} />,
    <Step2 next={next} back={back} />,
    <Step3 next={next} back={back} />,
    <Step4 next={next} back={back} />,
    <Step5 next={next} back={back} />,
  ];
  return <div className="min-h-screen w-full ">{componentsArr[component]}</div>;
};

export default Journy;
