// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract Yebelo{
    address public owner;
    struct Slabs{
        uint slab0;
        uint slab1;
        uint slab2;
        uint slab3;
        uint slab4;
        string deposited;
    }
    Slabs  sla;
    mapping (address=>Slabs) public user;
    constructor(){
    owner= msg.sender;
    }

    function getTokens(address _token ) public   payable  {
        uint Nval=IERC20(_token).balanceOf(address(this));
        
        if(Nval!=0 && Nval<=100){
                sla.slab0 = Nval;
                sla.deposited = "Previous transaction Deposited in Slab0";
        }else{
                Nval-=100;
                sla.slab0 = 100  ;
                
            if(Nval!=0 && Nval<=200){
                    sla.slab1 = Nval;
                    sla.deposited = "Previous transaction Deposited in Slab0 and Slab1";
                }else{
                    Nval-=200;
                    sla.slab1 = 200  ;
                    if(Nval!=0 && Nval<=300){
                            sla.slab2 = Nval;
                            sla.deposited = "Previous transaction Deposited in Slab0, Slab1 and Slab2";
                        }else{
                            Nval-=300;
                            sla.slab2 = 300  ;
                            
                             if(Nval!=0 && Nval<=400){
                                    sla.slab3 = Nval;
                                    sla.deposited = "Previous transaction Deposited in Slab0, Slab1, Slab2 and Slab3";
                                }else{
                                    Nval-=400;
                                    sla.slab3 = 400  ;
                                    
                                      if(Nval!=0 && Nval<=500){
                                            sla.slab4 = Nval;
                                            sla.deposited = "Previous transaction Deposited in Slab0, Slab1, Slab2, Slab3 and Slab4";
                                        }else{
                                            Nval-=500;
                                            sla.slab4 = 500  ;
                                            
                                        }
                                    
                                }
                            }
                        }
                     }    
    
            user[msg.sender]=sla;

    }
}