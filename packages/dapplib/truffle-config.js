require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth often unveil harvest clip bone venture'; 
let testAccounts = [
"0x96179f1f773da7656cfe2644ac26400260efedebe2d7bfa1514a058fd6cd8bb2",
"0xc28a715a4c76eeadf81ef39388bf2adbbc8c7f4dd7ed0abb16c4ac2644961d3a",
"0xd61f92461c56ca349511def221e4d40da8488bbaeb6c8a75eabc46c56c74799e",
"0x73b0b43b9fadc3d956d89c180d2b5c0dcb9b49dd5835f245ad5d7dc374b15007",
"0xb8a92bcb6ccd10cd34806450843048053aa42fc9c72d739f97d2bf91ae2bae3c",
"0x15e777d5da745567b9bde2af3748347b23361dba88e6be9cdce8e4819d846bdc",
"0x121ea1107873819bd900e2cf1c13e359c452afb23957051937ee1dc6180866d3",
"0xd34093015e708ccb3bd113873004831bbc2d52eb57fb674d6d3fb98f9c2b28f9",
"0xfd4de9c8eddc62c2cdb6e7f1f9c7cf809209f9c5ba2ef2dc06972fc452427d67",
"0xba0b1878d902717257bdaeca641e336d91c61d5ea17469c1ccb1050d03b95199"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

