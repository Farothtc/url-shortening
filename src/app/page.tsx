"use client";
import Image from "next/image";
import Nav from "./Components/Nav";
import StatisticCard from "./Components/StatisticCard";
import CardData from "./Data/CardData";
import Footer from "./Components/Footer";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [shortUrl, setShortUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState("");

  const connectAPI = async () => {
    try {
      const res = await axios.post("https://cleanuri.com/api/v1/shorten", {
        url: inputUrl,
      });
      setShortUrl(res.data.result_url);
      setError("");
    } catch (err) {
      setError("Operation failed.");
      setShortUrl("");
    }
  };

  return (
    <main className="min-h-screen">
      <section className="bg-white">
        <Nav />
        {/* Landing begin */}
        <div className="container mx-auto flex justify-between items-center pt-15 pb-35">
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="text-black text-7xl font-extrabold">
              More than just <br /> shorter links
            </h1>
            <h2 className="text-gray-400 text-xl tracking-wide">
              Build your brand&apos;s recognition and get detailed <br />{" "}
              insights on how your links are performing.
            </h2>
            <button className="btn btn-ghost rounded-4xl bg-teal-400 text-white hover:border-teal-700 w-40 tracking-widest mt-3">
              Get Started
            </button>
          </div>
          <div className="flex-1 flex justify-end">
            <Image
              src={"/illustration-working.svg"}
              alt="Working"
              width={733}
              height={482}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f0f1f6]">
        {/* URL Shortening Part */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[77%] w-[65%] z-10 bg-[#3a3053] rounded-lg">
          <div className="card w-full h-32 bg-[url('/bg-shorten-desktop.svg')] card-md ">
            <div className="card-body flex justify-center items-center">
              <div className="flex justify-center items-center gap-5 w-full px-10">
                <input
                  type="text"
                  name="input"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="Shorten a link here..."
                  className="input w-full h-12 bg-white placeholder-gray-400 placeholder:tracking-wider placeholder:ps-3 text-black"
                />
                <button
                  className="btn btn-ghost rounded-lg bg-teal-400 text-white hover:border-teal-700 w-40 h-12 tracking-widest"
                  onClick={connectAPI}
                >
                  Shorten It!
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Statistics Part */}
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className=" text-4xl text-black pt-44 font-bold">
            Advanced Statistics
          </h1>
          <h2 className="text-gray-400 text-center">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </h2>
          <div className="relative flex py-30 gap-5">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-teal-400 -translate-y-1/2 z-0" />
            {CardData.map((e) => (
              <StatisticCard key={e.id} e={e} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#3a3053]">
        <div className="flex justify-center items-center">
          <div className="card w-full h-[250px] bg-[url('/bg-boost-desktop.svg')] bg-cover card-xl shadow-sm flex justify-center items-center">
            <div className="card-body flex justify-center items-center gap-5">
              <h2 className="card-title text-3xl font-extrabold">
                Boost your links today
              </h2>
              <button className="btn btn-ghost rounded-4xl bg-teal-400 text-white hover:border-teal-700 w-[50%]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#232027]">
        <Footer />
      </section>
    </main>
  );
}
