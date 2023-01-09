pragma solidity >=0.5.0;

interface IBerryCallee {
    function BerryCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
