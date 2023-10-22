import Head from "next/head";
import Navbar from "../components/Navbar";
import Display from "../components/Display";
import About from "../components/About";
import ScreenLoader from "../components/ScreenLoader";
import CustomCursor from "../components/Cursor";
export default function Home() {
  return (
    <>
      <Head>
        <title>Sakir Ashker</title>
        <meta name="description" content="Profile management app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dotASH-dark.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <CustomCursor />
      <ScreenLoader />
      <Navbar />
      <Display />
      <About />
    </>
  );
}
