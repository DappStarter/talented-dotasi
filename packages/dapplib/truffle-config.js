require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain mistake inner argue surge genius'; 
let testAccounts = [
"0xb3e1bc641e48f48e3e3fde2708e562f71efee1e84f758d878634938eb729bb8e",
"0x2e503746a95f9a459fdd27d8e523bde21c52619505f6e9c196a7da05236e9f49",
"0x7ed3a7c48f0b525cd438234d7a654b80771fabec99db90f91572eed3dc86d33b",
"0x8c1f1d50b52e05f58d34aa7923a9259f1466c63a6ba643f0042344e48cd960e8",
"0xc1254d6443d5ba039d405e5c22234cc35d71581bc87f9db78994e8c163c9a565",
"0xe39b6ad192d3e85e00afe8469e6e7dc2bab043bbbbb528505790654fdf945482",
"0x875a66047de3fd4df57c3878274bb6d3a0f145bb9ad3e4a9208d38f7324552e7",
"0x6bc16ec5e69afbe11bd7d557e49d81beca84b37ade6261d3b9faa00b3591eb12",
"0xe634b24bac0d40eb62ee0ea489e6f100cadb29a6f7b66cd406b7610f2e61a437",
"0xd99eff70c155c49d116039a089aea1fb7d52735c58aa9ccdb81996b0a2439c59"
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
            version: '^0.5.11'
        }
    }
};
