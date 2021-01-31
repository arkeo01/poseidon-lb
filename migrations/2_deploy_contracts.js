const Poseidon = artifacts.require("Poseidon");
// const ILendingPool = artifacts.require("ILendingPool");
// const ILendingPoolAddressesProvider = artifacts.require("ILendingPoolAddressesProvider");

module.exports = function (deployer) {
    // deployer.deploy(ILendingPoolAddressesProvider);
    // deployer.deploy(ILendingPool);
    deployer.deploy(Poseidon);
};
