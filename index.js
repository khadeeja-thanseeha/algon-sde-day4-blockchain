const {Blockchain,Block} = require('./blockchain');

const myCoin = new Blockchain();

console.log('⛏ Mining block 1...');
myCoin.addBlock(new Block(1, Date.now().toString(), { amount: 4 }));

console.log('⛏ Mining block 2...');
myCoin.addBlock(new Block(2, Date.now().toString(), { amount: 8 }));

myCoin.chain[1].data = { amount: 100000 };
myCoin.chain[1].hash = myCoin.chain[1].calculateHash();

console.log(JSON.stringify(myCoin, null, 2));
console.log('Is blockchain valid?', myCoin.isChainValid());

