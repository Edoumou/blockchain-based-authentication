const ipfsConnection = require('./ipfsConnection');

/**
 * 
 * @param {Object} data 
 * @returns data cid
 */
async function SendToIPFS(data) {
    // connect to ipfs
    let ipfs = ipfsConnection.default;

    // add data to ipfs through `add` function,
    // it returns the cid. One could encrypt data
    // before sending them to ipfs (good practice)

    let cid;
    await ipfs.add(data)
        .then(res => {
            cid = res;
        })
        .catch(err => console.error(err));

    return cid;
}

export default SendToIPFS;