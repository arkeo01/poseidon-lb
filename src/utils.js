const Web3 = require("web3");
const { mnemonics, alchemyUrl } = require('../credential');

// console.log("Initiating web3!");
// let web3;
// // Method 1: gives web3 object, which would be used to interact with contracts
// if (window.ethereum != null) {
//     web3 = new Web3(window.ethereum)
//     console.log(web3);
    
//     try {
//         console.log("Requesting accounts access...")
//         window.ethereum.enable()
//         // Acccounts now exposed
//     } catch (error) {
//         console.log("Oops!", error);
//     }
// }

// //Method 2: gives web3 object, which would be used to interact with contracts
// // if(typeof window.web3 != 'undefined'){
// //     // web3Provider = window.web3.currentProvider;
// //     web3 = new Web3(window.web3.currentProvider);
// //     console.log(web3);
// // }else {
// //     // If no injected web3 instance is detected, fallback to Ganache.
// //     let web3Provider = new window.web3.providers.HttpProvider('http://127.0.0.1:7545');
// //     web3 = new Web3(web3Provider);
// //     console.log(web3);
// // }

// web3.eth.getAccounts()
//     .then(console.log);
console.log(mnemonics, alchemyUrl);

