import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import CTA from "../components/CTA";
import { useInView } from "../hooks/useInView";

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

  const chevron_ref = useRef(null);

  const { scrollY } = useScroll({
    target: chevron_ref,
    offset: ["end", "start"],
  });

  const { inViewId } = useInView();

  useEffect(() => {
    document.body.classList.replace(
      document.body.className,
      `theme-${inViewId}`
    );
  }, [inViewId]);

  useEffect(() => {
    return scrollY.onChange((v) => setHookedYPosition(v));
  }, [scrollY]);

  return (
    <div className="block">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section id="sec-1">
        {/* Sec 1-1 */}
        <div className="flex flex-col justify-center items-center px-[5%] py-[24vw] sm:py-[16vw] md:py-0 sm:h-auto overflow-x-hidden">
          <div className="dots-and-info relative w-full h-full pb-[2%] bg-[length:60%] md:bg-[length:40%] bg-[100%_2%] sm:bg-[99%_90%] flex flex-col items-center sm:items-start justify-end ">
            <div className="flex flex-col w-full justify-center pt-[10%] md:h-[45vw]">
              <motion.div
                className="w-full flex item-center justify-center z-[1]"
                variants={introBoxVariants}
                initial="hidden"
                whileInView="shown"
                transition={{ duration: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
                style={{ translateX: `-${hookedYPosition / 6}%` }}
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
        </div>
        {/* Sec 1-2 */}
        <div className="blur-top-bottom relative uppercase block h-auto md:flex justify-center items-center py-[24vw] md:py-[10vw] overflow-hidden text-brand-default-text px-[5%] text-[13vw] md:text-[7vw] leading-[14vw] md:leading-[6vw] font-bold text-center">
          <div className="flex flex-col items-center justify-center z-[1]">
            <motion.p
              variants={fadeInVariants}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true }}
              className="text-[4vw] leading-[14vw] md:leading-[1.42rem] md:text-[1vw] pb-[2vw]"
            >
              WTF IS THE DOCKYARD?
            </motion.p>
            <motion.p
              variants={fadeInVariants}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true }}
            >
              THE DOCKYARD IS A
            </motion.p>
            <motion.p
              className="red-stroke"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true }}
            >
              SOCIAL DINING EXPERIENCE.
            </motion.p>
            <motion.p
              variants={fadeInVariants}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true }}
            >
              EAT, DRINK AND HAVE FUN WITH
            </motion.p>
            <motion.p
              className="red-stroke"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true }}
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
            <Image
              src="/assets/chevron-up.svg"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="chevron up"
            />
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
            <Image
              src="/assets/chevron-up.svg"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="chevron up"
            />
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
            <Image
              src="/assets/chevron-up-mini.svg"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="chevron up"
            />
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
            <Image
              src="/assets/chevron-up-mini.svg"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="chevron up"
            />
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
            <Image
              src="/assets/chevron-up-mini.svg"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="chevron up"
            />
          </motion.div>
        </div>
      </section>
      <section id="sec-2">
        {/* Sec-2-1 */}
        <div className="pb-[5vw]">
          <div className="flex w-full item-center px-[5%] text-brand-purple-text ">
            <div className="w-[65%] flex flex-col gap-[1vw] justify-center">
              <motion.p
                className="text-[1.5vw] font-bold"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="shown"
                viewport={{ once: true }}
              >
                IT'S MORE THAN THAT THOUGH
              </motion.p>
              <div className="relative w-full flex justify-between">
                <Image
                  className="absolute block h-auto -left-[5vw] w-[6vw] aspect-[3/11]"
                  src="/assets/blue-dots.svg"
                  alt="blue dots"
                  width={100}
                  height={500}
                  style={{
                    objectFit: "cover",
                    backgroundRepeat: "no-repeat",
                    objectPosition: "16% 0px",
                  }}
                />
                <div className="mt-[1.5vw] px-[5vw] text-[1.3vw] font-[400] leading-[1.42rem] flex flex-col">
                  <motion.p
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="shown"
                    viewport={{ once: true }}
                  >
                    We are The Dockyard Social.
                    <br />
                    <br />
                    We’ve switched from popups to permanent. Now we’re bringing
                    together the best street food traders Scotland has to offer.
                    A true taste of Global comfort food. Throw in some
                    watermelon daiquiris, a dollop of old school tunes, with a
                    pinch of likeminded people, and dance ‘til your paws hurt!
                    <br />
                    <br />
                    Everyone is welcome from families and foodies, to dates and
                    dogs!
                    <br />
                    <br />
                    Now opening weekly – 8 food traders | Multiple themed bars |
                    Resident DJs
                  </motion.p>
                  <div className="w-full mt-[2.5vw]">
                    <CTA theme="purple" text="free cocktail here" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <motion.div
                className="relative w-full flex justify-end items-center"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="shown"
                viewport={{ once: true }}
              >
                <Image
                  src="/assets/laughing-lady.jpeg"
                  alt="laughing lady"
                  width={300}
                  height={300}
                  className="h-auto w-full aspect-square border-[5px] border-brand-purple-text shadow-brand-purple-text shadow-[11px_11px_0_0]"
                />
                <div className="absolute uppercase left-0 top-0 px-[1vw] py-[0.3vw] bg-brand-purple-text text-brand-purple-bg text-[2.5vw] leading-[3vw] font-bold -translate-x-[34px] -rotate-[11deg]">
                  just look how <br /> happy she is!**
                </div>
              </motion.div>
            </div>
          </div>
          {/* Sec-2-2 */}
          <div className="bg-blue-dots w-full flex flex-col mt-[13vw] pt-[5vw] pb-[13vw]  ">
            <div className="pics-top relative z-[1] w-full flex items-center justify-between">
              <div className="pics-container translate-x-[82px] translate-y-[26px] -rotate-[14deg] shadow-brand-purple-text shadow-[11px_11px_0_0]">
                <Image
                  src="/assets/food-1-1.jpeg"
                  alt="food image 1-1"
                  width={300}
                  height={300}
                  className="h-auto z-[3] relative w-full hover:opacity-0 duration-300 ease-in"
                  unoptimized={true}
                />
                <Image
                  src="/assets/food-1-2.jpeg"
                  alt="food image 1-2"
                  width={300}
                  height={300}
                  className="h-auto absolute top-0 left-0 w-full duration-300 ease-in"
                />
              </div>
              <div className="pics-container -translate-x-[43px] -translate-y-[57px] -rotate-[6deg] shadow-brand-purple-text shadow-[11px_11px_0_0]">
                <Image
                  src="/assets/food-2-1.jpeg"
                  alt="food image 2-1"
                  width={300}
                  height={300}
                  className="h-auto z-[3] relative w-full hover:opacity-0 duration-300 ease-in"
                />
                <Image
                  src="/assets/food-2-2.jpeg"
                  alt="food image 2-2"
                  width={300}
                  height={300}
                  className="h-auto absolute top-0 left-0 w-full duration-300 ease-in"
                />
              </div>
              <div className="pics-container -translate-x-[167px] rotate-[9deg] shadow-brand-purple-text shadow-[11px_11px_0_0]">
                <Image
                  src="/assets/food-3-1.jpeg"
                  alt="food image 3-1"
                  width={300}
                  height={300}
                  className="h-auto z-[3] relative w-full hover:opacity-0 duration-300 ease-in"
                />
                <Image
                  src="/assets/food-3-2.jpeg"
                  alt="food image 3-2"
                  width={300}
                  height={300}
                  className="h-auto absolute top-0 left-0 w-full duration-300 ease-in"
                />
              </div>
            </div>
            <div className="pics-bottom relative z-[4] w-full flex items-center justify-end">
              <div className="pics-container -translate-x-[214px] -translate-y-[124px] rotate-[6deg] shadow-brand-purple-text shadow-[11px_11px_0_0]">
                <Image
                  src="/assets/food-4-1.jpeg"
                  alt="food image 4-1"
                  width={300}
                  height={300}
                  className="h-auto z-[3] relative w-full hover:opacity-0 duration-300 ease-in"
                />
                <Image
                  src="/assets/food-4-2.jpeg"
                  alt="food image 4-2"
                  width={300}
                  height={300}
                  className="h-auto absolute top-0 left-0 w-full duration-300 ease-in"
                />
              </div>
              <div className="pics-container -translate-x-[143px] -translate-y-[95px] rotate-[11deg] shadow-brand-purple-text shadow-[11px_11px_0_0]">
                <Image
                  src="/assets/food-5-1.jpeg"
                  alt="food image 5-1"
                  width={300}
                  height={300}
                  className="h-auto z-[3] relative w-full hover:opacity-0 duration-300 ease-in"
                />
                <Image
                  src="/assets/food-5-2.jpeg"
                  alt="food image 5-2"
                  width={300}
                  height={300}
                  className="h-auto absolute top-0 left-0 w-full duration-300 ease-in"
                />
              </div>
              <div className="pics-container -translate-x-[68px] -translate-y-[136px] -rotate-[6deg] shadow-brand-purple-text shadow-[11px_11px_0_0]">
                <Image
                  src="/assets/food-6-1.jpeg"
                  alt="food image 6-1"
                  width={300}
                  height={300}
                  className="h-auto z-[3] relative w-full hover:opacity-0 duration-300 ease-in"
                />
                <Image
                  src="/assets/food-6-2.jpeg"
                  alt="food image 6-2"
                  width={300}
                  height={300}
                  className="h-auto absolute top-0 left-0 w-full duration-300 ease-in"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <Image
              src="/assets/stripes-light.svg"
              width={1000}
              height={100}
              alt="light red stripe line"
              className="w-[200vw] min-w-[500vw]"
            />
          </div>
        </div>
      </section>
      <section id="sec-3">
        <div className="w-full pt-[13vw] pb-[8vw] px-[5%]">
          <div className="w-full flex flex-col items-center justify-center mb-[5vw]">
            <div className="sec3-heading top">WHAT'S COOKIN</div>
            <div className="sec3-heading bottom">GOOD LOOKIN?</div>
          </div>

          <p className="leading-[2vw] text-[1.5vw] tracking-wide pb-[5vw]">
            First time at the Dockyard Social? Here’s what you need to know...
            <br />
            Our normal trading hours
            <br />
            <br />
            Friday 5pm-11pm (Food Traders close at 9.30pm approx)
            <br />
            <br />
            Saturday 12pm-11pm (Food Traders close at 9.30pm approx)
            <br />
            <br />
            Sunday 12pm-8pm (Food Traders close at 7pm approx)
            <br />
            <br />
            <br />
            Now for the fun stuff!
            <br />
            <br />
            We’re the slickest spot in G-Town for real good Street Food,
            everything from Terrific Thai from Noi’s Cafe to Authentic Greek
            Gyros from the Gyro King.
            <br />
            <br />
            We don’t forget the classics too... from hand-stretched Neapolitan
            Pizza- shout out PizzaBGoode- to loaded Fries from our in-house fry
            experts at Abandon Chips.
            <br />
            <br />
            Choose from one of our exciting Beers, Cocktails, Soft Drinks or
            Mocktails from our 3 in-house bars and you’re sure to have a night
            to remember.
            <br />
            <br />
            Did we mention we’re incredibly Kid Friendly? So much so, UNDER 18s
            GO FREE! (i.e. no ticket required- just let us know how many little
            ones we can expect from the drop-down box) *excludes kids events* We
            also love dogs, a lot. Check out @dogyardsocial if you don’t believe
            us.
            <br />
            <br />
            PS. Your £5 ticket* works as a deposit, on arrival you'll receive
            either a Watermelon Daiquiri (mocktails available) / Huuuuuuuuge
            Premium Beer Peroni (660ml yo!) / Premium Cider or a Glass of
            Prosecco!
            <br />
            <br />
            (*Offer adjusted in December)
          </p>

          <div className="w-full py-[7vw]">
            <div className="w-full bg-brand-cyan-text h-[2px]" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mb-[5vw]">
            <div className="sec3-heading top ">WEEKEND TICKETS</div>
            <div className="sec3-heading bottom">AND VOUCHERS</div>
          </div>
          <div>
            <ul className="w-full flex flex-col">
              <li className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between">
                  <div className="flex flex-1 flex-col ">
                    <h1 className="ticket-heading mb-[1.5vw]">
                      END OF DECEMBER TICKETS
                    </h1>
                    <div>
                      <CTA text="Buy now" theme="cyan" />
                    </div>
                  </div>
                  <div className="flex-1 w-full p-[1%] border-2 border-brand-cyan-text shadow-brand-cyan-text shadow-[.5vw_.5vw] overflow-hidden">
                    <div className="w-full flex justify-between">
                      <h1 className="ticket-heading">
                        <span className="cyan-stroke">Entry </span>
                        Ticket
                      </h1>
                      <h1 className="ticket-heading">$10.00</h1>
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <h2 className="uppercase text-[2.5vw] leading-[3vw] font-bold tracking-tight">
                        December
                      </h2>
                      <Image
                        src="/assets/stripes-cyan.svg"
                        alt="Ticket Chevron"
                        width={400}
                        height={100}
                        className="h-auto w-1/2 py-[2.5vw] translate-x-[4vw]"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full py-[4vw]">
                  <div className="w-full bg-brand-cyan-text h-[2px]" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="the-space relative w-full px-[5%] pb-[10%] ">
          <div className="the-space__heading cyan-stroke flex flex-col w-full items-center">
            <div className="leading-[30vw]">THE</div>
            <div className=" leading-[0] -mt-[3.5vw]">SPACE</div>
          </div>
          <div className="w-full h-[40vw]">
            <div className="slide z-[3] top-[34vw] px-[3vw] py-[2vw]">
              <div id="slide-1" className="grid grid-cols-2 w-full gap-6">
                <div>
                  <h1 className="info-heading">WE'RE ALL ABOUT</h1>
                  <h1 className="info-heading">THE COMMUNITY.</h1>
                </div>
                <Image
                  src="/assets/arrows-cyan.svg"
                  alt="arrow cyan"
                  width={200}
                  height={50}
                  className="w-full h-full"
                />
                <p>
                  Located on the footprint of one of Glasgow’s world-renowned
                  naval engineering facilities, now stands a converted West End
                  industrial warehouse. Hosting up to ten carefully selected
                  passionate street food vendors, providing the biggest and best
                  flavours from around the world. Whether traditional Thai or
                  authentic Southern American, we’ve got you covered.
                </p>
                <p>
                  Drinks, we’re pushing out the boat! – from pop up bars with
                  specialist craft beers, to cool wines and innovative seasonal
                  cocktails. Whether your taste is Bourbon Dive bars or
                  Flamboyant Tiki, just pull up a pew (or two!) we’ve got just
                  the thing for you (and you!).{" "}
                </p>
                <p>
                  Food traders menus will rotate and change up every couple of
                  weeks to give you a variety and food experience like no other.
                  Where else can a group of ten friends eat together from ten
                  different world cuisines while catching a vibe with Nas?{" "}
                </p>
                <p>
                  We’re here to help support and grow the thriving food
                  community in Scotland from farmers to drinks slingers and
                  vendors. Ingredients near: Inspiration far.{" "}
                </p>
              </div>
              <div className="slide__text-block z-[6]">
                <div className="slide__text-roller">
                  <div className="leading-[120%] text-right w-[9vw]">INFO</div>
                  <div className="leading-[120%] mt-[50%] text-right w-[9vw]">
                    INFO
                  </div>
                  <div className="leading-[120%] mt-[50%] text-right w-[9vw]">
                    INFO
                  </div>
                </div>
              </div>
              <div className="slide__triangle left-[4vw]" />
            </div>
            <div className="slide fill z-[2] top-[35vw] left-[6.5vw]">
              <div className="slide__text-block z-[6] w-[26vw]">
                <div className="slide__text-roller w-[9vw]">
                  <div className="leading-[120%] text-right w-[9vw]">HIRE</div>
                  <div className="leading-[120%] mt-[50%] text-right w-[9vw]">
                    INFO
                  </div>
                  <div className="leading-[120%] mt-[50%] text-right w-[9vw]">
                    INFO
                  </div>
                </div>
              </div>
              <div className="slide__triangle left-[16.5vw]" />
            </div>
            <div className="slide z-[1] top-[36vw] left-[8vw]">
              <div className="slide__text-block z-[6] w-[40vw]">
                <div className="slide__text-roller w-[9vw]">
                  <div className="leading-[120%] text-right w-[9vw]">
                    TRAINING
                  </div>
                  <div className="leading-[120%] mt-[50%] text-right w-[9vw]">
                    INFO
                  </div>
                  <div className="leading-[120%] mt-[50%] text-right w-[9vw]">
                    INFO
                  </div>
                </div>
              </div>
              <div className="slide__triangle left-[30.5vw]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col py-[15vw]">
          <div className="sec4-heading top">Where to</div>
          <div className="sec4-heading bottom">Find us</div>
        </div>
      </section>
      <section id="sec-4">
        <div className="px-[5%]">
          <div className="flex ">
            <div className="flex-1 flex flex-col">
              <div className="flex-1">
                <div className="text-[2.5vw] leading-[4vw] font-bold">
                  A HOP, SKIP & A JUMP AWAY
                </div>
                <p className="py-[2vw] text-[2vw] leading-[2.5vw]">
                  Located within a 10 min walk from the Hydro and SEC / just off
                  the bustling Finnieston strip we proudly sit within the
                  Yorkhill and Kelvingrove District. Leave the car at home.
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
          <Image
            src="/assets/arrows-black.svg"
            width={300}
            height={1000}
            alt="arrow black"
            className="h-auto mt-[15vw] relative -left-[77.5vw]  w-full min-w-[350vw]"
          />
        </div>
      </section>
      <section id="sec-2">
        <div className="pt-[15vw] pb-[10vw] flex flex-col items-center justify-center text-[16px] tracking-wide leading-[24px]">
          <div className="mb-[1.5vw]">put the social in dockyard social</div>
          <div className="insta-section-heading">
            IF YOU REALLY LIKE US MAYBE YOU
          </div>
          <a href="" className="insta-section-heading">
            COULD FOLLOW OUR <span className="blue-stroke">INSTA?</span>{" "}
          </a>
          <div>or...</div>
          <div className="insta-section-heading">JOIN OUR MAILING LIST?</div>
          <div className="w-[40%] h-[60px] my-[2%] border-2 border-brand-purple-text">
            <form className="flex w-full h-full" action="">
              <input
                className="w-full bg-transparent px-[12px] py-[8px] placeholder:text-brand-purple-text"
                type="email"
                placeholder="Your email"
                required
              />
              <button
                className="w-1/5 h-full bg-brand-purple-text text-brand-purple-bg"
                type="submit"
              >
                {" "}
                SUBMIT{" "}
              </button>
            </form>
          </div>
          <div>We promise we won't spam your inbox with loads of cool</div>
          <div>deals and discounts and super awesome news.</div>
          <div>(unless you want us to?)</div>
        </div>
      </section>
      <footer className="flex items-center justify-center py-[1vw] text-[16px] tracking-wide leading-[24px] bg-brand-purple-text text-brand-purple-bg">
        Copyright 2022 The Dockyard Social - Lovingly designed by Too Gallus
      </footer>
    </div>
  );
};

export default Home;
