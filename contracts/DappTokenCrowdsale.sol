pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";

contract DappTokenCrowdsale is Crowdsale, MintedCrowdsale {
    constructor(
        uint256 _rate,
        address _wallet,
        ERC20 _token
    ) public Crowdsale(_rate, _wallet, _token) {}
}
