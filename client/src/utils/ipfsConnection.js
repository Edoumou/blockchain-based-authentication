const IPFS = require('ipfs-mini');

const ipfsConnection = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https'
})

export default ipfsConnection;