import Logo from "../../images/Cliftons_Logo_Horizontal_White_RGB.svg";
import Image from "next/image";
import Link from "next/link";
const Menu = ({ closeMenu }) => {
  const menu = [
    {
      title: "Discover Cliftons",
      childs: [
        { title: "Our Story", link: "/about-us/story" },
        { title: "CEO’s Message", link: "/about/story" },
        { title: "ESG Statement", link: "/about/story" },
        { title: "Art Statement", link: "/about/story" },
        { title: "Workplace", link: "/about/story" },
        { title: "Careers", link: "/about/story" },
      ],
    },
    {
      title: "Events",
      childs: [
        { title: "In Venue", link: "/about/story" },
        { title: "Hybrid", link: "/about/story" },
        { title: "Virtual", link: "/about/story" },
        { title: "Spaces", link: "/about/story" },
        { title: "Be Safe", link: "/about/story" },
      ],
    },
    {
      title: "Locations",
      childs: [
        { title: "Australia", link: "/about/story" },
        { title: "New Zealand", link: "/about/story" },
        { title: "Hong Kong", link: "/about/story" },
        { title: "London", link: "/about/story" },
        { title: "New York City", link: "/about/story" },
        { title: "Singapore", link: "/about/story" },
        { title: "Global (All)", link: "/about/story" },
      ],
    },
    {
      title: "Services",
      childs: [
        { title: "Event Management", link: "/about/story" },
        { title: "Clifton’s Studio", link: "/about/story" },
        { title: "Event Production", link: "/about/story" },
        { title: "Examinations", link: "/about/story" },
        { title: "Virtual Classroom", link: "/about/story" },
        { title: "Cuisine", link: "/about/story" },
        { title: "Team Building", link: "/about/story" },
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
      <div className="flex justify-around mt-24">
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
      </div>
      <div
        style={{
          position: "absolute",
          width: "1198px",
          height: "1198px",
          left: "-509px",
          top: "353px",

          background:
            " radial-gradient(50% 50% at 50% 50%, #773ABC 0%, rgba(119, 58, 188, 0) 100%)",
          opacity: 0.2,
        }}
      ></div>
    </menu>
  );
};

export default Menu;
