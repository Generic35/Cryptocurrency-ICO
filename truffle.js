require('babel-register');
require('babel-polyfill');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    // ropsten: {
    //   provider: function () {
    //     return new HDWalletProvider(
    //       process.env.MNEMONIC,
    //       `https://ropsten.infura.io/${process.env.INFURA_API_KEY}`
    //     );
    //   },
    //   gas: 5000000,
    //   gasPrice: 25000000000,
    //   network_id: 3,
    // },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  compilers: {
    solc: {
      version: '0.4.23',
    },
  },
};
