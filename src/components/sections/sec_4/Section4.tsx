import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

interface Props {}

export const Section4: React.FC<Props> = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > ref.current!.offsetTop) {
        setScrollTop(((window.scrollY - ref.current!.offsetTop) / 10) * -1);
      }
    };
    if (window !== undefined && ref.current) {
      window.addEventListener("scroll", handleScroll);
    }
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="theme-4" ref={ref}>
      <div className="px-[5%]">
        <div className="flex ">
          <div className="flex-1 flex flex-col">
            <div className="flex-1">
              <div className="text-[2.5vw] leading-[4vw] font-bold">
                A HOP, SKIP & A JUMP AWAY
              </div>
              <p className="py-[2vw] text-[2vw] leading-[2.5vw]">
                Located within a 10 min walk from the Hydro and SEC / just off
                the bustling Finnieston strip we proudly sit within the Yorkhill
                and Kelvingrove District. Leave the car at home.
              </p>
            </div>
            <div className="flex-1">
              <p className="uppercase mt-[10%] text-[3.5vw] leading-[4vw] font-bold">
                95 HAUGH ROAD
                <br />
                FINNIESTON{" "}
                <span className="text-[1vw] leading-[1vw]">(NEARLY)</span>
                <br />
                GLASGOW, G3 8TX
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-3/4 relative aspect-square border-[3px] border-black shadow-[11px_11px_0_0_#000]">
              <Image
                src="/assets/map.jpeg"
                alt="location map"
                fill
                sizes="(max-width: 767px) 90vw, 34vw"
              />
            </div>
          </div>
        </div>
        <div className="flex my-[5vw] text-[1vw] leading-[1.42em] font-[300]">
          <div className="flex-1 flex items-center justify-center text-center">
            EXHIBITION CENTRE 0.6mi
            <br />
            PARTICK TRAIN STATION 0.9mi
          </div>
          <div className="flex-1 flex items-center justify-center text-center border-x-2 border-black">
            THE NUMBER 77 BUS
            <br />
            THE NUMBER 38E BUS
          </div>
          <div className="flex-1 flex items-center justify-center text-center">
            WALK FROM FINNIESTON 0.2mi
            <br />
            WALK FROM CITY CENTRE 1.2mi
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          style={{
            transform: `translateX(${scrollTop}%)`,
          }}
        >
          <Image
            src="/assets/arrows-black.svg"
            width={300}
            height={1000}
            alt="arrow black"
            className="h-auto mt-[15vw] relative -left-[150vw] w-[400vw] min-w-[350vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
