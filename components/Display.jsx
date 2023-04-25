import React, { useEffect, useState } from "react";
import { Fade as ReactFade, Zoom as ReactZoom } from "react-reveal";
import { Fade, Slide } from "react-awesome-reveal";
import { ReactCurvedText } from "react-curved-text";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import cf from "../public/cf1.png";
import Tippy from "@tippy.js/react";

const Display = () => {
  const [overlay, setOverlay] = useState({
    animation: "beep infinite 3s linear",
    opacity: 0,
    transform: "scale(1)",
    width: "0rem",
  });
  const [audio, setAudio] = useState(null);
  const [cover, setCover] = useState(0);

  const loading = (i) => {
    const loading = document.getElementById("loadingScreen");
    loading.style.display = "flex";
    setTimeout(() => {
      loading.style.display = "none";
      window.open(links[i].url, "_blank"); //
    }, 700);
  };

  const links = [
    {
      id: 1,
      type: "music",
      title: "Melody's Echo Chamber - I follow you!",
      src: "https://res.cloudinary.com/dhqvucmrt/video/upload/v1676109363/I_Follow_You_y48wxz.mp3",
      url: "https://open.spotify.com/track/3EEzQDCP8jRl2pEt9eDKMO?si=8cbce3458941463b",
    },
    {
      id: 2,
      name: "playlist",
      title: "Crystallized",
      url: "https://open.spotify.com/playlist/5HY0gEw19HMzwsbCvwQxKi?si=x_70KD0zQd2Xg6-9fu5Vnw&utm_source=copy-link",
    },
  ];

  useEffect(() => {
    setAudio(new Audio(links[0].src));
    document.body.addEventListener("click", closeTooltip);

    return function cleanup() {
      window.removeEventListener("click", closeTooltip);
    };
  }, []);

  const start = () => {
    audio.play();
    setOverlay((prevState) => ({
      ...prevState,
      opacity: 1,
      width: "15rem",
      animation: "none",
    }));
  };

  const stop = () => {
    audio.pause();
    setOverlay((prevState) => ({
      ...prevState,
      opacity: 0,
      width: "0rem",
      animation: "beep infinite 3s linear",
      transform: "scale(1.8)",
    }));
    setCover(0);
  };

  const closeTooltip = (event) => {
    const tooltipText = document.querySelector(".tooltiptext");
    if (event.target.id == "customTooltip") {
      tooltipText.style.opacity = 1;
      tooltipText.style.visibility = "visible";
      tooltipText.style.transform = "scale(1)";
    } else {
      tooltipText.style.opacity = 0;
      tooltipText.style.visibility = "hidden";
      tooltipText.style.transform = "scale(0)";
    }
  };

  const overlayHover = () => {
    setOverlay((prevState) => ({
      ...prevState,
      animation: "none",
      transform: "scale(1.8)",
    }));
    setCover(1);
  };

  return (
    <section id="display">
      <div className="home flex justify-between py-[1rem] my-[1rem] sm:mx-[3rem] lg:mx-[4rem] 2xl:mx-[6rem]">
        {/* Left */}
        <div className="flex w-[35%] sm:mt-[4rem] relative left-display">
          <ReactFade left>
            <div className="hidden sm:flex flex-row absolute justify-end dp-02 w-[215px] h-[250px] rounded-[0.3rem] showBorder xl:ml-[2rem] 2xl:ml-[3rem] overflow-hidden ">
              <CldImage
                src={process.env.NEXT_PUBLIC_SECONDARY}
                width={3000}
                height={3000}
                alt="Tired"
                className="cloud-image alt-image"
              ></CldImage>

              <div className="flex absolute year-text-bg justify-center items-center bottom-[0%] w-[100%] h-[15%]">
                <p className="prime-font text-2xl">'23</p>
              </div>
            </div>
          </ReactFade>
          <div className="name block relative mt-[18rem] xl:mt-[20rem] xl:ml-[3rem] z-[1000]">
            <b>
              <p className="hidden sm:block non-prime-font uppercase text-[3rem] 2xl:text-[3vw] text-[#ffe5d9] smoothed disable-select">
                Sakir
              </p>
            </b>
            <b>
              <p className="hidden sm:block non-prime-font text-[3rem] 2xl:text-[4vw] text-[#ffe5d9] smoothed disable-select">
                Ashker
              </p>
            </b>
          </div>
          <ReactFade left>
            <div className="sm:hidden absolute ">
              <p className="relative text-[#ffe5d9] text-3xl quote-font mt-[25rem] ml-[-1rem] z-[40] text-right">
                WHEEZY &nbsp;
                <br />
                OUTTA &nbsp;
                <br />
                HERE
              </p>
            </div>
          </ReactFade>
        </div>
        {/* Middle */}
        {/* extra */}
        <div className="extra-small sm:hidden flex relative justify-center items-center w-[35%]">
          <ReactZoom>
            <div className="flex dp-border justify-center items-center ">
              <div className="flex dp relative justify-center overflow-hidden">
                <div className="absolute left-[3px] z-[1050] cookie-text">
                  <ReactCurvedText
                    width="500"
                    height="300"
                    cx="158"
                    cy="176"
                    rx="141"
                    ry="151"
                    startOffset="44"
                    reversed={true}
                    text="'till the retrograde is done"
                    textProps={{ style: { fontSize: 20 } }}
                    textPathProps={null}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                    className="cookie-text"
                  />
                </div>
                <div className="absolute left-[0%] h-full w-full bg-[]">
                  <CldImage
                    width={1000}
                    height={2000}
                    src={process.env.NEXT_PUBLIC_DP}
                    alt="of Your"
                    className="cloud-dp"
                  />
                </div>
              </div>
            </div>
          </ReactZoom>
        </div>
        {/* small */}
        <div className="s-dp sm:hidden flex relative justify-center items-center w-[35%]">
          <ReactZoom>
            <div className="flex dp-border justify-center items-center ">
              <div className="flex dp relative justify-center overflow-hidden">
                <div className="absolute left-[3px] z-[1050] cookie-text">
                  <ReactCurvedText
                    width="500"
                    height="300"
                    cx="167"
                    cy="180"
                    rx="147"
                    ry="151"
                    startOffset="50"
                    reversed={true}
                    text="'till the retrograde is done"
                    textProps={{ style: { fontSize: 20 } }}
                    textPathProps={null}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                    className="cookie-text"
                  />
                </div>
                <div className="absolute left-[0%] h-full w-full bg-[]">
                  <CldImage
                    width={1000}
                    height={2000}
                    src={process.env.NEXT_PUBLIC_DP}
                    alt="of Your"
                    className="cloud-dp"
                  />
                </div>
              </div>
            </div>
          </ReactZoom>
        </div>
        {/* medium */}
        <div className="m-dp hidden sm:flex relative justify-center items-center w-[35%]">
          <ReactZoom>
            <div className="flex dp-border justify-center items-center ">
              <div className="flex dp relative justify-center overflow-hidden">
                <div className="absolute left-[3px] z-[1050] cookie-text">
                  <ReactCurvedText
                    width="500"
                    height="300"
                    cx="182"
                    cy="180"
                    rx="155"
                    ry="151"
                    startOffset="57"
                    reversed={true}
                    text="'till the retrograde is done"
                    textProps={{ style: { fontSize: 20 } }}
                    textPathProps={null}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                    className="cookie-text"
                  />
                </div>
                <div className="absolute left-[0%] h-full w-full bg-[]">
                  <CldImage
                    width={1000}
                    height={2000}
                    src={process.env.NEXT_PUBLIC_DP}
                    alt="of Your"
                    className="cloud-dp"
                  />
                </div>
              </div>
            </div>
          </ReactZoom>
        </div>
        {/* Right */}

        <div className="overlay-menu">
          <div
            id="play-music"
            onMouseOver={overlayHover}
            style={{
              animation: overlay.animation,
              transform: overlay.transform,
            }}
          >
            <button
              className="start"
              onClick={start}
              style={{ opacity: cover }}
            />
          </div>
          <div
            className="overlay-context"
            style={{ width: overlay.width, opacity: overlay.opacity }}
          >
            <div className="overlay-context-text">
            <button onClick={() => loading(0)}>
                <p> &nbsp; {links[0].title} </p>
              </button>
            </div>
            <Tippy
            content="Stop"
            placement="top"
            theme="bootstrap"
            arrow={false}
            offset="0,7"
            >
            <button className="stop" onClick={stop} />
            </Tippy>
            <Tippy
            content={links[1].title}
            placement="top"
            theme="bootstrap"
            arrow={false}
            >
               <button onClick={() => loading(1)} className="spotii"/>
            </Tippy>
           
          </div>
        </div>
        <div className="flex relative items-center  w-[35%] dp-container right-display">
          <ReactFade right>
            <div className="sm:hidden absolute ml-[1rem]">
              <p className="relative text-[#ffe5d9] text-3xl font-[Cousine] ml-[1rem] mt-[-15rem] z-[40]">
                YES
                <br />
                INDEED
              </p>
              <p className="text-3xl font-[Cousine] outline-text text-[white] ml-[4rem] mt-[-1rem] z-[20]">
                YES
                <br />
                &nbsp;INDEED
              </p>
            </div>
          </ReactFade>
          <ReactFade right>
            <div className="hidden sm:flex absolute dp-01 left-[45%] w-[270px] rounded-[3rem] showBorder overflow-hidden">
              <CldImage
                src={process.env.NEXT_PUBLIC_PRIMARY}
                width="5000"
                height="5000"
                className="hover:scale-110 duration-500 ease-out"
                alt="Silly Shit"
              ></CldImage>
              {/* </Zoom> */}
            </div>
          </ReactFade>
        </div>
      </div>
      <div className="absolute pt-[22rem] small-show sm:hidden gap-[2rem]">
        <Slide direction="left" duration={1500}>
          <div className=" pl-[2rem] pb-[2rem] quote-font text-[#bfaca4]">
            The eyes, the contents <br />
            Coffee and sunsets <br /> The walk, the hair <br />
            Sweetens the air
          </div>
        </Slide>
        <Slide direction="right" delay={200} duration={1500}>
          <div className="pr-[2rem] pt-[1rem] text-right quote-font text-[#bfaca4] z-[500]">
            BW or vivid <br />
            Films, we love it <br /> Slumberous nd morning
            <br /> Music,keep breathing
          </div>
        </Slide>
        <div className="name absolute z-[1000] mt-[-3rem]">
          <b>
            <p className="non-prime-font uppercase sm:text-[4vw] text-[#ffe5d9] smoothed disable-select">
              Sakir
            </p>
          </b>
          <b>
            <p className="non-prime-font sm:text-[5vw] text-[#ffe5d9] smoothed disable-select">
              Ashker
            </p>
          </b>
        </div>
        <Image src={cf} className="cf" alt="cool right?" />
        <Fade duration={1500}>
          <div className="override-line">
            <div className="flex absolute bg-[black] w-[200px] dp-small top-[15%] right-[0%] overflow-hidden opacity-[1]">
              <CldImage
                src={process.env.NEXT_PUBLIC_PRIMARY}
                width="5000"
                height="5000"
                alt="of Your"
                className="hover:scale-110 duration-500 ease-out z-[300]"
              ></CldImage>
            </div>
          </div>
        </Fade>
        <Fade duration={1500}>
          <div className="flex absolute dp-02 w-[250px] h-[270px] rounded-[0.3rem] overflow-hidden opacity-[0.7] bottom-[6%] left-[4em] z-[1000]">
            <CldImage
              src={process.env.NEXT_PUBLIC_SECONDARY}
              width={3000}
              height={3000}
              alt="Silly Shitt"
              className="cloud-image absolute"
            ></CldImage>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Display;
