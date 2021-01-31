const lendingPoolABI = require('./abis/lendingPoolABI');

const ether = (n) => {
    return new web3.utils.BN(
        web3.utils.toWei(n.toString(), 'ether')
    )
}

const forLendingPoolTest = (lendingPoolAddress) => {
    let lendingPoolAddress = '0x9FE532197ad76c5a68961439604C037EB79681F0';
    let lendingPoolContract = await new web3.eth.Contract(lendingPoolABI, lendingPoolAddress);
    console.log(lendingPoolContract);

    // let reserves = await lendingPoolContract.methods.getReservesList().call();
    // console.log('reserves: ', reserves)

    let currentBlock = await web3.eth.getBlockNumber()
    console.log(currentBlock);

    let startBlock = currentBlock - 10

    lendingPoolContract.events.allEvents({
        fromBlock: startBlock
    }, (error, event) => console.log(event));

}

module.exports = async function(callback) {
    try{
        console.log("Executing Initiation Script!");

        // Fetching Accounts
        const accounts =  await web3.eth.getAccounts();
        console.log('Accounts: \n', accounts);
        
        let lendingPoolAddress = '0x9FE532197ad76c5a68961439604C037EB79681F0';
        let lendingPoolContract = await new web3.eth.Contract(lendingPoolABI, lendingPoolAddress);
        console.log(lendingPoolContract);

        // let reserves = await lendingPoolContract.methods.getReservesList().call();
        // console.log('reserves: ', reserves)

        let currentBlock = await web3.eth.getBlockNumber()
        console.log(currentBlock);

        let startBlock = currentBlock - 10

        lendingPoolContract.events.allEvents({
            fromBlock: startBlock
        }, (error, event) => console.log(event));

        console.log('Complete Script Executed!');
    }
    catch(err){
        console.error("Ohh Snap!!!", err);
    }

    callback()
}