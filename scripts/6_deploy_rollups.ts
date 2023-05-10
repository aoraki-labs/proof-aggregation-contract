import hre from "hardhat";
import * as utils from "./utils";

async function main() {

    const rollup1 = await utils.deployContract(hre, "Rollup1");
    const rollup2 = await utils.deployContract(hre, "Rollup2");

    console.log("rollup1 address:", rollup1.address); // 0x958036e94f8a644B1A95d0725b44141d71c06512
    console.log("rollup2 address:", rollup2.address); // 0xC48b65623fB6fCD3D32907595031f77DA3707461
}


main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    })