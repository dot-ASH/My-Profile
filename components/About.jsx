import React from "react";
import { Slide } from "react-awesome-reveal";
import { RxDotFilled, RxDot } from "react-icons/rx";
import {
  BsFillCircleFill,
  BsTelephoneFill,
  BsReddit,
  BsFillPhoneFill,
} from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { FaReact, FaGithub, FaDiscord, FaPhoneAlt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { GrReddit } from "react-icons/gr";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import Link from "next/link";

const About = () => {
  const icons = [
    {
      id: 1,
      name: "Phone",
      url: "tel:01963806580",
      placement: "left",
      direction: "up",
      icon: <BsFillPhoneFill className="text-3xl grid-item"></BsFillPhoneFill>,
    },
    {
      id: 2,
      name: "Gmail",
      url: "mailto:nafeesashker63@gmail.com",
      placement: "top",
      direction: "down",
      icon: <MdMail className="text-3xl grid-item"></MdMail>,
    },
    {
      id: 3,
      name: "Github",
      url: "https://github.com/dot-ASH",
      placement: "right",
      direction: "down",
      icon: <FaGithub className="text-3xl grid-item"></FaGithub>,
    },
    {
      id: 4,
      name: "Discord",
      url: "https://discord.com/users/738030761269133343",
      placement: "left",
      direction: "up",
      icon: <FaDiscord className="text-3xl grid-item"></FaDiscord>,
    },
    {
      id: 5,
      name: "Instagram",
      url: "https://instagram.com/sakirashker?igshid=ZDdkNTZiNTM=",
      placement: "bottom",
      direction: "down",
      icon: <RiInstagramFill className="text-3xl grid-item"></RiInstagramFill>,
    },
    {
      id: 6,
      name: "Reddit",
      url: "https://reddit.com/user/dot_ASH/",
      placement: "right",
      direction: "right",
      icon: <GrReddit className="text-3xl grid-item"></GrReddit>,
    },
  ];

  const loading = (i) => {
    const loading = document.getElementById("loadingScreen");
    loading.style.display = "flex";
    setTimeout(() => {
      loading.style.display = "none";
      window.open(icons[i].url, "_blank"); 
    }, 700);
  };

  return (
    <div
      id="about"
      className="flex flex-col rounded-t-[4rem] rounded-b-[1rem] justify-center sm:mt-[1rem]"
    >
      {/* Progress Bar  */}
      <div className="flex gap-[1rem] pl-[1rem] w-[100%] justify-center items-center h-[6rem] text-3xl z-[100]">
        <BsFillCircleFill
          id="c1"
          className="circle-border text-[#ffe5d9] cursor-pointer"
        ></BsFillCircleFill>
        <BsFillCircleFill
          id="c2"
          className="circle-border text-[#f1faee] cursor-pointer"
        ></BsFillCircleFill>
        <BsFillCircleFill
          id="c3"
          className="circle-border text-[#9d8189] cursor-pointer"
        ></BsFillCircleFill>
        <p></p>
      </div>
      <div id="clip" className=" clip-circle"></div>
      <div className="flex flex-col justify-between items-center w-[100%] h-[100%] z-[150]">
        <div className="my-[2.5rem] gap-[1.5rem] flex flex-col justify-between items-center text-color">
          <p className="">~ Student ~</p>
          <b>
            <h1 className="smoothed">Currently Working On</h1>
          </b>
          <h2 className=""> Software Development | UI UX Design</h2>
        </div>
        <div className="flex justify-center w-full h-[60%] ">
          <div className="sm:flex hidden typo absolute left-[0%] w-[33%] ">
            <div>
              <Slide direction="left">
                <p>The eyes, the contents</p>
              </Slide>
              <Slide direction="left">
                <p>Coffee and sunsets</p>
              </Slide>
              <Slide direction="left">
                <p>The walk, the hair</p>
              </Slide>
              <Slide direction="left">
                <p>Sweetens the air</p>
              </Slide>
              <Slide direction="left">
                <p> BW or vivid,</p>
              </Slide>
              <Slide direction="left">
                <p> Films, we love it </p>
              </Slide>
              <Slide direction="left">
                <p> Slumberous nd morning </p>
              </Slide>
              <Slide direction="left">
                <p> Music, keep breathing</p>
              </Slide>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center w-full sm:w-[40%]  h-[100%] text-color">
            <div className="grid grid-section grid-cols-3 h-[60%] sm:ml-[0px] ">
              {icons.map((item, index) => {
                return (
                  <Slide direction={item.direction} key={index}>
                    <Tippy
                      content={item.name}
                      placement={item.placement}
                      theme="bootstrap"
                      arrow={false}
                    >
                      <button onClick={() => loading(index)}>
                        {item.icon}
                      </button>
                    </Tippy>
                  </Slide>
                );
              })}
            </div>
            <h2 className="flex w-max">
              <p className="text-[14px]">Dhaka | Bangladesh</p>
            </h2>
          </div>
          <div className="hidden sm:flex relative h-[100%] ">
            <div className="hidden sm:flex absolute ml-[7rem] mt-[-3rem] gap-[0.7rem] text-[36px] text-[lighter]">
              <div className="flex flex-col gap-[0.7rem]">
                <RxDotFilled></RxDotFilled>
                <RxDotFilled></RxDotFilled>
                <RxDotFilled></RxDotFilled>
              </div>
              <div className="flex flex-col gap-[0.7rem]">
                <RxDotFilled></RxDotFilled>
                <RxDotFilled></RxDotFilled>
                <RxDotFilled></RxDotFilled>
              </div>
              <div className="flex flex-col gap-[0.7rem]">
                <RxDotFilled></RxDotFilled>
                <RxDotFilled></RxDotFilled>
                <RxDotFilled></RxDotFilled>
              </div>
            </div>
            <div className="hidden sm:flex opacity-[0.4] absolute ml-[6rem] mt-[-2rem] gap-[0.7rem] text-[36px] z-[500]">
              <div className="flex flex-col gap-[0.7rem]">
                <RxDot></RxDot>
                <RxDot></RxDot>
                <RxDot></RxDot>
              </div>
              <div className="flex flex-col gap-[0.7rem]">
                <RxDot></RxDot>
                <RxDot></RxDot>
                <RxDot></RxDot>
              </div>
              <div className="flex flex-col gap-[0.7rem]">
                <RxDot></RxDot>
                <RxDot></RxDot>
                <RxDot></RxDot>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[0.8rem] items-center w-full h-[15%] p-[2rem] text-xl text-color">
          <Tippy
            content="NextJs"
            placement="top"
            theme="bootstrap"
            arrow={false}
          >
            <p>
              {" "}
              <TbBrandNextjs></TbBrandNextjs>
            </p>
          </Tippy>
          <Tippy
            content="dotASH"
            placement="top"
            theme="bootstrap"
            arrow={false}
          >
            <img id="prod" src="/dotASH-dark.png" className="w-[24px]" />
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default About;
