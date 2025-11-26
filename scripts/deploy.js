const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("SampleToken");
  const token = await Token.deploy();
  await token.waitForDeployment();

  console.log("SampleToken deployed to:", token.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
