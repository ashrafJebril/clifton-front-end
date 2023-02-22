const PageMainImage = ({ mainImage, title }) => {
  return (
    <div
      className="w-full p-16"
      style={{
        backgroundImage:
          "url(" + process.env.NEXT_PUBLIC_BASE_URL + mainImage + ")",

        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "500px",
      }}
    >
      <div className="text-white text-3xl"> {title}</div>
    </div>
  );
};

export default PageMainImage;
