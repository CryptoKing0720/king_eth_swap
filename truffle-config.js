require('babel-register');
require('babel-polyfill');

var HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = 'between situate series olympic biology fiction isolate flame easy pepper tumble skate';


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      networkCheckTimeout: 999999,
  provider: () => new HDWalletProvider(MNEMONIC, `https://ropsten.infura.io/v3/12967c350e3149c58cd2fdf8d556bdc0`),
  from:"0x2177a9A3Cc61c3Fd1F6de587c8AA24206e141805",
  network_id: 3, // Ropsten's id
  gas: 5500000, // Ropsten has a lower block limit than mainnet
  confirmations: 0, // # of confs to wait between deployments. (default: 0)
  timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
  skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion:"petersburg"
    }
  }
}
