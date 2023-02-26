import backImage from "../../images/step3.png";
import DropDown from "../DropDown/index";

const step1 = ({ next }) => {
  return (
    <div
      className="min-h-screen flex  items-center justify-end  "
      style={{
        background: "linear-gradient(270deg, #00001C 0%, #683F99 61.25%)",

        transform: 'matrix(-1, 0, 0, 1, 0, 0)"',
      }}
    >
      <div
        className="absolute left-0 "
        style={{
          backgroundImage: `url(${backImage.src})`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "60rem",
          height: "100%",
        }}
      ></div>
      <div className="mr-[15vw] mb-[vw] w-[30vw] ">
        <div className="text-white mb-6 flex items-center">
          <div className="w-8 h-8 items-center border border-gray-200 flex justify-center rounded-full mr-2 ">
            3
          </div>
          <div>What type of event are you organising?</div>
        </div>
        <div className="mb-8">
          <div className="text-[#B69BD8] mb-3">Country</div>
          <DropDown title="Australia" />
        </div>
        <div>
          <div className="text-[#B69BD8] mb-3">City</div>
          <DropDown title="Sydney" />
        </div>
        <button
          onClick={next}
          className="bg-[#007DE6] mt-20 w-fit w-[159px] text-center rounded-[100px] h-[52px] flex items-center justify-center text-white"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default step1;
