// import {useGSAP} from "@gsap/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Dashboard(){
  const trackRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const scrollDownTrackRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  const [percentageScrollBar, setPercentageScrollBar] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // const currentScroll = window.scrollY;

      // Total height of the entire document minus the visible screen height
      // const totalScrollableHeight =
      //   document.documentElement.scrollHeight - window.innerHeight;

      // Calculate percentage (avoid division by zero if the page isn't scrollable)
      // const scrollPercentage =
      //   totalScrollableHeight > 0
      //     ? (currentScroll / totalScrollableHeight) * 100
      //     : 0;

      setPercentageScrollBar(
        Math.ceil(
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
            100,
        ),
      );
      console.log();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(percentageScrollBar);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const scroll = scrollDownTrackRef.current;
    if (!scroll) return;

    const tween = gsap.to(scroll, {
      xPercent: -79,
      duration: 50,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -79,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  
  useGSAP(() => {
    const timeline = gsap.timeline({
      repeat: 0,
      delay: 0.2,
    });
    // eyes animation
    const eyesTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });
  
    const oLetter = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
    });
    const cards = gsap.utils.toArray<HTMLElement>(".cards");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: "top top",
        end: () => `+=${cards.length * 500}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // const cards = Array.from(gsap.utils.toArray<HTMLElement>(".cards"));

    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, {
          xPercent: 0,
          opacity: 1,
          rotation: 0,
        });
      } else {
        tl.fromTo(
          card,
          {
            xPercent: 150,
            opacity: 0,
            rotation: 15,
          },
          {
            xPercent: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
          },
        );
      }
      tl.to(card, { duration: 0.5 });
      if (i < cards.length - 1) {
        tl.to(card, {
          xPercent: -150,
          opacity: 0,
          rotation: -15,
          duration: 1,
          ease: "power2.in",
        });
      }
    });

    if (aboutTextRef.current) {
      gsap.fromTo(
        aboutTextRef.current,
        {
          scale: 5,
          opacity: 1,
        },
        {
          scale: 1,
          y: 100,
          opacity: 0,
          scrollTrigger: {
            trigger: aboutTextRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        },
      );
    }

    // intro animation
    timeline
      .from(".circle", {
        y: -3000,
        scale: 1,
        duration: 1,
      })
      .to(".circle", {
        y: -100,
        scale: 1,
      })
      .to(".circle", {
        scale: 300,
        duration: 1,
      })
      // .fromTo(
      //   ".letter",
      //   {
      //     scale: 0.3,
      //     opacity: 0,
      //     y: 50,
      //   },
      //   {
      //     scale: 1,
      //     y: 0,
      //     opacity: 1,
      //     ease: "back.out(3)",
      //     stagger: 0.1,
      //   },
      //   "-=0.2",
      // )
      // .fromTo(
      //   ".line-right-left",
      //   {
      //     scaleX: 0,
      //     transformOrigin: "right center",
      //   },
      //   {
      //     scaleX: 1,
      //     duration: 0.5,
      //     ease: "power2.out",
      //   },
      // )
      // .fromTo(
      //   ".line-left-right",
      //   {
      //     scaleX: 0,
      //     transformOrigin: "left center",
      //   },
      //   {
      //     scaleX: 1,
      //     duration: 0.5,
      //     ease: "power2.out",
      //   },
      //   "<",
      // )
      .fromTo(
        "#title-01",
        {
          scale: 0.3,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "back.out(1)",
          stagger: 0.1,
        },
        "-=0.2",
      )
      .fromTo(
        "#title-02",
        {
          scale: 0.3,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "back.out(1)",
          stagger: 0.1,
        },
        "-=0.2",
      )
      .fromTo(
        "#title-03",
        {
          scale: 0.3,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "back.out(1)",
          stagger: 0.1,
        },
        "-=0.2",
      )
      .fromTo(
        "#scroll_down",
        {
          y: 400,
        },
        {
          y: 50,
          duration: 1,
          ease: "power2.inOut",
        },
        "<=",
      )
      .fromTo(
        "#main_text",
        {
          y: 0,
        },
        {
          y: -50,
          ease: "expo.inOut",
          duration: 0.5,
        },
        "<+0.6",
      );

    oLetter
      .to("#o", {
        rotate: 90,
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to({}, { duration: 2 })
      .to("#o", {
        rotate: 180,
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to({}, { duration: 2 })
      .to("#o", {
        rotate: 270,
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to({}, { duration: 2 })
      .to("#o", {
        rotate: 360,
        duration: 0.2,
        ease: "power2.inOut",
      });

    eyesTl
      .to(".eyes", {
        x: 7,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
      })
      .to({}, { duration: 0.3 })
      .to(".eyes", {
        x: -7,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
      })
      .to({}, { duration: 0.3 })
      .to(".eyes", {
        scaleY: 0.1,
        duration: 0.08,
      })
      .to(".eyes", {
        scaleY: 1,
        duration: 0.08,
      });
  });

  const items = [
    "./img/reactjs.svg",
    "./img/nextjs.svg",
    "./img/tailwind.svg",
    "./img/typescript.svg",
    "./img/wordpress.svg",
    "./img/supabase.svg",
    "./img/laravel.svg",
    "./img/sqlite.svg",
    "./img/gsap.svg",
  ];

  return (
    <div ref={dashboardRef} className="overflow-hidden">
      <div className="fixed h-72 w-2 top-[50%] -translate-[50%] bg-neutral-700 rounded-xl z-[999] overflow-hidden right-2">
        <div
          className={`bg-color02 rounded-xl h-18 w-2 scrollbar`}
          style={{
            transform: `translateY(${percentageScrollBar * 3}%)`,
          }}
        ></div>
      </div>
      <div className="bg-black w-screen h-screen flex flex-col items-center overflow-hidden">
        {/* <div className="w-full h-full bg-black absolute"></div> */}
        <div className="relative max-w-screen-2xl w-screen h-screen relative flex items-center justify-center">
          <div className=" absolute circle bg-white bg-cover items-center justify-center w-10 h-10"></div>
          <div
            className="flex gap-2 z-10 flex-col text-[10rem] leading-35  w-[100%] font-extrabold"
            id="main_text"
          >
            <div
              className="text-center text-neutral-800 [text-shadow:_10px_10px_0_#E8E8E8,_-10px_-10px_0_#E8E8E8,_10px_-10px_0_#E8E8E8,_-10px_10px_0_#E8E8E8,_0_10px_0_#E8E8E8,_0_-10px_0_#E8E8E8,_10px_0_0_#E8E8E8,_-10px_0_0_#E8E8E8]
            "
              id="title-01"
            >
              <h1>A DREAM</h1>
            </div>
            <div
              className="text-center text-neutral-800 [text-shadow:_10px_10px_0_#E8E8E8,_-10px_-10px_0_#E8E8E8,_10px_-10px_0_#E8E8E8,_-10px_10px_0_#E8E8E8,_0_10px_0_#E8E8E8,_0_-10px_0_#E8E8E8,_10px_0_0_#E8E8E8,_-10px_0_0_#E8E8E8]"
              id="title-02"
            >
              <h1>IN PROGRESS</h1>
            </div>
            {/* <div className="text-end text-gray-500  [text-shadow:_10px_10px_0_#E8E8E8,_-10px_-10px_0_#E8E8E8,_10px_-10px_0_#E8E8E8,_-10px_10px_0_#E8E8E8,_0_10px_0_#E8E8E8,_0_-10px_0_#E8E8E8,_10px_0_0_#E8E8E8,_-10px_0_0_#E8E8E8]" id="title-03">
              <h1>HI!</h1>
            </div> */}
          </div>
          <div
            className="z-20 absolute bottom-40 flex gap-20 text-xl w-[30vw] border-2 bg-color02 py-4 px-8 overflow-hidden"
            id="scroll_down"
          >
            <div
              ref={scrollDownTrackRef}
              className="flex w-fit gap-30 bg-color02 jetbrain"
            >
              <div className="slider flex gap-30 shrink-0 w-fit">
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
              </div>
              <div className="flex gap-30 shrink-0 w-fit">
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
                <p className="whitespace-nowrap shrink-0 jetbrain">
                  SCROLL DOWN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-h-[40rem] min-h-fit h-[65vh] w-screen flex justify-center bg-[url(./img/blackBG.jpg)] bg-center bg-cover"
        id="about_me"
      >
        <div className="max-w-screen-2xl p-15 relative gap-8 max-h-[60rem] min-h-fit h-[65vh] w-screen grid grid-cols-3 rounded-2xl">
          <div className="col-span-3 flex justify-center items-center text-white text-7xl">
            ABOUT ME{" "}
          </div>
          {/* <div className="bg-white border-2 p-10 justify-between flex flex-col col-span-2 gap-5 border-gray-800 rounded-2xl">
            <div className="flex flex-col gap-5">
              <div>
                <div className="font-bold text-6xl">Hovianto</div>
                <div className="font-bold text-6xl">Anderrson</div>
              </div>
              <div className="flex items-center text-xl">
                <p>Web Developer</p>
                <DotIcon/>
                <p>Graphic Designer</p>
              </div>
              <div className="montserrat">
              </div>
              <div className="flex font-semibold gap-5 mt-14">
                <div className="px-5 py-2 rounded-full bg-yellow-500">
                  My Portfolio
                </div>
                <div className="px-5 py-2 rounded-full bg-green-500">
                  Resume
                </div>
                <div className="px-5 py-2 rounded-full bg-indigo-500">
                  Contact Me
                </div>
              </div>
            </div>
          </div> */}
          <div className=" flex flex-col items-end justify-end text-right">
            <p className="color01 text-9xl [text-shadow:_10px_10px_0_#E8E8E8,_-10px_-10px_0_#E8E8E8,_10px_-10px_0_#E8E8E8,_-10px_10px_0_#E8E8E8,_0_10px_0_#E8E8E8,_0_-10px_0_#E8E8E8,_10px_0_0_#E8E8E8,_-10px_0_0_#E8E8E8]">
              HOVIANTO
            </p>
            <p className="color02 text-5xl">WEB DEVELOPER</p>
          </div>
          <div
            className="bg-white border-2 border-gray-800 h-[70vh] col-span-1 max-h-[450px] bg-cover bg-center"
            style={{
              backgroundImage: `url("${import.meta.env.BASE_URL}img/photo.png")`,
            }}
          ></div>
          <div className=" flex flex-col items-start justify-end text-left">
            <p className="color01 text-9xl [text-shadow:_10px_10px_0_#E8E8E8,_-10px_-10px_0_#E8E8E8,_10px_-10px_0_#E8E8E8,_-10px_10px_0_#E8E8E8,_0_10px_0_#E8E8E8,_0_-10px_0_#E8E8E8,_10px_0_0_#E8E8E8,_-10px_0_0_#E8E8E8]">
              ANDERSON
            </p>
            <p className="color02 text-5xl">UI/UX DESIGNER</p>
          </div>
          <div className="col-span-3 text-center jetbrain text-white">
            A Programmer and designer based in Indonesia, working at the
            intersection of logic and imagination. I combine structure with
            creativity to build efficient digital experiences where code shapes
            functionality and design shapes emotion. Every project is approached
            as both a problem to solve and a story to tell.
          </div>
        </div>
      </div>
      <div className="w-screen h-fit relative flex justify-center my-8">
        <div className="  max-w-screen-2xl overflow-y-hidden w-full whitespace-nowrap p-8 text-2xl font-bold overflow-x-hidden">
          <div ref={trackRef} className="flex w-fit ">
            <div className="slider gap-30 flex shrink-0 px-30 w-fit">
              {items.map((item) => (
                <img key={item} src={item} className="h-13 filt grayscale" />
              ))}
            </div>
            <div className="flex gap-30 shrink-0 w-fit">
              {items.map((item) => (
                <img key={item} src={item} className="h-13 grayscale" />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute w-full max-w-screen-2xl shrink-0 flex grid-cols-6 h-full">
          <div className="bg-linear-to-r from-white via-white via-15% to-transparent w-full h-full"></div>
          <div className="w-full"></div>
          <div className="w-full"></div>
          <div className="w-full"></div>
          <div className="w-full"></div>
          <div className="bg-linear-to-l from-white via-white via-15% to-transparent w-full h-full"></div>
        </div>
      </div>
      <div className=" min-h-fit pin-section h-screen w-screen flex justify-center">
        <div className="max-w-screen-2xl p-15 items-center flex flex-col h-full rounded-2xl">
          {/* <h1 className="text-9xl text-black mb-10">My Works</h1> */}
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <div className="cards z-999 p-14 rotate-1 flex items-center justify-center w-[100vw] max-w-[70%]">
              <h1 className="text-[10rem] leading-36 text-center [text-shadow:_10px_10px_0_#E8E8E8,_-10px_-10px_0_#E8E8E8,_10px_-10px_0_#E8E8E8,_-10px_10px_0_#E8E8E8,_0_10px_0_#E8E8E8,_0_-10px_0_#E8E8E8,_10px_0_0_#E8E8E8,_-10px_0_0_#E8E8E8]">
                SELECTED <br /> WORKS
              </h1>
              <img
                src="./img/scroll_it.png"
                alt=""
                className="h-24 -rotate-5 absolute "
              />
            </div>
            <div className="absolute cards  gap-5 w-full z-999 p-14 rotate-1 grid grid-cols-12 ">
              <div className="col-span-3 flex justify-end items-end flex-col gap-3">
                <div className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                  TOTAL PROJECTS
                </div>
                <div className="text-6xl text-right color01">3 PROJECTS</div>
                <p className="jetbrain text-right">
                  Develop 3 Company Profile websites with modern, responsive and
                  professional designs.
                </p>
              </div>
              <div
                className="col-span-6 bg-[url(./img/companyProfile/cover.png)] bg-cover bg-center rounded-xl aspect-[4/3]"
                style={{
                  backgroundImage: `url("${import.meta.env.BASE_URL}img/companyProfile/cover.png")`,
                }}
              ></div>
              <div className="col-span-3 ">
                <div className="flex flex-col justify-center">
                  <h1 className="text-8xl color01">COMPANY PROFILE</h1>
                  <a
                    href="/Pin.Portfolio/company_profile"
                    className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm"
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* <div className="w-full h-full bg-white"></div> */}
            </div>
            <div className="absolute cards  gap-5 w-full z-999 p-14 rotate-1 grid grid-cols-12 ">
              <div className="col-span-3 flex justify-end items-end flex-col gap-3">
                <div className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                  TOTAL PROJECTS
                </div>
                <div className="text-6xl text-right color01">3 PROJECTS</div>
                <p className="jetbrain text-right">
                  Develop and deployed 3 Management Systems for business
                  operations and workflow optimization.
                </p>
              </div>
              <div
                className="col-span-6 bg-[url(./img/managementSystem/cover.png)] bg-cover bg-center rounded-xl aspect-[4/3]"
                style={{
                  backgroundImage: `url("${import.meta.env.BASE_URL}img/managementSystem/cover.png")`,
                }}
              ></div>
              <div className="col-span-3 ">
                <div className="flex flex-col justify-center">
                  <h1 className="text-8xl color01">MANAGEMENT SYSTEM</h1>
                  <a
                    href="/Pin.Portfolio/management_system"
                    className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm"
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* <div className="w-full h-full bg-white"></div> */}
            </div>
            {/* <div className="absolute cards  gap-5 w-full z-999 p-14 rotate-1 grid grid-cols-12 ">
              <div className="col-span-3 flex justify-end items-end flex-col gap-3">
                <div className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                  TOTAL PROJECTS
                </div>
                <div className="text-6xl text-right color01">1 PROJECTS</div>
                <p className="jetbrain text-right">
                  Build and implemented 1 ERP System to improve company
                  efficiency, data integration, and operational management.
                </p>
              </div>
              <div className="col-span-6 bg-black rounded-xl aspect-[4/3]"></div>
              <div className="col-span-3 ">
                <div className="flex flex-col justify-center">
                  <h1 className="text-8xl color01">ERP SYSTEM</h1>
                  <button className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                    View More
                  </button>
                </div>
              </div>
            </div> */}
            <div className="absolute cards  gap-5 w-full z-999 p-14 rotate-1 grid grid-cols-12 ">
              <div className="col-span-3 flex justify-end items-end flex-col gap-3">
                <div className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                  TOTAL PROJECTS
                </div>
                <div className="text-6xl text-right color01">1 PROJECTS</div>
                <p className="jetbrain text-right">
                  Developed, deployed, and published a mobile application on
                  both iOS and Android.
                </p>
              </div>
              <div
                className="col-span-6 bg-center bg-cover rounded-xl aspect-[4/3]"
                style={{
                  backgroundImage: `url("${import.meta.env.BASE_URL}img/apps/cover.png")`,
                }}
              ></div>
              <div className="col-span-3 ">
                <div className="flex flex-col justify-center">
                  <h1 className="text-8xl color01">MOBILE APPLICATION</h1>
                  {/* <button className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                    View More
                  </button> */}
                </div>
              </div>
              {/* <div className="w-full h-full bg-white"></div> */}
            </div>
            {/* <div className="absolute cards  gap-5 w-full z-999 p-14 rotate-1 grid grid-cols-12 ">
              <div className="col-span-3 flex justify-end items-end flex-col gap-3">
                <div className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                  TOTAL PROJECTS
                </div>
                <div className="text-6xl text-right color01">2 PROJECTS</div>
                <p className="jetbrain text-right">
                  Created 2 interactive Invitation Links with custommized UI/UX
                  experiences.
                </p>
              </div>
              <div className="col-span-6 bg-black rounded-xl aspect-[4/3]"></div>
              <div className="col-span-3 ">
                <div className="flex flex-col justify-center">
                  <h1 className="text-8xl color01">INVITATION LINKS</h1>
                  <button className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                    View More
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="min-h-fit w-screen flex justify-center">
        <div className="max-w-screen-2xl p-15 flex-col h-full flex items-center rounded-2xl">
          <h1 className="yesteryear text-3xl">Say Hiii....</h1>
          <div className="relative w-fit py-5 px-10 border-2 -rotate-3 mb-14 mt-5">
            <h1 className="text-7xl">CONTACT ME</h1>
            <div className="w-8 h-8 bg-indigo-300 top-0 left-0 -m-4 absolute"></div>
            <div className="w-8 h-8 bg-indigo-300 top-0 right-0 -m-4 absolute"></div>
            <div className="w-8 h-8 bg-indigo-300 bottom-0 left-0 -m-4 absolute"></div>
            <div className="w-8 h-8 bg-indigo-300 bottom-0 right-0 -m-4 absolute"></div>
          </div>
          <div className="bg-orange-200/80 w-[50%] p-10 flex flex-col gap-5 -rotate-[0.4]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              sequi ab fugit quod est dolores! Error reiciendis recusandae
              itaque numquam quisquam ullam reprehenderit? Exercitationem aut
              culpa esse sit recusandae nulla!
            </p>

            <textarea
              className="focus:border-0 focus:outline-none focus:ring-0 focus:border-transparent items-start border-0 w-full short-stack py-5 px-2 resize-none  text-neutral-700"
              placeholder="Send your message..."
            />

            <button className="px-10 rounded-lg py-3 bg-neutral-800 text-white w-fit">
              Send
            </button>
          </div>
          <div className="py-10 w-[25%] flex flex-col items-center gap-2">
            <p className="text-xl">contact me another way!</p>
            <div className="drop-shadow-lg bg-white w-full h-20 rounded-xl flex gap-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-threads"
                viewBox="0 0 16 16"
              >
                <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}