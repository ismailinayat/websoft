import Head from "next/head";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Feature from "../components/Feature";
import Process from "../components/Process";
import SliderContainer from "../components/SliderContainer";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Stack from "../components/Stack";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WEB SOFT</title>
        <meta name="description" content="Web Development agency based in Pakistan." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="logo/logo.png" />
      </Head>

      <Navbar></Navbar>
      <Header></Header>
      <Feature></Feature>
      <Process></Process>
      <Stack></Stack>
      <Projects></Projects>
      <Team></Team>
      <SliderContainer></SliderContainer>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
