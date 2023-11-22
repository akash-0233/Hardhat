require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  }
};