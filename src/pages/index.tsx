import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import CTA from "../components/CTA";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  shown: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const chevronVariants = {
  initial: {
    opacity: 0,
    y: -120,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const introBoxVariants = {
  hidden: {
    scale: 0,
  },
  shown: {
    scale: [0, 1.2, 1],
  },
};

const chevronUpVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-250vh",
  },
};

const Home: NextPageWithLayout = () => {
  const [hookedYPosition, setHookedYPosition] = useState(0);

  const sec1_ref = useRef<HTMLElement>(null);
  const chevron_ref = useRef(null);

  const { scrollY } = useScroll({
    target: chevron_ref,
    offset: ["end", "start"],
  });

  useEffect(() => {
    return scrollY.onChange((v) => setHookedYPosition(v));
  }, [scrollY]);

  useEffect(() => {
    console.log(hookedYPosition);
  }, [hookedYPosition]);

  return (
    <div className="block">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section
        ref={sec1_ref}
        id="sec-1"
        className="flex flex-col justify-center items-center px-[5%] py-[24vw] sm:py-[16vw] md:py-0 sm:h-auto overflow-x-hidden"
      >
        <div className="dots-and-info relative w-full h-full pb-[2%] bg-[length:60%] md:bg-[length:40%] bg-[100%_2%] sm:bg-[99%_90%] flex flex-col items-center sm:items-start justify-end ">
          <div className="flex flex-col w-full justify-center pt-[10%] md:h-[45vw]">
            <motion.div
              className="w-full flex item-center justify-center z-[1]"
              variants={introBoxVariants}
              initial="hidden"
              whileInView="shown"
              transition={{ duration: 0.2, ease: "easeIn" }}
              viewport={{ once: true }}
              style={{ translateX: `-${hookedYPosition / 6}vw` }}
            >
              <Image
                alt="intro box"
                src="/assets/text-block-1.svg"
                width={300}
                height={200}
                className="w-[85%] sm:w-[70%] md:w-[50%] h-auto -rotate-[3deg] -mb-[2%] px-[3%] -ml-20 md:-ml-32"
              />
            </motion.div>
            <motion.div
              className="w-full flex item-center justify-center z-[2]"
              variants={introBoxVariants}
              initial="hidden"
              whileInView="shown"
              transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
              viewport={{ once: true }}
              style={{ translateX: `${hookedYPosition / 6}%` }}
            >
              <Image
                alt="intro box"
                src="/assets/text-block-2.svg"
                width={300}
                height={200}
                className="w-[85%] sm:w-[70%] md:w-[50%] h-auto rotate-[3deg] -mr-16 md:-mr-24"
              />
            </motion.div>
            <motion.div
              className="w-full flex item-center justify-center z-[3]"
              variants={introBoxVariants}
              initial="hidden"
              whileInView="shown"
              transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
              viewport={{ once: true }}
              style={{ translateX: `-${hookedYPosition / 6}%` }}
            >
              <Image
                alt="intro box"
                src="/assets/text-block-3.svg"
                width={300}
                height={200}
                className="w-[85%] sm:w-[70%] md:w-[50%] h-auto -rotate-[1deg] -mt-[2%] px-[5%] -ml-16 md:-ml-24"
              />
            </motion.div>
          </div>
          <div className="md:static sm:absolute left-0 bottom-[-15%] sm:mt-0 mt-[15%]">
            <CTA text="free cocktail here" theme="default" />
          </div>
          <motion.div
            ref={chevron_ref}
            variants={chevronVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
            className="absolute-center-x top-auto w-[10%] md:w-[3%] h-auto bottom-[-20%] md:bottom-[5%] pt-6"
          >
            <Image
              alt="chevron down"
              src="/assets/chevron-down.svg"
              width={300}
              height={200}
            />
          </motion.div>
        </div>
      </section>
      <section
        id="sec-2"
        className="relative uppercase block h-auto md:flex justify-center items-center py-[24vw] md:py-[10vw] overflow-hidden text-brand-default-text px-[5%] text-[13vw] md:text-[7vw] leading-[14vw] md:leading-[6vw] font-bold text-center"
      >
        <div className="flex flex-col items-center justify-center z-[1]">
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="shown"
            className="text-[4vw] leading-[14vw] md:leading-[1.42rem] md:text-[1vw] pb-[2vw] z-10"
          >
            WTF IS THE DOCKYARD?
          </motion.p>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="shown"
          >
            THE DOCKYARD IS A
          </motion.p>
          <motion.p
            className="red-stroke"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="shown"
          >
            SOCIAL DINING EXPERIENCE.
          </motion.p>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="shown"
          >
            EAT, DRINK AND HAVE FUN WITH
          </motion.p>
          <motion.p
            className="red-stroke"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="shown"
          >
            YOUR FRIENDS.
          </motion.p>
        </div>

        <motion.div
          id="sec-2-chevron-1"
          variants={chevronUpVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 3.4,
            repeat: Infinity,
            repeatDelay: 2.6,
            ease: "linear",
          }}
          className="absolute aspect-[3/2] w-[40%] left-[-15vw] bottom-[-100vh] h-auto"
        >
          <Image src="/assets/chevron-up.svg" fill alt="chevron up" />
        </motion.div>
        <motion.div
          id="sec-2-chevron-2"
          variants={chevronUpVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear",
          }}
          className="absolute aspect-[3/2] right-0 bottom-[-100vh] h-auto w-[50%]"
        >
          <Image src="/assets/chevron-up.svg" fill alt="chevron up" />
        </motion.div>
        <motion.div
          id="sec-2-chevron-3"
          variants={chevronUpVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 5.2,
            repeat: Infinity,
            repeatDelay: 0.8,
            ease: "linear",
          }}
          className="absolute aspect-[3/2] left-[16vw] bottom-[-100vh] h-auto w-[10%] md:w-[5%] z-[3]"
        >
          <Image src="/assets/chevron-up-mini.svg" fill alt="chevron up" />
        </motion.div>
        <motion.div
          id="sec-2-chevron-4"
          variants={chevronUpVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 3.8,
            repeat: Infinity,
            repeatDelay: 2.2,
            ease: "linear",
          }}
          className="absolute aspect-[3/2] right-[-7vw] bottom-[-100vh] h-auto w-[15%] z-[2]"
        >
          <Image src="/assets/chevron-up-mini.svg" fill alt="chevron up" />
        </motion.div>
        <motion.div
          id="sec-2-chevron-5"
          variants={chevronUpVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "linear",
          }}
          className="absolute aspect-[3/2] right-[25vw] bottom-[-100vh] h-auto w-[15%] z-[3]"
        >
          <Image src="/assets/chevron-up-mini.svg" fill alt="chevron up" />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
