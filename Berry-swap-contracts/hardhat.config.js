require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

require("dotenv").config();
const { PRIVATE_KEY } = process.env;
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "bnbtestnet",
  networks: {
    hardhat: {},
    bnbtestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [PRIVATE_KEY],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/093b4fa91bff4c14b88d04dccdb94bee",
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/093b4fa91bff4c14b88d04dccdb94bee",
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/RGYs6b1Ynxzx_NUlIN8BU5yrV50oee13",
      accounts: [PRIVATE_KEY],
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
    ],
  },
  // paths: {
  //   artifacts: './src/backend/artifacts',
  //   sources: './src/backend/contracts',
  //   cache: './src/backend/cache',
  //   tests: './src/backend/test',
  // },
  // mocha: {
  //   timeout: 40000,
  // },
  etherscan: {
    apiKey: {
      bscTestnet: "Y6149DYZM3JUAFYNRWT5JBU5INE32CYBBR",
    }, // for ethereum
  },
  // etherscan: {
  //   apiKey: {
  //     polygonMumbai: 'GTSCQ1A3N2TUUF3G69WQ63NGQ7KWW4Z1JB',
  //   },
  // },
};
