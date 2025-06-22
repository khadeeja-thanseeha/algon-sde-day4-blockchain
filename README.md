output of initial code when difficulty level=4:

⛏ Mining block 1...
Block mined: 00003419e02332889a1dd7ed7d523f8e3219f0b24fc15b3ded7f10c19af2b28d
⛏ Mining block 2...
Block mined: 0000581de670cd2195f3bbb18c02d5b39d6191d7b9529dc3c79eea6c1c72af89
{
  "chain": [
    {
      "index": 0,
      "timestamp": "1750429429978",
      "data": "Genesis Block",
      "previousHash": "0",
      "nonce": 0,
      "hash": "2087f504dc73145b1e7687e74f1ac4ead3729a640f536866e587bfcb0eba7806"
    },
    {
      "index": 1,
      "timestamp": "1750429430001",
      "data": {
        "amount": 4
      },
      "previousHash": "2087f504dc73145b1e7687e74f1ac4ead3729a640f536866e587bfcb0eba7806",
      "nonce": 54502,
      "hash": "00003419e02332889a1dd7ed7d523f8e3219f0b24fc15b3ded7f10c19af2b28d"
    },
    {
      "index": 2,
      "timestamp": "1750429430358",
      "data": {
      },
      "previousHash": "00003419e02332889a1dd7ed7d523f8e3219f0b24fc15b3ded7f10c19af2b28d",
      "nonce": 23573,
      "hash": "0000581de670cd2195f3bbb18c02d5b39d6191d7b9529dc3c79eea6c1c72af89"
    }
  ],
  "difficulty": 4
}
Is blockchain valid? true



After changing difficulty level 4 to 5 output is:

⛏ Mining block 1...
Block mined: 000009b90a112b6998fc8d23f59f0c367bbbfb2ffb99c7ef49a064acab4a0a07
⛏ Mining block 2...
Block mined: 000005a24c3392e493b1fb195690ea3c1bb6e1356b2636ea2ce623cf42764a36
{
  "chain": [
    {
      "index": 0,
      "timestamp": "1750429915451",
      "data": "Genesis Block",
      "previousHash": "0",
      "nonce": 0,
      "hash": "d8f4bd84f2985c73c2527898e6ca11702fd4ae12763c05628d2a439a824823b5"
    },
    {
      "index": 1,
      "timestamp": "1750429915462",
      "data": {
        "amount": 4
      },
      "previousHash": "d8f4bd84f2985c73c2527898e6ca11702fd4ae12763c05628d2a439a824823b5",
      "nonce": 429143,
      "hash": "000009b90a112b6998fc8d23f59f0c367bbbfb2ffb99c7ef49a064acab4a0a07"
    },
    {
      "index": 2,
      "timestamp": "1750429918615",
      "data": {
      },
      "previousHash": "000009b90a112b6998fc8d23f59f0c367bbbfb2ffb99c7ef49a064acab4a0a07",
      "nonce": 2071302,
      "hash": "000005a24c3392e493b1fb195690ea3c1bb6e1356b2636ea2ce623cf42764a36"
    }
  ],
  "difficulty": 5
}
Is blockchain valid? true

After tampering with one block and check if isChainValid() with the following code:

myCoin.chain[1].data = { amount: 100000 };
myCoin.chain[1].hash = myCoin.chain[1].calculateHash();

Output is:

⛏ Mining block 1...
Block mined: 00000cb27816499eec24ae15f1b14fe6adca035ee03e8adf333f783a9610981b
⛏ Mining block 2...
Block mined: 00000a012c1722a7b9b561cc41a2521486da3c801d2c867c4ad8731ee7ff42f8
{
  "chain": [
    {
      "index": 0,
      "timestamp": "1750430019857",
      "data": "Genesis Block",
      "previousHash": "0",
      "nonce": 0,
      "hash": "af4431563ff490f6864aa30f0a96fddb52faf20ef860305bc3fd3dba1e7675b3"
    },
    {
      "index": 1,
      "timestamp": "1750430019881",
      "data": {
        "amount": 100000
      },
      "previousHash": "af4431563ff490f6864aa30f0a96fddb52faf20ef860305bc3fd3dba1e7675b3",
      "nonce": 698815,
      "hash": "632a7bdb9e3edc13e1c1944c21c081a6c2ca84d2a8a42120bd92215e0b10113d"
    },
    {
      "index": 2,
      "timestamp": "1750430026605",
      "data": {
      },
      "previousHash": "00000cb27816499eec24ae15f1b14fe6adca035ee03e8adf333f783a9610981b",
      "nonce": 1421550,
      "hash": "00000a012c1722a7b9b561cc41a2521486da3c801d2c867c4ad8731ee7ff42f8"
    }
  ],
  "difficulty": 5
}
Is blockchain valid? false
