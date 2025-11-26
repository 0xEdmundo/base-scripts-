const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [signer] = await ethers.getSigners();

  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log("Usage: node scripts/estimate-transfer-gas.js <TOKEN_ADDRESS> <TO_ADDRESS> <AMOUNT>");
    console.log("Example: node scripts/estimate-transfer-gas.js 0xToken 0xRecipient 10");
    process.exit(1);
  }

  const [tokenAddress, to, amountRaw] = args;

  // Amount in human-readable form (e.g. "10" tokens)
  const amount = ethers.parseUnits(amountRaw, 18);

  const erc20Abi = [
    "function transfer(address to, uint256 amount) external returns (bool)"
  ];

  const token = new ethers.Contract(tokenAddress, erc20Abi, signer);

  console.log("🧮 Estimating gas for ERC20 transfer on Base...");
  console.log("Token:    ", tokenAddress);
  console.log("From:     ", signer.address);
  console.log("To:       ", to);
  console.log("Amount:   ", amountRaw, "(18 decimals)");

  const gasEstimate = await token.transfer.estimateGas(to, amount);

  console.log("-------------------------------------");
  console.log("Estimated gas:", gasEstimate.toString());
  console.log("-------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
