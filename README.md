# Proof Aggregator for Multiple ZK-rollups to Reduce Fee

This repo demonstrates a basic proof aggregator use case. It comes with an aggregator contract and two rollup contracts. Some scripts and test code are provided.


### Preparation

1. compile proof-aggregation rust code

2. compile contracts, set .env

3. get some test matic from mumbai faucet

### How to Go Througn the Process

1. deploy aggregator

`npx hardhat run ./scripts/1_deploy_aggregator.ts --network mumbai`

2. register rollup1 rollup2

`npx hardhat run ./scripts/2_deploy_and_register_rollups.ts --network mumbai`

3. export verifier

`./proof-aggregation export-verifier AggregatedVerifier.yul`

4. set verifier

`npx hardhat run ./scripts/3_deploy_verifier.ts --network mumbai`

5. gen proof

`./proof-aggregation gen-circuit1-proof proof1.json`

`./proof-aggregation gen-circuit2-proof proof2.json`

6. submit proof1 proof2

`npx hardhat run ./scripts/4_submit_proof.ts --network mumbai`

7. gen aggregate

`./proof-aggregation gen-aggregated-proof proof1.json proof2.json agg.json`

8. submit proof

`npx hardhat run ./scripts/5_submit_batch_proof.ts --network mumbai`