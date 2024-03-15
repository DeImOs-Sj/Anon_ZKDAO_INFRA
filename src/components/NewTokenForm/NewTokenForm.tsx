// @ts-nocheck comment
import { useState, useRef, useContext } from "react";
import { ParticleProvider } from "@particle-network/provider";
import { ethers } from "ethers";
import {
  Progress,
  Box,
  Radio,
  RadioGroup,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Icon,
  Spinner,
  chakra,
  VisuallyHidden,
  Text,
  Stack,
  useToast,
  ring,
} from "@chakra-ui/react";
import userSideabi from "../../utils/contractabis/usersideabi.json";
import creategovernanceabi from "../../utils/contractabis/creategovernanceabi.json";


const Form2 = ({ getName, getSummary }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleName = (e) => {
    getName(e);
  };

  const handleSummary = (e) => {
    getSummary(e);
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        DAO Registration
      </Heading>

      <FormControl mr="2%">
        <FormLabel htmlFor="name" fontWeight={"normal"}>
          DAO Name
        </FormLabel>
        <Input
          id="name"
          placeholder="Name"
          autoComplete="name"
          onChange={(e) => handleName(e.target.value)}
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Summary
        </FormLabel>
        <Textarea
          id="email"
          type="email"
          placeholder="Write a brief description about your community mission"
          autoComplete="email"
          onChange={(e) => handleSummary(e.target.value)}
        />
      </FormControl>
    </>
  );
};

