import * as glob from "glob";
import * as path from "path";
import * as utils from "./utils";
import * as fs from "fs";
import * as log from "./log";

async function main() {

    const yulContracts = glob.sync(
        path.join(__dirname, "../contracts/*.yulp")
    );
    const outputDir = path.join(__dirname, "../artifacts/yul");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    log.debug({ yulContracts });

    for (const yulContractPath of yulContracts) {
        const bytecode = utils.compileYulContract(yulContractPath);
        const contractName = path.parse(path.basename(yulContractPath)).name;
        const jsonOutputPath = path.join(outputDir, `${contractName}.json`);

        fs.writeFileSync(
            jsonOutputPath,
            JSON.stringify({ contractName, bytecode })
        );
    }
}

main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    })