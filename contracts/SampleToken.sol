// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SampleToken is ERC20 {
    constructor() ERC20("Sample Token", "SAMP") {
        _mint(msg.sender, 1_000_000 * 1e18);
    }
}
