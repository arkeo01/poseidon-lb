const ether = (n) => {
    return new web3.utils.BN(
        web3.utils.toWei(n.toString(), 'ether')
    )
}

module.exports = async function(callback) {
    try{
        console.log("Executing Initiation Script!");

        // Fetching Accounts
        const accounts =  await web3.eth.getAccounts();
        console.log('Accounts: \n', accounts);
        
        let LiquidatorContract = await Liquidator.deployed();
        console.log(LiquidatorContract);
        

        console.log('Complete Script Executed!');
    }
    catch(err){
        console.error("Ohh Snap!!!", err);
    }

    callback()
}