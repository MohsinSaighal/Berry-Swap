// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer address:", deployer.address);
  // //WBNB Contract Deployment
  // const WBNB = await ethers.getContractFactory("WBNB");
  // const wbnb = await WBNB.deploy();
  // console.log("wbnb address:", wbnb.address);

  //Berry Router Deployment

  const BerryRouter = await ethers.getContractFactory("BerryRouter");
  const router = await BerryRouter.deploy(
    "0x72bE7065Fd99e9933A4d3941ED06B799d97A91A5",
    "0x6AE67cc973b808fD5dd8E023bADa85E14428e814"
  );
  console.log("router address:", router.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
