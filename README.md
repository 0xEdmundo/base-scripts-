# Base Scripts – Tools for Base Builders

**Network:** Base  
**Tools:** Auto verification, deploy scripts, ABI helpers  

This repository provides essential scripts and tools for developers building on the **Base** network.  
You can deploy contracts, verify them automatically on BaseScan, and use ready-made configurations to speed up development.

Follow my builder journey on Farcaster: **@Alignerz_**  
BaseScan: https://basescan.org  

---

## 🚀 Features

- **Auto Verify Script** → Verify any contract on BaseScan with a single command  
- **Deploy Script** → Deploy ERC20 or custom contracts in seconds  
- **Sample ERC20 Contract** included  
- Pre-configured Hardhat setup for Base  
- `.env.example` for easy environment setup  

---

## 🛠 Installation

```bash
npm install

cp .env.example .env

# Then open the .env file and add:
# PRIVATE_KEY=0xYourPrivateKey
# BASESCAN_API_KEY=YourBaseScanAPIKey
```

Get your BaseScan API key:  
https://basescan.org/myapikey  

---

## 🚀 Deploy Example Contract (SampleToken)

```bash
npx hardhat run scripts/deploy.js --network base
```

After deployment, the script prints your deployed contract address.

---

## 🔍 Verify Contract on BaseScan

```bash
node scripts/verify-on-basescan.js <CONTRACT_ADDRESS>
```

This script automatically:

- Executes the Hardhat verification task  
- Sends the contract source to BaseScan  
- Applies optimized compiler settings  
- Prints verification status in the terminal  

---

## 📄 Contract Example

The example ERC20 contract is located at:

```
contracts/SampleToken.sol
```

It uses the OpenZeppelin ERC20 implementation and deploys 1,000,000 tokens to the deployer.

---

## 🧩 Network Configuration

Hardhat is pre-configured for:

- **Base Mainnet** → `https://mainnet.base.org`
- **Base Sepolia Testnet** → `https://sepolia.base.org`

You can modify or add networks inside `hardhat.config.js`.

---

## 📝 License

MIT License © 2025
