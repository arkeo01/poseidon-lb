// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
// pragma solidity ^0.6.6;

import "./ILendingPoolAddressesProvider.sol";
import "./ILendingPool.sol";


contract Poseidon {

    address constant lendingPoolAddressProvider = 0x88757f2f99175387aB4C6a4b3067c77A695b0349;

    uint userHealthFactorThreshold = 1000000000000000;
    uint decimals = 15;

    /// @dev emitted when the user changes its healthfactor threshold
    event userHealthFactorThresholdChanged(
        address user,
        uint newUhft
    );

    /// @dev function for changing healthfactor threshold of the user
    /// @param hft new desired Health Factor Threshold
    function setUserHealthFactorThreshold(uint hft) public {
        userHealthFactorThreshold = hft;
        emit userHealthFactorThresholdChanged(msg.sender, hft);
    }

    function getUserHealthFactor(address user) public view returns( uint){
        ILendingPoolAddressesProvider addressProvider = ILendingPoolAddressesProvider(lendingPoolAddressProvider);
  
        ILendingPool lendingPool = ILendingPool(addressProvider.getLendingPool());
        (,,,,, uint256 healthFactor) = lendingPool.getUserAccountData(user);
        return healthFactor;
    }
}