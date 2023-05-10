// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract Aggregator {

    // data
    // like NFT
    // 1.circuit info: circuit id, circuit info, callback endpoint
    // 2.proof info: proof id, proof data, status, circuit id

    struct CircuitEndpoint {
        string desc;
        address contractAddress;
        // bytes4 contractMethodToCall;
    }

    struct Proof {
        bytes proof;
        bool isPending;
        uint256 circitId;
    }
    
    mapping(uint256 => CircuitEndpoint) public circuitEndpoints;
    uint circuitEndpointNum;
    
    mapping(uint256 => Proof) public proofs;
    uint proofNum;

    address verifier;

    // methods
    // 1.register: 
    // 2.submit proof
    // 3.submit aggregated proof
    // 4.help functions
    //   - get pending proofs
    //   - get status for a proof



    function register(
        string memory desc,
        address contractAddress
        // bytes4 contractMethodCall
    ) public {
        circuitEndpoints[circuitEndpointNum] = CircuitEndpoint(
            desc,
            contractAddress
            // contractMethodCall
        );
    }

    function submit_proof() public {

    }

    // proof
    // ids

    function set_verifier(address _verifier) public {
        verifier = _verifier;
    }
    
    function submit_batch(bytes calldata proof) public returns (bool isCallSuccess, bytes memory response) {
        // verify
        // call back in turn
        (bool _isCallSuccess, bytes memory _response) = verifier.staticcall(proof);

        isCallSuccess = _isCallSuccess;
        response = _response;

        CircuitEndpoint storage endpoint = circuitEndpoints[0];

        // Should use interface
        (bool success, bytes memory _data) = address(endpoint.contractAddress).call(abi.encodeWithSignature("receiveMessage()"));
        
    }



    function get_pending() public pure {

    }

    function get_status() public pure {

    }




}
