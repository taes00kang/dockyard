import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getImage } from "../../../utils";
import { useScrollPosition } from "../../../hooks/useScrollPosition";

export const Section4: React.FC = () => {
  const [traslateValue, setTraslateValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const scrollPosition = useScrollPosition(ref);

  useEffect(() => {
    setTraslateValue(scrollPosition * -1);
  }, [scrollPosition]);

  return (
    <section id="theme-4" ref={ref}>
      <div
        className="flex items-center justify-center flex-col py-[15vw]"
        id="address"
      >
        <div className="heading-theme-4 top">Where to</div>
        <div className="heading-theme-4 bottom">Find us</div>
      </div>
      <div className="px-[5%]">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 flex flex-col">
            <div className="flex-1">
              <div className="text-[5vw] sm:text-[2.5vw] leading-[6vw] sm:leading-[4vw] font-bold">
                A HOP, SKIP & A JUMP AWAY
              </div>
              <p className="py-[2vw] text-[3vw] sm:text-[2vw] leading-[4vw] sm:leading-[2.5vw]">
                Located within a 10 min walk from the Hydro and SEC / just off
                the bustling Finnieston strip we proudly sit within the Yorkhill
                and Kelvingrove District. Leave the car at home.
              </p>
            </div>
            <div className="flex-1">
              <p className="uppercase mt-[10%] mb-[10%] sm:mb-0 text-[3.5vw] leading-[4vw] font-bold">
                95 HAUGH ROAD
                <br />
                FINNIESTON{" "}
                <span className="text-[1vw] leading-[1vw]">(NEARLY)</span>
                <br />
                GLASGOW, G3 8TX
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center sm:justify-end">
            <Link
              href="https://www.google.com/maps/place/The+Dockyard+Social/@55.8649675,-4.293875,17z/data=!3m1!4b1!4m5!3m4!1s0x488845d6e88d7e23:0x690d0e7b3cb4ea5!8m2!3d55.8650574!4d-4.2917713"
              target="_blank"
              className="w-3/4 relative aspect-square border-[3px] border-black shadow-[11px_11px_0_0_#000]"
            >
              <Image
                // src={getImage("home/map.jpeg")}
                src={"/assets/map.jpeg"}
                alt="location map"
                fill
                sizes="(max-width: 767px) 90vw, 34vw"
              />
            </Link>
          </div>
        </div>
        <div className="flex my-[8vw] sm:my-[5vw] text-[1vw] sm:leading-[1.5vw] font-[300]">
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
            transform: `translateX(${traslateValue}px)`,
          }}
        >
          <Image
            // src={getImage("home/arrows-black.svg")}
            src={"/assets/arrows-black.svg"}
            width={300}
            height={1000}
            alt="arrow black"
            className="h-auto mt-[15vw] sm:-left-[100vw] relative w-[400vw] min-w-[350vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
