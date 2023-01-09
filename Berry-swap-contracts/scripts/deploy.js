const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer address:", deployer.address);

  //Factory Contract Deployment
  // const Factory = await ethers.getContractFactory("BerryFactory");
  // const factory = await Factory.deploy(deployer.address);
  // console.log("factory address:", factory.address);
  // const inithash = await factory.INIT_CODE_PAIR_HASH();
  // console.log("inithash :", inithash);

  //Berry Pair Contract Deployment
  // const Pair = await ethers.getContractFactory("BerryPair");
  // const pair = await Pair.deploy();
  // console.log("pair address:", pair.address);

  // //WBNB Contract Deployment
  // const WBNB = await ethers.getContractFactory("WBNB");
  // const wbnb = await WBNB.deploy();
  // console.log("wbnb address:", wbnb.address);

  // //Berry Router Deployment

  // const BerryRouter = await ethers.getContractFactory("BerryRouter");
  // const router = await BerryRouter.deploy(factory.address, wbnb.address);
  // console.log("router address:", router.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
