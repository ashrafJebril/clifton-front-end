import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const DropDown = () => {
  const [showComponent, setShowComponent] = useState(true);

  const handleClick = (payload) => {
    console.log(payload);
    setShowComponent(payload);
  };
  const handleClickClose = (payload) => {
    console.log(payload);
    setShowComponent(false);
  };
  return (
    <div className="w-full bg-red-400  w-[30%]  oveflow-hidden ">
      <div className="relative">
        <div
          onClick={() => handleClick(true)}
          className="w-[30%] h-24 ml-64   rounded-[100px] flex items-center justify-between px-6  "
          style={{ background: "#683F99" }}
        >
          <div className="text-5xl text-white font-[700]">Corporate Event</div>

          <KeyboardArrowDownIcon style={{ color: "white", fontSize: "30px" }} />
        </div>
        {showComponent && (
          <div
            className="w-full p-4 absolute rounded-lg flex flex-col gap-y-2"
            style={{ background: "#683F99", zIndex: "100" }}
          >
            <div className="text-white font-[700] text-2xl justify-between flex">
              <div> Corporate Event</div>
              <div
                className="bg-red-400"
                onClick={() => handleClickClose(false)}
              >
                x
              </div>
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Conference
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Seminar
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Training / Workshop
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Dining / Function Space
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Networking
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Computer Training
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Exams
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Studio
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Team Building
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Hybrid / Virtual
            </div>
            <div style={{ color: "#AA90C9" }} className="text-2xl">
              Other
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
