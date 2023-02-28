import backImage from "../../images/Swirl.svg";
import BackButton from "../../Components/BackButton";
const step1 = ({ next, back }) => {
  return (
    <div className="min-h-screen flex items-center w-full justify-center">
      <div className="absolute bottom-0 right-0">
        <img src={backImage.src} className="-mt-8"></img>
      </div>

      <div className="w-3/4">
        <BackButton back={back} />
        <div className="flex w-full gap-x-4">
          <div
            className="w-1/4 h-48 flex items-center rounded"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="absolute ml-6 font-bold">
              <div className="text-white text-[18px]">Small group of</div>
              <div className="text-white text-[55px]">1-50</div>
            </div>
          </div>
          <div
            className="w-1/4 h-48 flex items-center rounded"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="absolute  ml-6 font-bold">
              <div className="text-white text-[18px]">Medium group of</div>
              <div className="text-white text-[55px]">50-100</div>
            </div>
          </div>
          <div
            className="w-1/4 h-48 flex items-center rounded"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="absolute   ml-6 font-bold">
              <div className="text-white text-[18px]">Large crowd of</div>
              <div className="text-white text-[55px]">100+</div>
            </div>
          </div>
          <div
            className="w-1/4 h-48 flex items-center rounded"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="absolute   ml-6 font-bold">
              <div className="text-white text-[18px]">Other (enter number)</div>
              <div className="text-white text-[55px] ">
                <input
                  className="w-full"
                  type="text"
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    caretColor: "white",
                  }}
                />
              </div>
            </div>
          </div>
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
