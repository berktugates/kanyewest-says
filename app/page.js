"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Kanye from "../public/kanye.gif";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import axios from "axios";

export default function Home() {
  const [quotes, setQuotes] = useState({});
  useEffect(() => {
    axios
      .get("https://api.kanye.rest")
      .then((response) => {
        setQuotes(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <div
        id="content"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 via-green-500 to-blue-500 via-indigo-500 to-purple-500"
      >
        <Image
          src={Kanye}
          alt="Kanye"
          className="text-center animate-spin mb-24"
        />
        <div className="p-2 bebas-neue-regular w-1/2">
          <h1 className="text-6xl font-semibold mb-2">Kanye West says:</h1>
          <Quotes quotes={quotes} />
        </div>
      </div>
    </>
  );
}
