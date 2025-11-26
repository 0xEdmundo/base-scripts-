# Security Policy

This repository contains helper scripts and configuration files for deploying and verifying smart contracts on the Base network.

## 🔐 Private Keys

- Never commit your **private key** or any real secrets to this repository.
- Always store secrets in a local `.env` file (see `.env.example`) which is ignored by git.
- Do not share screenshots or logs that contain sensitive information.

## ⚙️ Environment Variables

- The `.env` file is **not** tracked by git and should remain local.
- Required variables:
  - `PRIVATE_KEY`
  - `BASESCAN_API_KEY`

## 📦 Dependencies

- Only install dependencies from trusted sources (npm, official packages).
- Review package updates before applying them in production.

## 🧪 Test Before Mainnet

- Whenever possible, test scripts and contracts on **Base Sepolia** before using them on Base mainnet.
- Verify contract source code and addresses before interacting with them.

If you discover a security issue related to these scripts, consider rotating your keys and reviewing all deployed contracts and transactions.
