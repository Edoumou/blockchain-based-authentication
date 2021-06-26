const ipfsConnection = require('./ipfsConnection');

/**
 * 
 * @param {string} cid 
 * @returns data cid
 */
async function FetchFromIPFS(cid) {
    // connect to ipfs
    let ipfs = ipfsConnection.default;

    // get data from the cid
    let data = await ipfs.cat(cid);

    return data;

}

export default FetchFromIPFS;