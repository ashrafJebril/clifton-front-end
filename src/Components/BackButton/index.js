import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const BackButton = ({ back }) => {
  return (
    <div
      onClick={back}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1) " }}
      className="w-fit p-2 rounded-full mb-16 cursor-pointer"
    >
      <ArrowBackIosNewIcon style={{ color: "white" }} />
    </div>
  );
};
export default BackButton;
