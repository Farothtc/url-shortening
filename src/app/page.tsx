"use client";
import Image from "next/image";
import Nav from "./Components/Nav";
import StatisticCard from "./Components/StatisticCard";
import CardData from "./Data/CardData";
import Footer from "./Components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [inputUrl, setInputUrl] = useState("");
  const [activDrop, setActivDrop] = useState(false);
  const [error, setError] = useState("");
  const [urlChunk, setUrlChunk] = useState<{ input: string; short: string }[]>(
    []
  );
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const connectAPI = async () => {
    try {
      const res = await axios.post("/api/shorten", {
        url: inputUrl,
      });
      setError("");
      setUrlChunk((prev) => [
        ...prev,
        { input: inputUrl, short: res.data.result_url },
      ]);
    } catch (err) {
      setError("Operation failed.");
      console.log(err);
    }
  };

  const handleDrop = () => {
    setActivDrop(!activDrop);
  };

  return (
    <main className="min-h-screen">
      <section className="relative bg-white">
        <Nav isMobile={isMobile} handleDrop={handleDrop} />
        {activDrop && isMobile && (
          <div className="absolute left-1/2 -translate-x-1/2 text-black w-[90%]">
            <div className="card w-full bg-[#3a3053] card-lg shadow-sm">
              <div className="card-body flex justify-center items-center text-white gap-5">
                <h2 className="card-title cursor-pointer">Features</h2>
                <h2 className="card-title cursor-pointer">Pricing</h2>
                <h2 className="card-title cursor-pointer">Resources</h2>
                <hr className="text-gray-500 w-full" />
                <h2 className="card-title cursor-pointer">Login</h2>
                <button className="btn btn-ghost rounded-full text-xl w-full bg-teal-400 hover:bg-teal-200/90">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Landing begin */}
        <div className="container mx-auto flex justify-between items-center pt-15 pb-35">
          {isMobile ? (
            <section className="flex flex-col justify-center items-center">
              <div className="overflow-hidden">
                <Image
                  src={"/illustration-working.svg"}
                  alt="Working"
                  width={733}
                  height={482}
                  className="ms-15 "
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center pt-10 gap-5">
                <h1 className="text-black text-center text-4xl font-extrabold">
                  More than just <br /> shorter links
                </h1>
                <h2 className="text-gray-400 text-lg text-center">
                  Build your brand&apos;s recognition and get detailed insights
                  on how your links are performing.
                </h2>
                <button className="btn btn-ghost rounded-4xl bg-teal-400 text-white hover:border-teal-700 hover:bg-teal-200/90 w-40 tracking-widest mt-3">
                  Get Started
                </button>
              </div>
            </section>
          ) : (
            <>
              <div className="flex-1 flex flex-col gap-3">
                <h1 className="text-black text-5xl md:text-7xl font-extrabold">
                  More than just <br /> shorter links
                </h1>
                <h2 className="text-gray-400 text-base md:text-xl tracking-wide">
                  Build your brand&apos;s recognition and get detailed <br />{" "}
                  insights on how your links are performing.
                </h2>
                <button className="btn btn-ghost rounded-4xl bg-teal-400 text-white hover:border-teal-700 hover:bg-teal-200/90 w-40 tracking-widest mt-3">
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
            </>
          )}
        </div>
      </section>
      <section
        style={{
          background:
            "linear-gradient(to bottom, #fff 0%, #fff 50%, #f0f1f6 50%, #f0f1f6 100%)",
        }}
        className="flex flex-col justify-center items-center"
      >
        {/* URL Shortening Part */}
        <div className=" w-[90%] h-44 sm:h-auto md:w-[65%] z-10 bg-[#3a3053] rounded-lg">
          <div
            className={`${
              isMobile
                ? "card w-full h-32 bg-[url('/bg-shorten-mobile.svg')] bg-cover card-md "
                : "card w-full h-32 bg-[url('/bg-shorten-desktop.svg')] card-md "
            }`}
          >
            <div className="card-body flex justify-center items-center">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 w-full sm:px-10">
                <div className="flex flex-col justify-start items-start w-full">
                  <fieldset className="fieldset w-full">
                    <input
                      type="text"
                      name="input"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      onBlur={() => setError("Please add a link")}
                      placeholder="Shorten a link here..."
                      className="input w-full h-12 bg-white placeholder-gray-400 placeholder:tracking-wider placeholder:ps-3 text-black"
                    />
                    {error && !inputUrl && (
                      <p className="sm:absolute sm:top-[75%] label text-red-500 italic tracking-widest">
                        {error}
                      </p>
                    )}
                  </fieldset>
                </div>
                <button
                  className="btn btn-ghost rounded-lg bg-teal-400 text-white hover:bg-teal-200/90 hover:border-teal-700 w-full sm:w-40 h-12 tracking-widest"
                  onClick={connectAPI}
                >
                  Shorten It!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {urlChunk.length > 0 && (
        <div className="bg-[#f0f1f6] pt-5">
          <div className="mx-auto h-auto w-[90%] xl:h-auto md:w-[65%] flex flex-col gap-4 ">
            {urlChunk.map((item, idx) => (
              <div key={idx} className="card w-full h-auto bg-white card-md">
                <div className="card-body flex justify-center items-center p-0 xl:p-6">
                  <div className="flex flex-col xl:flex-row justify-start items-start xl:justify-between xl:items-center w-full">
                    <div className="text-black break-all p-3 sm:p-6 xl:ps-0">
                      {item.input}
                    </div>
                    <hr className="text-gray-500 w-full xl:hidden" />

                    <div className="flex flex-col sm:items-center xl:flex-row xl:gap-5 w-full xl:w-auto">
                      <div className="break-all text-teal-400 p-3 sm:p-6 self-start xl:self-center xl:p-0">
                        {item.short}
                      </div>
                      <button
                        className={`btn btn-ghost rounded-lg w-[90%] mb-5 xl:mb-0 xl:w-24 h-10 self-center tracking-widest ${
                          copiedIdx === idx
                            ? "bg-black text-white"
                            : "bg-teal-400 text-white hover:border-teal-700 hover:bg-teal-200/90"
                        }`}
                        onClick={() => {
                          navigator.clipboard.writeText(item.short);
                          setCopiedIdx(idx);
                          setTimeout(() => setCopiedIdx(null), 1500);
                        }}
                      >
                        {copiedIdx === idx ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <section className="bg-[#f0f1f6]">
        {/* Statistics Part */}
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className=" text-3xl sm:text-4xl text-black pt-15 sm:pt-44 font-bold">
            Advanced Statistics
          </h1>
          {isMobile ? (
            <h2 className="text-gray-400 text-center px-6">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </h2>
          ) : (
            <h2 className="text-gray-400 text-center">
              Track how your links are performing across the web with <br /> our
              advanced statistics dashboard.
            </h2>
          )}

          <div className="relative flex flex-col xl:flex-row py-30 gap-15 xl:gap-5">
            {/* {isMobile ? (
              <div className="absolute left-1/2 top-[15%] h-[75%] w-2 bg-teal-400 -translate-x-1/2 z-0" />
            ) : (
              <div className="absolute top-1/2 left-0 w-full h-2 bg-teal-400 -translate-y-1/2 z-0" />
            )} */}
            <div className="absolute left-1/2 top-[15%] h-[75%] w-2 bg-teal-400 -translate-x-1/2 z-0 xl:hidden" />
            <div className="absolute top-1/2 left-0 w-full h-2 bg-teal-400 -translate-y-1/2 z-0 hidden xl:block" />

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
              <h2 className="card-title text-2xl text-center w-full sm:font-extrabold sm:text-3xl font-semibold">
                Boost your links today
              </h2>
              <button className="btn btn-ghost rounded-4xl bg-teal-400 text-white hover:border-teal-700 hover:bg-teal-200/90 w-[60%] sm:text-sm text-base sm:w-[50%]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#232027]">
        <Footer isMobile={isMobile} />
      </section>
    </main>
  );
}
