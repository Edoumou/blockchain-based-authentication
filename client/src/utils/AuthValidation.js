import SignData from './SignData';

const AuthValidation = async (username, accountAddress, password, digiCode, web3, contract) => {

    let userAddress = await contract.methods.getUserAddress().call({ from: accountAddress });

    if (userAddress.toLowerCase() !== accountAddress.toLowerCase()) {
        return false;
    } else {
        let signedData = await SignData(username, accountAddress, web3);
        let passwordDigiCodeHash = await web3.eth.accounts.hashMessage(password + digiCode);

        let hash = await web3.eth.accounts.hashMessage(signedData + passwordDigiCodeHash);

        // get hash from the contract
        let hashFromContract = await contract.methods.getSignatureHash().call({ from: accountAddress });

        if (hash === hashFromContract) {
            return true;
        } else {
            return false;
        }
    }
}

export default AuthValidation;