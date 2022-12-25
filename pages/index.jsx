import { Divider } from "@/components/common";
import { OrderForm, Projects, Slogan, WhyUs } from "@/sections/home";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>BOLD | design & develop ideas!</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Slogan />
      <Divider />
      <WhyUs />
      <Projects />
      <OrderForm />
    </>
  );
};

export default Home;
