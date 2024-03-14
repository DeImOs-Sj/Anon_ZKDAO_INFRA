// @ts-nocheck comment
import React, { useState } from "react";
import ExistingTokenForm from "../../components/ExistingTokenForm/ExistingTokenForm";
import NewTokenForm from "../../components/NewTokenForm/NewTokenForm";
import {
  ChakraProvider,
  useColorModeValue,
  Box,
  Button,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";

const CreateDao = () => {
  const scheme = "teal";
  const [existingToken, setIsExistingToken] = useState(false);
  const [newToken, setNewToken] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const scheme2 = "orange";
  const step1 = useColorModeValue("600", "300");
  const step2 = useColorModeValue("500", "400");
  const step3 = useColorModeValue("300", "500");
  const sizes = ["lg", "md", "sm", "xs"];

  return (
    <>
      {showBtn ? (
<div class="w-full my-20 z-50 sticky  rounded-3xl px-6 bg-zinc-900">
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             Lorem Ipsum Is Cool.
            </h2>
            <p class="text-white text-base md:text-lg"> Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
            </p>
          </div>
          <div class="flex items-center space-x-3">
          {/* <Link href="/comingsoon">
            <a
      class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white  border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black"
    >
       &nbsp;&nbsp;<Image width="25" alt="google auth logo" width={20} height={20} src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20200429221626%21Google_%22G%22_Logo.svg" />&nbsp;&nbsp; Get Started
    </a>
    </Link> */}
          </div>
        </div>
            <Image alt="logo"  width="450" height="450" src="https://images.unsplash.com/photo-1542304074-9c8ce93b52fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </div>
    </div>



    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        
      <Image alt="logo" width="450" height="450" src="https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />


        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             Step 2 : Awesome Is Lorem Ipsum
            </h2>
            <p class="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

            </p>
          </div>
          <div class="flex items-center space-x-3">
          {/* <Link href="/comingsoon">
            <a
      class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white  border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black"
    >
       &nbsp;&nbsp;<Image alt="logo" width="25" src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20200429221626%21Google_%22G%22_Logo.svg" />&nbsp;&nbsp; Get Started
    </a>
    </Link> */}
          </div>
        </div>
      </div>
    </div>



   

    <div class="sm:px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-3xl shadow-sm lg:flex-row sm:mx-auto">
        <div class="relative lg:w-1/2">
          <Image
            width="50"
            height="50"
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="mobile app"
            class="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            class="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
      </div>
    </div>
  
          </div>
      ) : null}

      {existingToken ? <ExistingTokenForm /> : null}
      {newToken ? <NewTokenForm /> : null}
    </>
  );
};

export default CreateDao;
