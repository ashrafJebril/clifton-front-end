import Logo from "../../images/Cliftons_Logo_Horizontal_White_RGB.svg";
import Image from "next/image";
import Link from "next/link";
const Menu = ({ closeMenu }) => {
  const menu = [
    {
      title: "Discover Cliftons",
      childs: [
        { title: "Our Story", link: "/about-us/story" },
        { title: "CEO’s Message", link: "/about-us/ceo-message" },
        { title: "ESG Statement", link: "/about-us/esg-statment" },
        { title: "Art Statement", link: "/about-us/art-prize" },
        { title: "Workplace", link: "/about-us/work-place" },
        { title: "Careers", link: "/about-us/careers" },
      ],
    },
    {
      title: "Events",
      childs: [
        { title: "In Venue", link: "/about-us/story" },
        { title: "Hybrid", link: "/about-us/story" },
        { title: "Virtual", link: "/about-us/story" },
        { title: "Spaces", link: "/about-us/story" },
        { title: "Be Safe", link: "/about-us/story" },
      ],
    },
    {
      title: "Locations",
      childs: [
        { title: "Australia", link: "/about-us/story" },
        { title: "New Zealand", link: "/about-us/story" },
        { title: "Hong Kong", link: "/about-us/story" },
        { title: "London", link: "/about-us/story" },
        { title: "New York City", link: "/about-us/story" },
        { title: "Singapore", link: "/about-us/story" },
        { title: "Global (All)", link: "/about-us/story" },
      ],
    },
    {
      title: "Services",
      childs: [
        { title: "Event Management", link: "/about-us/story" },
        { title: "Clifton’s Studio", link: "/about-us/story" },
        { title: "Event Production", link: "/about-us/story" },
        { title: "Examinations", link: "/about-us/story" },
        { title: "Virtual Classroom", link: "/about-us/story" },
        { title: "Cuisine", link: "/about-us/story" },
        { title: "Team Building", link: "/about-us/story" },
      ],
    },
  ];
  return (
    <menu
      className="fixed w-full h-screen bg-red-400 p-6"
      style={{
        background: "#00001C",
        zIndex: "1000",
      }}
    >
      <div className="">
        <div className="flex justify-between items-center">
          <Image
            src={Logo.src}
            alt="Picture of the author"
            width={200}
            height={500}
          />
          <div
            className="text-white cursor-pointer"
            onClick={() => {
              closeMenu(false);
            }}
          >
            X
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-24 ">
        {menu.map((e) => {
          return (
            <div className="text-white">
              <div className="text-2xl font-bold">{e.title}</div>
              <div className="mt-8">
                {e.childs.map((ele) => {
                  console.log(ele.link);
                  return (
                    <Link href={ele.link} onClick={() => closeMenu(false)}>
                      <div
                        className="my-3  text-2xl cursor-pointer"
                        style={{ color: "#7B7B83" }}
                      >
                        {ele.title}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div
          style={{
            position: "absolute",
            width: "1198px",
            height: "1198px",
            left: "-509px",
            top: "353px",
            zIndex: -1,
            background:
              "radial-gradient(50% 50% at 50% 50%, #773ABC 0%, rgba(119, 58, 188, 0) 100%)",
            opacity: 0.2,
          }}
        ></div>
      </div>
    </menu>
  );
};

export default Menu;
