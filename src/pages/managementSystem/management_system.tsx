import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


export default function ManagementSystem (){
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".cards");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pin-section",
                start:"top top",
                end: () => `+=${cards.length * 500}`,
                scrub:1,
                pin: true,
                anticipatePin:1
            }
        })

        cards.forEach((card, i) => {
            if (i === 0){
                gsap.set(card, {
                    xPercent: 0,
                    opacity:1,
                })
            } else {
                tl.fromTo(card, {
                    xPercent:150,
                    opacity:0
                },{
                    xPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                })
            }
            tl.to(card, {duration: 0.5});
            if(i < cards.length - 1){
                tl.to(card, {
                    xPercent: -150,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.in"
                });
            }
        });
    })



    return (
      <div>
        <section className="w-full h-screen flex flex-col items-center pin-section">
          <div className="max-w-screen-2xl w-full h-full bg-white flex flex-col">
            <div className="relative w-full h-full flex flex-col justify-center items-center">
              <div className="cards z-999 p-14 rotate-1 flex items-center justify-center w-[100vw] max-w-[70%]">
                <h1 className="text-[10rem] leading-36 text-center [text-shadow:_10px_10px_0_#E8E8E8,_-10px_-10px_0_#E8E8E8,_10px_-10px_0_#E8E8E8,_-10px_10px_0_#E8E8E8,_0_10px_0_#E8E8E8,_0_-10px_0_#E8E8E8,_10px_0_0_#E8E8E8,_-10px_0_0_#E8E8E8]">
                  MANAGEMENT <br /> SYSTEM
                </h1>
                <img
                  src="./img/scroll_it.png"
                  alt=""
                  className="h-24 -rotate-5 absolute "
                />
              </div>
              <div className="absolute cards  gap-5 w-full z-999 p-14 items-center grid grid-cols-12 ">
                <div className="col-span-6 bg-[url(./img/managementSystem/cover.png)] bg-cover bg-center rounded-xl aspect-[4/3]"
                style={{
                  backgroundImage: `url("${import.meta.env.BASE_URL}img/managementSystsm/cover.png")`,
                }}></div>
                <div className="col-span-6 flex flex-col gap-4">
                  <div className="w-full ">
                    <div className="flex flex-col justify-center gap-4">
                      <h1 className="text-8xl color01">
                        PROINSIGHT
                      </h1>
                      <a href="https://proinsight.id/" target="_blank" className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                        VIEW FULL PAGES
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start flex-col gap-3 text-justify">
                    <p className="rubik">
                      Proinsight (PT Phygital Kreatif Konsultindo) merupakan
                      agensi strategi kreatif digital yang melayani klien lokal
                      maupun internasional. Proinsight menyediakan layanan
                      pengelolaan media sosial end-to-end, pengembangan
                      identitas brand digital, hingga dokumentasi acara
                      berkualitas tinggi untuk meningkatkan keterlibatan audiens
                      serta brand awareness.
                    </p>
                  </div>
                  <div className="w-full h-20 flex gap-5 grayscale">
                    <img src="./img/nextjs.svg" className="h-10" alt="" />
                    <img src="./img/tailwind.svg" className="h-10" alt="" />
                  </div>
                </div>
                {/* <div className="w-full h-full bg-white"></div> */}
              </div>
              <div className="absolute cards  gap-5 w-full z-999 p-14 items-center grid grid-cols-12 ">
                <div className="col-span-6 bg-[url(./img/managementSystem/capyschool.png)] bg-cover bg-center rounded-xl aspect-[4/3]"
                style={{
                  backgroundImage: `url("${import.meta.env.BASE_URL}img/managementSystem/capyschool.png")`,
                }}></div>
                <div className="col-span-6 flex flex-col gap-4">
                  <div className="w-full ">
                    <div className="flex flex-col justify-center gap-4">
                      <h1 className="text-8xl color01">
                        CAPYSCHOOL
                      </h1>
                      <a href="https://capyschool.sch.id/" target="_blank" className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                        VIEW FULL PAGES
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start flex-col gap-3 text-justify">
                    <p className="rubik">
                      Proinsight (PT Phygital Kreatif Konsultindo) merupakan
                      agensi strategi kreatif digital yang melayani klien lokal
                      maupun internasional. Proinsight menyediakan layanan
                      pengelolaan media sosial end-to-end, pengembangan
                      identitas brand digital, hingga dokumentasi acara
                      berkualitas tinggi untuk meningkatkan keterlibatan audiens
                      serta brand awareness.
                    </p>
                  </div>
                  <div className="w-full h-20 flex gap-5 grayscale">
                    <img src="./img/laravel.svg" className="h-10" alt="" />
                    <img src="./img/reactjs.svg" className="h-10" alt="" />
                    <img src="./img/inertia.png" className="h-10" alt="" />
                    <img src="./img/tailwind.svg" className="h-10" alt="" />
                  </div>
                </div>
                {/* <div className="w-full h-full bg-white"></div> */}
              </div>
              <div className="absolute cards  gap-5 w-full z-999 p-14 items-center grid grid-cols-12 ">
                <div className="col-span-6 bg-[url(./img/managementSystem/deart.png)] bg-cover bg-center rounded-xl aspect-[4/3]"
                style={{
                  backgroundImage: `url("${import.meta.env.BASE_URL}img/managementSystem/deart.png")`,
                }}></div>
                <div className="col-span-6 flex flex-col gap-4">
                  <div className="w-full ">
                    <div className="flex flex-col justify-center gap-4">
                      <h1 className="text-8xl color01">
                        DEART
                      </h1>
                      <a href="https://gtatravels.com/" target="_blank" className="flex jetbrain font-bold px-5 py-2 bg-color02 w-fit rounded-sm">
                        VIEW FULL PAGES
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start flex-col gap-3 text-justify">
                    <p className="rubik">
                      Proinsight (PT Phygital Kreatif Konsultindo) merupakan
                      agensi strategi kreatif digital yang melayani klien lokal
                      maupun internasional. Proinsight menyediakan layanan
                      pengelolaan media sosial end-to-end, pengembangan
                      identitas brand digital, hingga dokumentasi acara
                      berkualitas tinggi untuk meningkatkan keterlibatan audiens
                      serta brand awareness.
                    </p>
                  </div>
                  <div className="w-full h-20 flex gap-5 grayscale">
                    <img src="./img/wordpress.svg" className="h-10" alt="" />
                  </div>
                </div>
                {/* <div className="w-full h-full bg-white"></div> */}
              </div>
             
            </div>
          </div>
        </section>
      </div>
    );
}