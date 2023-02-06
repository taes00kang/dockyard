import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
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

const Home: NextPage = () => {
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
        <title>The Dockyard Social</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico?" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
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
