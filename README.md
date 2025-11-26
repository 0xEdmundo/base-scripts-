# Base Scripts – Tools for Base Builders

**Network:** Base  
**Tools:** Auto verification, deploy scripts, gas estimation, ERC20 utilities  

This repository provides essential scripts and tools for developers building on the **Base** network.  
The goal is to simplify contract deployment, verification, and common on-chain operations during development.

Follow my builder journey on Farcaster: **@Alignerz_**  
BaseScan: https://basescan.org  

---

## 🚀 Features

- **Auto Verify Script** → Verify any contract on BaseScan with one command  
- **Deploy Script** → Deploy ERC20 or custom contracts quickly  
- **Gas Estimation Script** → Estimate gas usage for ERC20 transfers  
- **Sample ERC20 Contract** included  
- Pre-configured Hardhat environment for Base  
- `.env.example` for secure environment setup  

---

## 🛠 Installation

```bash
npm install

cp .env.example .env

# Then open the .env file and set:
# PRIVATE_KEY=0xYourPrivateKey
# BASESCAN_API_KEY=YourBaseScanAPIKey
```

Get your BaseScan API key here:  
https://basescan.org/myapikey

---

## 🚀 Deploy Example Contract (SampleToken)

```bash
npx hardhat run scripts/deploy.js --network base
```

This script deploys the `SampleToken` ERC20 contract and prints the deployed address.

---

## 🔍 Verify Contract on BaseScan

```bash
node scripts/verify-on-basescan.js <CONTRACT_ADDRESS>
```

This script automatically:

- Runs the Hardhat verification task  
- Submits source code to BaseScan  
- Uses optimized Solidity compiler settings  
- Shows verification status in the terminal  

---

## 🧮 Estimate ERC20 Transfer Gas

```bash
node scripts/estimate-transfer-gas.js <TOKEN_ADDRESS> <TO_ADDRESS> <AMOUNT>
```

Example:

```bash
node scripts/estimate-transfer-gas.js 0xToken 0xRecipient 10
```

This tool:

- Connects to Base  
- Loads ERC20 ABI  
- Estimates the gas needed for `transfer()`  
- Prints the gas cost in a clean format  

Useful for:

- Airdrops  
- Mass transfers  
- Fee estimation  
- Optimization before mainnet deployment  

---

## 📄 Contract Example

The included ERC20 contract:

```
contracts/SampleToken.sol
```

Features:

- Uses OpenZeppelin ERC20 implementation  
- Mints **1,000,000 tokens (18 decimals)** to the deployer  
- Clean, simple, Base-ready  

---

## 🧩 Network Configuration

Hardhat is pre-configured with two networks:

- **Base Mainnet** → `https://mainnet.base.org`
- **Base Sepolia Testnet** → `https://sepolia.base.org`

You can easily modify or extend networks in:

```
hardhat.config.js
```

---

## 📂 Available Scripts

| Script | Description |
|--------|-------------|
| `deploy.js` | Deploys SampleToken or custom contracts |
| `verify-on-basescan.js` | Automatically verifies any contract on BaseScan |
| `estimate-transfer-gas.js` | Estimates gas usage for ERC20 transfers |

---

## 🔐 Security Notice

- Never commit real private keys  
- `.env` is ignored by git (see `.gitignore`)  
- Test on Base Sepolia before mainnet  
- Always verify contract source code  

For detailed security practices, see:

```
SECURITY.md
```

---

## 📝 License

MIT License © 2025
