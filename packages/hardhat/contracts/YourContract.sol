//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

contract YourContract {
	// State Variables
    mapping (address => uint256) public dieticianBalance;
    mapping (address => uint256) public dieticianRate;
    mapping (address =>uint256) public studentLessonDate;

    function setDieticianRate(uint256 _amount) public{
        dieticianRate[msg.sender] = _amount;
    }

    function bookDietician(address _dietician, uint256 timestamp) payable public {
        require(msg.value >= dieticianRate[_dietician], "You need to send more, it's less than the rate");
        studentLessonDate[msg.sender] = timestamp;
        dieticianBalance[_dietician] += dieticianRate[_dietician];
    }


	address public immutable owner;
	uint256 public totalCounter = 0;


	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts
	constructor(address _owner) {
		owner = _owner;
	}

	// Modifier: used to define a set of rules that must be met before or after a function is executed
	// Check the withdraw() function
	modifier isOwner() {
		// msg.sender: predefined variable that represents address of the account that called the current function
		require(msg.sender == owner, "Not the Owner");
		_;
	}

	/**
	 * Function that allows the owner to withdraw all the Ether in the contract
	 * The function can only be called by the owner of the contract as defined by the isOwner modifier
	 */
	function withdraw() public isOwner {
		require(dieticianBalance[msg.sender] > 0, "No balance to withdraw");
	

		(bool success, ) = owner.call{ value: address(this).balance }("");
		require(success, "Failed to send Ether");
	}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}