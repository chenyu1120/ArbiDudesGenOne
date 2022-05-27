const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const { ARBISCANAPIKEY } = require('./env.json');

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ], 
  api_keys: {
    arbiscan: ARBISCANAPIKEY
  },

  networks: {
    arbi_testnet:{
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.arbitrum.io/rpc`),
      network_id: 421611,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    },
  } 
};