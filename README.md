# Base Scripts – Tools for Base Builders

**Network:** Base  
**Tools:** Auto verification, deploy scripts, ABI helpers  

This repo contains a set of tools for builders on **Base mainnet**.  
You can verify contracts, deploy new ones, estimate gas, and automate common workflows.

Follow my builder journey on Farcaster: **@Alignerz_**  
BaseScan: https://basescan.org  

---

## 🚀 Features

- **Auto Verify Script** → One command to verify contracts on BaseScan  
- **Deploy Script** for quick deployment  
- **Sample ERC20 Contract**  
- `.env.example` for easy setup  
- Hardhat pre-configured for Base mainnet & testnet  

---

## 🛠 Install

```bash
npm install

cp .env.example .env

# then open .env and set:
# PRIVATE_KEY=0x...
# BASESCAN_API_KEY=your_basescan_key
Get your API key here:
https://basescan.org/myapikey

🚀 Deploy Example Contract (SampleToken)
bash
Kodu kopyala
npx hardhat run scripts/deploy.js --network base
After deployment, copy your contract address.

🔍 Auto Verify on BaseScan
bash
Kodu kopyala
node scripts/verify-on-basescan.js <CONTRACT_ADDRESS>
This script automatically:

Uses Hardhat verify task

Sends verification request to BaseScan

Uses optimized compiler settings

Prints verification result in the terminal

📄 Contract Example
contracts/SampleToken.sol is a simple fixed-supply ERC20 contract built with OpenZeppelin.

🧩 Networks
Hardhat is pre-configured for:

Base Mainnet

Base Sepolia testnet

You can easily extend this configuration with more networks if needed.

📝 License
MIT License © 2025

markdown
Kodu kopyala

---

### ✅ Bu versiyon %100 düzgün:
- Kod blokları *tam ve doğru* kapanıyor  
- “Deploy” bölümü artık kod içine kaçmıyor  
- GitHub’da hepsi **temiz görünür**  
- “Copy code” düzgün çıkar  

İstersen sana **görsel önizleme** gibi safe bir ASCII örnek de üretebilirim; veya README’yi repo’ya push edecek şekilde komple zip formatında bile verebilirim.

Dilersen şimdi **LICENSE**, **package.json**, **hardhat.config.js** dosyalarını da aynı temiz formatla tek parça vereyim.