const Form3 = ({ getJoiningThreshold, getProposal, getVisibility }) => {
  const toast = useToast();
  const inputRef = useRef(null);

  const handleTokens = (e) => {
    getJoiningThreshold(e);
  };

  const handleProposal = (e) => {
    getProposal(e);
  };

  const handleVisibility = (e) => {
    getVisibility(e);
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Governance Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl mr="5%" mt="2%">
          <FormLabel htmlFor="yoe" fontWeight={"normal"}>
            Joining Threshold
          </FormLabel>
          <NumberInput
            step={1}
            min={1}
            onChange={(value) => handleTokens(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>
            Enter minimum number of tokens required to join DAO
          </FormHelperText>
        </FormControl>
        <FormControl mr="5%" mt="2%">
          <FormLabel htmlFor="yoe" fontWeight={"normal"}>
            Proposal Threshold
          </FormLabel>
          <NumberInput
            step={1}
            min={1}
            onChange={(value) => handleProposal(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>
            Enter minimum number of tokens required to create a proposal
          </FormHelperText>
        </FormControl>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Is DAO private ?
          </FormLabel>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme="red"
                value="1"
                onChange={() => handleVisibility(false)}
              >
                No
              </Radio>
              <Radio
                colorScheme="green"
                value="2"
                onChange={() => handleVisibility(true)}
              >
                Yes
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

const Form1 = ({step, mintToken,setStep,getTokenSymbol, getTokenName, getTokenSupply,mintDone,setMintDone }) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSupply = (e) => {
    getTokenSupply(e);
  };

  const handleSymbol = (e) => {
    getTokenSymbol(e);
  };

  const handleTokenName = (e) => {
    getTokenName(e);
  };

  return (
   <>
      <div>
        <div className="relative min-h-screen grid bg-black ">
          <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
            <div className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative" style={{backgroundImage: `url("/bitcoin1.png")`}}>
              <div className="absolute bg-black opacity-25 inset-0 z-0"></div>
              <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
                <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center "></div>
              </div>
            </div>

            <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
              <div className="max-w-xl w-full space-y-12">
                <div className="lg:text-left text-center">
                  <div className="flex items-center justify-center ">
                    <div className="bg-black flex flex-col w-[35rem] border border-gray-900 rounded-lg px-8 py-10">
                      <form className="flex flex-col space-y-8 mt-10" htmlFor="tokenSymbol">
                        <label className="font-bold text-lg text-white">Token Symbol</label>
                        <input type="text" placeholder="Username" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"  id="tokenSymbol" placeholder="Token Symbol" autoComplete="off" onChange={(e) => handleSymbol(e.target.value)}/>
                        <label className="font-bold text-lg text-white">Token Name</label>
                        <input type="email" placeholder="Email" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" id="tokenName" placeholder="Token Name" onChange={(e) => handleTokenName(e.target.value)}/>
                        <label className="font-bold text-lg text-white">Token Supply</label>
                        <input type="text" placeholder="Supply" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" onChange={(e) => handleSupply(e.target.value)}/>
 <ButtonGroup className="w-full mt-8 flex justify-center">
        <Button
          onClick={() => {
            mintToken();
          }}
          colorScheme="teal"
          variant="solid"
          w="7rem"
          mr="5%"
        >
          Mint
        </Button>
        <Button
          w="7rem"
          isDisabled={step === 3 || (step === 1 && !mintDone)}
          onClick={() => {
            setStep(step + 1);
            if (step === 3) {
              setProgress(100);
            } else {
              setProgress(progress + 33.33);
            }
          }}
          colorScheme="teal"
          variant="outline"
        >
          Next
        </Button>
      </ButtonGroup>                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default function NewTokenForm() {
  const [progress, setProgress] = useState(33.33);
  const [step, setStep] = useState(1);
  const [mintDone, setMintDone] = useState(false);
  const [threshholdToken, setthreshholdToken] = useState();
  const [proposalToken, setProposalToken] = useState();
  const [desc, setdesc] = useState("");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [tokenName, settokenName] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");
  const [tokenAddress, settokenAddress] = useState("");
  const [daovisibility, setdaoVisibility] = useState(false);
  const toast = useToast();

  const mintToken = async () => {
    if (window.ethereum._state.accounts.length !== 0) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider)
      const signer = provider.getSigner();
console.log(signer)
      const createTokenContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CREATE_GOVERNANACE_ADDRESS,

        creategovernanceabi,
        signer
      );
      const userSideContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_USERSIDE_ADDRESS,
        userSideabi,
        signer
      );
      console.log(userSideContract)
      const accounts = await provider.listAccounts();
      // console.log(accounts[0]);
console.log("hrlloo",accounts[0])
      const userId = await userSideContract.userWallettoUserId(accounts[0]);
      console.log(userId);

      console.log(tokenName);
      console.log(symbol);
      console.log(tokenSupply);

      const tx = await createTokenContract.deployToken(
        tokenName,
        symbol,
        tokenSupply,
        userId
      );
      await tx.wait();
      console.log(tx);
      const totalTokens = await createTokenContract.getTotalTokesnDeployed(
        userId
      );
      const mintedTokenAddress =
        await createTokenContract.userIdtoDeployedTokens(
          userId,
          totalTokens - 1
        );

      settokenAddress(mintedTokenAddress);
      toast({
        title: "Tokens Minted",
        description: `Token Address: ${mintedTokenAddress}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
      setMintDone(true);
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

      const createTokenContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CREATE_GOVERNANACE_ADDRESS,
        creategovernanceabi,
        signer
      );
      const userSideContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_USERSIDE_ADDRESS,
        userSideabi,
        signer
      );
      // console.log("eherlo",userSideContract.)

      const userId = await userSideContract.userWallettoUserId(accounts[0]);

      const tx = await createTokenContract.deployToken(
        tokenName,
        symbol,
        tokenSupply,
        userId
      );

      const result = await tx.wait();
      console.log(result)

      const totalTokens = await createTokenContract.getTotalTokesnDeployed(
        userId
      );
      const mintedTokenAddress =
        await createTokenContract.userIdtoDeployedTokens(
          userId,
          totalTokens - 1
        );

      settokenAddress(mintedTokenAddress);
      toast({
        title: "Tokens Minted",
        description: `Token Address: ${mintedTokenAddress}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
      setMintDone(true);
    }
  };

  const createDAO = async () => {
    if (window.ethereum._state.accounts.length !== 0) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_USERSIDE_ADDRESS,
        userSideabi,
        signer
      );

      const accounts = await provider.listAccounts();

      const tx = await contract.createDao(
        name,
        desc,
        threshholdToken,
        proposalToken,
        tokenAddress,
        daovisibility,
        accounts[0]
      );

      console.log(tx);
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
        userSideabi,
        signer
      );

      const tx = await contract.createDao(
        name,
        desc,
        threshholdToken,
        proposalToken,
        tokenAddress,
        daovisibility,
        accounts[0]
      );

      console.log(tx);
    }
  };

  return (
    <div>
      <Progress className="mb-5 mx-5" hasStripe value={progress} isAnimated></Progress>
      {step === 1 ? (
        <Form1
          step={step}
          mintToken={mintToken}
          setStep={setStep}
          getTokenSymbol={(q) => setSymbol(q)}
          getTokenName={(q) => settokenName(q)}
          getTokenSupply={(q) => setTokenSupply(q)}
        />
      ) : step === 2 ? (
        <Form2 getName={(q) => setName(q)} getSummary={(q) => setdesc(q)} />
      ) : (
        <Form3
          getJoiningThreshold={(q) => setthreshholdToken(q)}
          getProposal={(q) => setProposalToken(q)}
          getVisibility={(q) => setdaoVisibility(q)}
        />
      )}
    </div>
  );
}
