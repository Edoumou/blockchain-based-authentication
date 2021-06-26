import SignData from './SignData';

const AuthenticationHash = async (username, accountAddress, password, digiCode, web3) => {
    let signedMessage = await SignData(username, accountAddress, web3);
    let passwordDigiCodeHash = await web3.eth.accounts.hashMessage(password + digiCode);

    return await web3.eth.accounts.hashMessage(signedMessage + passwordDigiCodeHash);
}

export default AuthenticationHash;