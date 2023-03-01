import backImage from "../../images/Swirl.svg";
import BackButton from "../../Components/BackButton";
const step5 = ({ next, back }) => {
  const buttons = [
    {
      title: "Boardroom",
      icon: "",
    },
    {
      title: "Cluster",
      icon: "",
    },
    {
      title: "Theatre",
      icon: "",
    },
    {
      title: "Classroom",
      icon: "",
    },
    {
      title: "Cocktail",
      icon: "",
    },
    {
      title: "U Shape",
      icon: "",
    },
    {
      title: "Banquet",
      icon: "",
    },
    {
      title: "Cabaret",
      icon: "",
    },
  ];
  return (
    <div className="min-h-screen flex items-center w-full justify-center">
      <div className="w-3/4">
        <BackButton back={back} />
        <div className="text-white mb-6 flex items-center">
          <div className="w-8 h-8 items-center border border-gray-200 flex justify-center rounded-full mr-2 ">
            5
          </div>
          <div>What room setup do you prefer?</div>
        </div>
        <div className="flex flex-wrap w-full ">
          {buttons.map((e) => {
            return (
              <div className="p-4  w-1/4 ">
                <div
                  className=" h-48 flex justify-center items-center rounded"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="font-bold">
                    <div className="text-white text-[18px]">{e.title}</div>
                    <div className="text-white text-[18px]">{e.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
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

export default step5;
