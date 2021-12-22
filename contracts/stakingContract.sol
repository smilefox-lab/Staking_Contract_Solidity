// Define the version of Solidity to use for this Smart Contract
// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;
import "@openzeppelin/contracts/access/Ownable.sol";
// Define your Smart Contract with the "Contract" keyword

contract StakingContract is Ownable{
    string private _myString = "String";

    function getString() external view returns (string memory) {
        return _myString;
    }

    function setString(string calldata newString) external {
        _myString = newString;
    }
}
