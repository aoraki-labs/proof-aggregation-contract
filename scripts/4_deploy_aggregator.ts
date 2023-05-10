import hre from "hardhat";
import * as utils from "./utils";

async function main() {

    const aggregator = await utils.deployContract(hre, "Aggregator");

    console.log("address:", aggregator.address) // 0xc5a2B2d4A3D44630c0917EE54724bb475c93EbD0
}


main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    })