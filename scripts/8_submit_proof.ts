import hre from "hardhat";
import * as utils from "./utils";

async function main() {

    const Aggregator = await hre.ethers.getContractFactory("Aggregator");
    const aggregator = Aggregator.attach(
        "0x19679D02055A39afe6D72c4E9Cc9c9a5d44B012a"
    );
    
    const tx = await aggregator.register(
        "Rollup 1",
        "0x31EdDa743F44c8dBa190D2A6F839Db14fe445dcf",
    );
    const receipt = await tx.wait()
    console.log(receipt);

    
}


main()
.then(() => process.exit(0))
.catch(e => {
    console.error(e);
    process.exit(1);
})