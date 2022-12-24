import { Divider } from "@/components/common";
import { Slogan } from "@/sections/home";
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
    </>
  );
};

export default Home;
