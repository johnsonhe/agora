// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AGOToken is ERC20 {
  constructor() ERC20("AgoraToken", "AGO") {}


  function mintTokensOnCompletion() internal {
    _mint(msg.sender, 100);
  }

  function mintTokensOnNewLevel() internal {
    _mint(msg.sender, 10);
  }
}