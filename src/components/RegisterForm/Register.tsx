// @ts-nocheck comment
import React, { useState, useRef, useEffect } from "react";

import { Identity } from "@semaphore-protocol/identity";
import { useToast } from "@chakra-ui/react";
import { ParticleProvider } from "@particle-network/provider";
import { ethers } from "ethers";
import usersideabi from "../../utils/contractabis/usersideabi.json";

const RegisterForm = () => {
  const toast = useToast();
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [ipfsUrl, setIpfsUrl] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const changeHandler = () => {
    setProfileImage(inputRef.current?.files[0]);
  };
  const uploadIPFS = async () => {
    const form = new FormData();
    form.append("file", profileImage ? profileImage : "");

    const options = {
      method: "POST",
      body: form,
      headers: {
        Authorization: process.env.NEXT_PUBLIC_NFTPort_API_KEY,
      },
    };

    await fetch("https://api.nftport.xyz/v0/files", options)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        console.log(response.ipfs_url);
        setIpfsUrl(response.ipfs_url);
        if (profileImage) {
          toast({
            title: "Image Uploaded to the IPFS.",
            description: "Congratulations 🎉 ",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Image not Uploaded to the IPFS.",
            description: "Please attach the Image.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = async (e) => {
    const identity = new Identity();
    localStorage.setItem("semaphore-id", identity.toString());
    localStorage.setItem("commitment-id", identity._commitment);
    if (window.ethereum._state.accounts.length !== 0) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_USERSIDE_ADDRESS,
        usersideabi,
        signer
      );
      const accounts = await provider.listAccounts();

      const tx = await contract.createUser(
        name,
        email,
        bio,
        ipfsUrl,
        accounts[0]
      );
      await tx.wait();

      toast({
        title: "User Registered.",
        description: "Congratulations 🎉 ",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      const particleProvider = new ParticleProvider(particle.auth);
      const accounts = await particleProvider.request({
        method: "eth_accounts",
      });
      const ethersProvider = new ethers.providers.Web3Provider(
        particleProvider,
        "any"
      );
      const signer = ethersProvider.getSigner();

      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_USERSIDE_ADDRESS,
        usersideabi,
        signer
      );

      const tx = await contract.createUser(
        name,
        email,
        bio,
        ipfsUrl,
        accounts[0]
      );

      await tx.wait();

      toast({
        title: "User Registered.",
        description: "Congratulations 🎉 ",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const getUser = async () => {
    if (window.ethereum._state.accounts.length !== 0) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const userSideInstance = new ethers.Contract(
        process.env.NEXT_PUBLIC_USERSIDE_ADDRESS,
        usersideabi,
        signer
      );
      const tempUser = await userSideInstance.userIdtoUser(2);
      console.log(tempUser);
    } else {
      console.log("No Metamask Found");
    }
  };

  return (
    <>
        <div className=" flex justify-center items-center h-screen bg-white">
            <div className="flex flex-col justify-start items-start w-full space-y-9">
                <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                    <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center  py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                        <div className="flex flex-col justify-start items-start w-full space-y-4">
                        </div>
                        <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                            <img  className="w-[40rem] h-[40rem] " src="https://framerusercontent.com/images/CHqmTOVLmd0ioUj4qz3wq4hKIE.webp" alt="DAO" />
                        </div>
                    </div>
    
                    <div className="p-8  flex flex-col lg:w-full xl:w-3/5">
 <div className="flex flex-row justify-center items-center mt-6">
                            <hr className="border w-full" />
                            <p className="flex flex-shrink-0 px-4 font-semibold leading-4 text-xl text-blue-600">Register Yourself</p>
                            <hr className="border w-full" />
                      </div>
                 <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Username</label>
                     <div className="mt-2">
<input 
  className="border border-gray-300 p-4 rounded w-full text-base leading-4 text-gray-600 placeholder-gray-600 bg-[#97b4f0] " 
  type="email" 
  name="" 
  id="" 
  placeholder="Username" 
  onChange={(e) => setName(e.target.value)} 
/>
                        </div>
                     <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Email</label>

                        <div className="mt-2">
                            <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 text-gray-600 placeholder-gray-600 bg-[#97b4f0]" type="email" name="" id="" placeholder="Email"               onChange={(e) => setEmail(e.target.value)}
 />
                        </div>
    
                        <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Enter Your Bio</label>
                        <div className="mt-2 flex-col">
                            <div>
                              <input className="border rounded-tl rounded-tr border-gray-300 p-4 h-[6rem] w-full text-base leading-4  text-gray-600 placeholder-gray-600 bg-[#97b4f0] " type="email" name="" id="" placeholder="Enter Your Bio"                onChange={(e) => setBio(e.target.value)}
/>
                
                            </div>
                    
                        </div>
    <div class="mb-6 pt-4">
        <label class="mb-5 block   text-gray-800 dark:text-gray-50">
          Upload Image
              </label>
              <p>{profileImage?.name}</p>

        <div class="mb-8">
          <input type="file" id="file-upload" class="sr-only" className='placeholder-gray-600'     name="file-upload"
                
                        ref={inputRef}
                        onChange={changeHandler}
                        accept=".png, .jpg, .jpeg" />
          <label
            for="file"
            class="relative flex min-h-[200px] bg-[#FFFFFF] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span class="mb-2 block text-xl font-semibold text-gray-600">
                Drop files here
              </span>
              <span class="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-gray-600"
              >
                Browse
                    </span>

                      <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full "  
                         onClick={uploadIPFS}>
                         Upload To IPFS
                        </button>
                    
            </div>
          </label>
        </div>
                  </div>   
    
                      
    
                        <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-[#97b4f0] dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full " onClick={handleSubmit}>
                            <div>
                                <p className="text-base leading-4">Join</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default RegisterForm;
