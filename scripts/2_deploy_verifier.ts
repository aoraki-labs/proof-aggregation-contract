import hre from "hardhat";
import * as utils from "./utils";

async function main() {
    const AggregationVerifierByteCode = utils.compileYulContract(
        "../contracts/AggregationVerifier.yul"
    );

    const AggregationVerifier = await utils.deployBytecode(
        hre,
        AggregationVerifierByteCode,
        "AggregationVerifier"
    );

    console.log("address:", AggregationVerifier) // 0x81962029F1111F9627486754EF45d0855BB382BC

}


main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    })