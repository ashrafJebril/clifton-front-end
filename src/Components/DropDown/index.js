import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const DropDown = ({ title, width, marginTop, content }) => {
  console.log(content);
  console.log(width);
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  const handleCloseClick = () => {
    setShowComponent(false);
  };
  const buttonStyle = {
    backgroundColor: "#683F99",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "55px",
    cursor: "pointer",
    fontWeight: 700,
    transition: "background-color 0.3s ease-in-out",
  };

  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = "#8358B6";
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = "#683F99";
  };
  return (
    <div className="w-full w-full overflow-hidden ">
      <div className="relative">
        <div
          onClick={handleClick}
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full h-24 rounded-[100px]  flex items-center px-6 justify-between"
        >
          {title}

          <KeyboardArrowDownIcon style={{ color: "white", fontSize: "40px" }} />
        </div>

        <motion.div
          className={`w-full p-4  rounded-lg flex flex-col  `}
          style={{
            background: "#683F99",
            color: "#AA90C9",
            zIndex: "100",
            position: "fixed",
            width: width,
            bottom: showComponent ? 0 : "-100%",
          }}
          animate={{
            bottom: showComponent ? marginTop : "-100%",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          // whileHover={{ scale: 1.1 }} // add whileHover prop
        >
          <div className="text-white font-[700] text-2xl justify-between flex">
            <div
              style={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "140%",
                letterSpacing: "-0.01em",
                color: "white",
              }}
            >
              {title}
            </div>
            <div className="cursor-pointer" onClick={handleCloseClick}>
              x
            </div>
          </div>
          {content.map((e, i) => {
            return (
              <div
                key={i}
                className="text-2xl"
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "32px",
                  lineHeight: "140%",
                  letterSpacing: "-0.01em",
                  color: "#AA90C9",
                }}
              >
                {e.title}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default DropDown;
