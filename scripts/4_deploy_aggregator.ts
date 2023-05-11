import hre from "hardhat";
import * as utils from "./utils";

async function main() {

    const aggregator = await utils.deployContract(hre, "Aggregator");

    console.log("address:", aggregator.address) // 0x19679D02055A39afe6D72c4E9Cc9c9a5d44B012a
}


main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    })