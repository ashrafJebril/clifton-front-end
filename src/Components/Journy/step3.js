import backImage from "../../images/step3.png";
import DropDown from "../DropDown/index";
import BackButton from "../BackButton";
const step1 = ({ next, back }) => {
  const dropDownContentContries = [
    { title: "New Zealand" },
    { title: "Hong Kong" },
    { title: "London" },
    { title: "New York" },
    { title: "Singapore" },
    { title: "Global (All)" },
  ];
  const dropDownContentCities = [
    { title: "Adelaide" },
    { title: "Brisbane" },
    { title: "Canverra" },
    { title: "Melbourne" },
    { title: "Perth" },
  ];
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
        <BackButton back={back} />
        <div className="text-white mb-6 flex items-center">
          <div className="w-8 h-8 items-center border border-gray-200 flex justify-center rounded-full mr-2 ">
            3
          </div>
          <div>What type of event are you organising?</div>
        </div>
        <div className="mb-8">
          <div className="text-[#B69BD8] mb-3">Country</div>
          <DropDown
            title="Australia"
            width="30vw"
            marginTop="28.5%"
            content={dropDownContentContries}
          />
        </div>
        <div>
          <div className="text-[#B69BD8] mb-3">City</div>
          <DropDown
            title="Sydney"
            width="30vw"
            marginTop="17.5%"
            content={dropDownContentCities}
          />
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
