import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Header from "../components/Header";
import Works from "../components/Works";

const Home: NextPage = () => {
  return (
    <div className="bg-dark font-sans">
      <Head>
        <title>Matias Silva Portfolio</title>
        <meta name="description" content="portfolio site" />
        <link rel="icon" href="/ms.jpg" />
      </Head>
      <Container>
        <Header />
        <div className="flex flex-col xl:flex-row mx-auto mt-10">
          <Skills />
          <Experience />
        </div>
        <Works />
      </Container>
    </div>
  );
};

export default Home;
