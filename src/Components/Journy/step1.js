import backImage from "../../images/step1.png";
import DropDown from "../DropDown/index";

const step1 = () => {
  return (
    <div className="min-h-screen flex items-center  ">
      {" "}
      <div
        className="absolute right-0 "
        style={{
          backgroundImage: `url(${backImage.src})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "60rem",
          height: "100%",
        }}
      ></div>
      <DropDown />
    </div>
  );
};

export default step1;
