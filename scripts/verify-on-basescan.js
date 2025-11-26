const { execSync } = require("child_process");

if (process.argv.length < 3) {
  console.log("Usage: node scripts/verify-on-basescan.js <CONTRACT_ADDRESS>");
  process.exit(1);
}

const address = process.argv[2];

console.log("🔍 Verifying on BaseScan...");
console.log("Contract:", address);

try {
  execSync(
    `npx hardhat verify --network base ${address}`,
    { stdio: "inherit" }
  );
  console.log("✅ Verification request sent!");
} catch (err) {
  console.error("❌ Verification failed:");
  console.error(err.message);
}
