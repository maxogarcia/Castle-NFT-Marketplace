require("@nomiclabs/hardhat-waffle");

/*
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});
*/
//Polgon connection
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectID = "161f39b06bcd446f9b5cf43c8e03a12b"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
