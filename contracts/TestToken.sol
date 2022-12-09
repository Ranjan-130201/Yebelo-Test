// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TestToken is ERC20("TT","testToken"){
 address public owner;
 constructor() {
     owner=msg.sender;
     _mint(owner,10000);
 }
 function mint() public{
     _mint(msg.sender,1000);
 }
 function transferToken(address add,uint val)public {
     transfer(add,val);
 }
}