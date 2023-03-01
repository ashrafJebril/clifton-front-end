import backImage from "../../images/Swirl.svg";
import BackButton from "../../Components/BackButton";
import Slider from "../Slider";
const step1 = ({ next, back }) => {
  return (
    <div className="min-h-screen flex items-center w-full justify-center">
      <div className="absolute bottom-0 right-0">
        <img src={backImage.src} className="-mt-8"></img>
      </div>

      <div className="w-3/4">
        <BackButton back={back} />
        <div className="text-white mb-6 flex items-center">
          <div className="w-8 h-8 items-center border border-gray-200 flex justify-center rounded-full mr-2 ">
            2
          </div>
          <div>How many attendees will there be?</div>
        </div>
        <div className="flex w-full gap-x-4">
          <Slider />
        </div>
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
