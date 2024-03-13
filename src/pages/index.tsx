"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import LandingImage from '../image/download.jpg'

import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white mt-[6rem]">
    {/* <!-- Hero --> */}
    <section
        className="flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20 gap-y-[10rem]" >
        {/* <!-- Column-1 --> */}
        <div className="px-3 w-full lg:w-2/5">
            <div
                className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl text-[#1F2937]">
                    Next Gen

                    <span className="text-5xl text-blue-500 leading-relaxeds"
                        >ZKP Based Governance DAO
                    </span>
                </h2>

                <p
                    className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                    Helping you Control and Govern the Network
                </p>
            </div>

            <div className="text-center lg:text-left">
                <a
                    className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                    >Getting Started with DAo</a
                >

                <button
                    className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                     onClick={() => router.push("/register")}>Register Now?</button>
            </div>
        </div>

        {/* <!-- Column-2 --> */}
        <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
            {/* <!-- Illustrations Container --> */}
            <div className="flex justify-center items-center">
                          <img src='https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/what_is_a_dao_academy/what-is-dao-01.png?width=1320&height=600&name=what-is-dao-01.png' />
            </div>
        </div>
    </section>

    {/* <!-- Parallax Background --> */}
    <section
        className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
    style={{
  backgroundImage: "url(https://cryptologos.cc/logos/curve-dao-token-crv-logo.png)"
}}

        >
        <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
            Decentralized Autonomous Organization
        </h1>

        <span className="text-center font-bold my-20 text-white/90">
            <a
                href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
                target="_blank"
                className="text-white/90 hover:text-white">
                Join 
            </a>

            <hr className="my-4" />

            <a
                href="https://unsplash.com/photos/8Pm_A-OHJGg"
                target="_blank"
                          className="text-white/90 hover:text-white">
                          Govern
            </a>

            <hr className="my-4" />

            <p>
                <a
                    href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
                    target="_blank"
                    className="text-white/90 hover:text-white">
                    Source Code
                </a>
                |
                <a
                    href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"
                    target="_blank"
                    className="text-white/90 hover:text-white">
                    Full Preview
                </a>
            </p>
        </span>
    </section>



<footer className="bg-gray-800 pt-10 sm:mt-10 pt-10 w-full">
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* <!-- Col-1 --> */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* <!-- Col Title --> */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Getting Started
            </div>

            {/* <!-- Links --> */}
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Installation
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Release Notes
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Upgrade Guide
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Using with Preprocessors
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Optimizing for Production
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Browser Support
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                IntelliSense
            </a>
        </div>

        {/* <!-- Col-2 --> */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* <!-- Col Title --> */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Core Concepts
            </div>

            {/* <!-- Links --> */}
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Utility-First
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Responsive Design
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Hover, Focus, & Other States
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Dark Mode
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Adding Base Styles
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Extracting Components
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Adding New Utilities
            </a>
        </div>

        {/* <!-- Col-3 --> */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* <!-- Col Title --> */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Customization
            </div>

            {/* <!-- Links --> */}
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Configuration
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Theme Configuration
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Breakpoints
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Customizing Colors
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Customizing Spacing
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Configuring Variants
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Plugins
            </a>
        </div>

        {/* <!-- Col-3 --> */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* <!-- Col Title --> */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Community
            </div>

            {/* <!-- Links --> */}
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                GitHub
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Discord
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Twitter
            </a>
            <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                YouTube
            </a>
        </div>
    </div>

    {/* <!-- Copyright Bar --> */}
    <div className="pt-2">
        <div
            className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
            <div className="mt-2">© Copyright 1998-year. All Rights Reserved.</div>

            {/* <!-- Required Unicons (if you want) --> */}
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-facebook-f"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-twitter-alt"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-youtube"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-linkedin"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    </footer>  
    </div>
  );
}
