import hre from "hardhat";
import * as utils from "./utils";

async function main() {

    const Aggregator = await hre.ethers.getContractFactory("Aggregator");
    const aggregator = Aggregator.attach(
        "0xc5a2B2d4A3D44630c0917EE54724bb475c93EbD0"
    );
    
    const tx = await aggregator.register(
        "Rollup 1",
        "0x958036e94f8a644B1A95d0725b44141d71c06512",
        
    );
    console.log(tx);

    
}


main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    })