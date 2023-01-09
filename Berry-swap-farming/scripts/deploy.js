// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // //Deploy Berry Token
  // const BerryToken = await ethers.getContractFactory("BerryToken");
  // const beryy = await BerryToken.deploy();
  // console.log("Berry Token Deployed at " + beryy.address);

  // //Deploy Cherry Token

  // const CherryToken = await ethers.getContractFactory("CherryBar");
  // const cherry = await CherryToken.deploy(beryy.address);
  // console.log("Cherry Token Deployed at " + cherry.address);

  // //Deploy Master Chef

  // const MasterChef = await ethers.getContractFactory("MasterChef");
  // const cherryperBlock = await ethers.utils.parseEther("10");
  // const masterchef = await MasterChef.deploy(
  //   beryy.address,
  //   cherry.address,
  //   deployer.address,
  //   cherryperBlock,
  //   26052924
  // );
  // console.log("MasterChef Deployed at " + masterchef.address);

  //   await beryy.transferOwnership(masterchef.address);
  // //   await cherry.transferOwnership(masterchef.address);
  //   if ((await masterchef.owner()) !== deployer.address) {
  //     // Transfer ownership of MasterChef to dev
  //     console.log("Transfer ownership of MasterChef to dev");
  //     await (await chef.transferOwnership(deployer.address)).wait();
  //   }
  const MasterChefV2 = await ethers.getContractFactory("MasterChefV2");
  const masterchef2 = await MasterChefV2.deploy(
    "0x05a9405F708E5E529C76E83b51643D98e0729c79",
    "0x4363874D3F5799EFBfab8D81E37f9D6C97c9155F",
    1,
    deployer.address
  );
  console.log("MasterChefV2 Deployed at " + masterchef2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
