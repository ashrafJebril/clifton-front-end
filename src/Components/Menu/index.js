import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import Logo from "../../images/Cliftons_Logo_Horizontal_White_RGB.svg";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useEffect } from "react";
import http from "../../http/index";
const Menu = ({ posts }) => {
  const [showSubMenu, setShowSubMenu] = useState(-1);
  useEffect(() => {
    return () => {};
  }, []);

  const links = [
    {
      title: "ABOUT",
      link: "/",
      subLinks: [
        {
          title: "Our story",
          link: "/about-us/story",
        },
        {
          title: "Careers",
          link: "/about-us/careers",
        },
        {
          title: "ESG statment",
          link: "",
          sublinks: [
            {
              title: "Enviroument Goals",
              link: "",
            },
            {
              title: "Social Goals",
              link: "",
            },
            {
              title: "Governace Goals",
              link: "",
            },
          ],
        },
        {
          title: "Art Prize",
          link: "/about-us/art-prize",
        },
        {
          title: "CEO'S Messages",
          link: "",
        },
      ],
    },

    {
      title: "LOCATIONS",
      link: "",
      subLinks: [
        {
          title: "AUSTRALIA",
          link: "",
          sublinks: [
            {
              title: "Brsibane",
              link: "",
            },
            {
              title: "Social Goals",
              link: "",
            },
            {
              title: "Governace Goals",
              link: "",
            },
          ],
        },
      ],
    },
    {
      title: "EVENTS",
      link: "",
      subLinks: [
        {
          title: "AUSTRALIA",
          link: "",
          sublinks: [
            {
              title: "Brsibane",
              link: "",
            },
            {
              title: "Social Goals",
              link: "",
            },
            {
              title: "Governace Goals",
              link: "",
            },
          ],
        },
      ],
    },
    {
      title: "SERVICES",
      link: "",
      subLinks: [
        {
          title: "AUSTRALIA",
          link: "",
          sublinks: [
            {
              title: "Brsibane",
              link: "",
            },
            {
              title: "Social Goals",
              link: "",
            },
            {
              title: "Governace Goals",
              link: "",
            },
          ],
        },
      ],
    },

    {
      title: "RESOURCES",
      link: "",
    },
    {
      title: "WORKPLACE",
      link: "",
    },
    {
      title: "BUILDING ACTIVIATION",
      link: "",
    },
    {
      title: "CONTACT",
      link: "",
    },
  ];
  return (
    <div className="flex justify-between p-6 w-full  absolute z-10 ">
      <div className="flex gap-x-8">
        <Image src={Logo} alt="My Image" width={200} height={41} />
        <button className="text-white">Find a venue</button>
        <button className="text-white">Event management</button>
        {/* {links.map((main, index) => {
        return (
          <div key={index}>
            <Link href={main.link}>
              <div
                className="cursor-pointer "
                onMouseLeave={() => setShowSubMenu(-1)}
                onMouseEnter={() => setShowSubMenu(index)}
              >
                {main.title}
              </div>
            </Link>
            <motion.div
              initial="hidden"
              animate="show"
              onMouseEnter={() => setShowSubMenu(index)}
              onMouseLeave={() => setShowSubMenu(-1)}
              className="absolute cursor-pointer shadow-lg bg-white w-64 px-2 "
            >
              {showSubMenu === index
                ? main.subLinks
                  ? main.subLinks.map((sublink, i) => {
                      return (
                        <Link href={sublink.link}>
                          <div
                            key={i}
                            className={
                              showSubMenu === index
                                ? "sub-menu-show"
                                : "sub-menu-hide"
                            }
                          >
                            {sublink.title}
                          </div>
                        </Link>
                      );
                    })
                  : ""
                : ""}
            </motion.div>
          </div>
        );
      })} */}
      </div>
      <div>
        <div className="flex items-center gap-x-4">
          <button className="text-black bg-white rounded-[100px] h-10 px-5  flex items-center flex font-semibold">
            Send enquiry
          </button>
          <MenuIcon style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
