# Blockchain-based Authentication

This project shows how the use of Blockchain allows to create a Blockchain-based authentication where the user's login data hash is stored in a smart contract.

---

## What authentication is

Authentication is a security process through which a proof of identity or ownership is required. It allows a user owning an account login credentials to login to their account while denying access to others. In most cases, the user's login information are stored in a server, therefore the authentication process is an interaction between the user and a server, and since this can give access to sensitive information, the server in which login credential are stored must be secured. A blockchain-based authentication (BBA) is proposed in order to lower malicious access and increase security to the authentication process.

## BBA schema

Blockchain can be defined as a decentralized, distributed and cryptographic secured ledger that allows to record data. One of the most important features of Blockchain is immutability, which prevents to change or alter data once they have been added to the Blockchain. Since data on the Blockchain is immutable, so is information about its owner, therefore, a BBA system can be used to secure authentication process in a decentralized and immutable way. In this project, we propose an authentication schema based on the Blockchain technology. User's login data are stored as a hash to the Blockchain via a smart contract, and each time a user request an access to a website for example, the hash derived from credentials provided by the user is compared with the hash that is stored in the smart contract, if their is a match then the user is authorized to access the website, if not, then the access is denied. What is interesting with this schema is that the user must be connected with the ethereum address that was used in the sign up process, since this address is used to generate the user's login hash. The web3 function sign is used to generate a unique signature based on the username and the user's ethereum address, and the password and a 6 digit code provided by the user are used to generate a ash which, together with the unique signature's hash are used to generate the final hash that is stored in the smart contract. To generate the same hash, the user must provide correct username, password, 6 digit code and be connected with the right ethereum address to generate the right signature.

## BBA smart contract and Javascript validation functions

During sign up process, the user's login hash must be stored to the smart contract, and since this action writes information on the Blockchain, the user must pay the transaction gas. This could demotivate users to use BBA, however, one can imagine storing this information not in a smart contract, but either on IPFS for public use or to a private Blockchain for business use. The gas fees are paid only for signing up, the login process does not require writing data in the smart contract, however, approving the data signature with the account which is free of gas is required. The smart contract is shown bellow with javascript functions that allow to validate the process.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

/**
* @dev smart contract that allows to store login data hash
* by Samuel Gwlanold Edoumou
*/
contract Authentication {
    uint256 public nbOfUsers;

    struct User {
        string signatureHash;
        address userAddress;
    }

    mapping(address => User) private user;

    constructor() {
        nbOfUsers = 0;
    }

    function register(string memory _hash) public {
        require(
            user[msg.sender].userAddress ==
                address(0x0000000000000000000000000000000000000000),
            "already registered"
        );

        user[msg.sender].signatureHash = _hash;
        user[msg.sender].userAddress = msg.sender;
        nbOfUsers++;
    }

    function getSignatureHash() public view returns (string memory) {
        require(msg.sender == user[msg.sender].userAddress, "Not allowed");

        return user[msg.sender].signatureHash;
    }

    function getUserAddress() public view returns (address) {
        return user[msg.sender].userAddress;
    }
}
```
