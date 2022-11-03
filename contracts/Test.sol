pragma solidity ^0.4.17;

contract Test {
    address private manager;
    address[] public players;
    function Test() public {
        manager=msg.sender;    
    }

    function getManager() public view returns(address) {
        return manager;

    }
    
}