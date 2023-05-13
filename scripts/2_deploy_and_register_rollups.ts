import hre from "hardhat";
import * as utils from "./utils";

async function main() {

    const rollup1 = await utils.deployContract(hre, "Rollup1");
    utils.updateContractAddress("Rollup1", rollup1.address);
    console.log("rollup1 address:", rollup1.address);

    const rollup2 = await utils.deployContract(hre, "Rollup2");
    utils.updateContractAddress("Rollup2", rollup2.address);
    console.log("rollup2 address:", rollup2.address);

    const Aggregator = await hre.ethers.getContractFactory("Aggregator");
    const aggregator = Aggregator.attach(
        utils.getContractAddress("Aggregator")
    );
    
    const tx1 = await aggregator.register(
        "Rollup 1",
        rollup1.address,
    );
    const receipt1 = await tx1.wait()
    console.log(receipt.transactionHash);

    const tx2 = await aggregator.register(
        "Rollup 2",
        rollup2.address,
    );
    const receipt2 = await tx2.wait()
    console.log(receipt2.transactionHash);

}


main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    })