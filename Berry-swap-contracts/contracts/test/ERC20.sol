pragma solidity =0.5.16;

import '../BerryERC20.sol';

contract ERC20 is BerryERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
