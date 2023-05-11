import hre from "hardhat";
import * as utils from "./utils";

async function main() {

    const rollup1 = await utils.deployContract(hre, "Rollup1");
    const rollup2 = await utils.deployContract(hre, "Rollup2");

    console.log("rollup1 address:", rollup1.address); // 0x31EdDa743F44c8dBa190D2A6F839Db14fe445dcf
    console.log("rollup2 address:", rollup2.address); // 0x89C034CB78E2562FFb44Ef0d47d324bF6Bc25dd2
}


main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    })