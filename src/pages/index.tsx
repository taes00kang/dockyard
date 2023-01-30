import Head from "next/head";
import { useEffect } from "react";
import type { NextPageWithLayout } from "./_app";
import { colors } from "../styles/colors";
import { useInView } from "../hooks/useInView";

// redux
import { useAppDispatch } from "../redux/hooks";
import { rehydrate } from "../redux/ticketSlice";

// components
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "../components/sections";

const Home: NextPageWithLayout = () => {
  const { inViewId } = useInView();

  useEffect(() => {
    document.body.classList.replace(
      document.body.className,
      `${inViewId}-inview`
    );
  }, [inViewId]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(rehydrate());
  }, []);

  return (
    <div>
      <Head>
        <title>TDS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer textColor={colors.theme2.bg} bgColor={colors.theme2.text} />
    </div>
  );
};

export default Home;
