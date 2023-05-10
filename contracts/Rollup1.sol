// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Rollup1 {

    // set aggregator address
    // 1.set address

    // callback endpoint
    // 1.check if address is aggregator
    // 2.emit event
    // uint256 id
    
    event Verified();

    address aggregator;

    function setAggregatorAddress() public {

    }

    function receiveMessage() public {
        emit Verified();
    }



}
