import backImage from "../../images/step1.png";
import DropDown from "../DropDown/index";

const step1 = ({ next }) => {
  const dropDownContent = [
    { title: "Conference" },
    { title: "Seminar" },
    { title: "Training / Workshop" },
    { title: "Dining / Function Space" },
    { title: "Networking" },
    { title: "Computer Training" },
    { title: "Exams" },
    { title: "Studio" },
    { title: "Team Building" },
    { title: "Hybrid / Virtual" },
    { title: "Other" },
  ];
  return (
    <div className="min-h-screen flex items-center  ">
      <div
        className="absolute right-0"
        style={{
          backgroundImage: `url(${backImage.src})`,
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "60rem",
          height: "100%",
        }}
      ></div>
      <div className="ml-[15vw] mb-[vw] w-[34vw] ">
        <div className="text-white mb-6 flex items-center">
          <div className="w-8 h-8 items-center border border-gray-200 flex justify-center rounded-full mr-2 ">
            1
          </div>
          <div> What type of event are you organising?</div>
        </div>

        <DropDown
          title="Corporate Event"
          width="34vw"
          marginTop="20%"
          content={dropDownContent}
        />

        <button
          onClick={next}
          className="bg-[#007DE6] mt-24 w-fit px-6 text-center rounded-[100px] h-[50px] flex items-center justify-center text-white"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default step1;
