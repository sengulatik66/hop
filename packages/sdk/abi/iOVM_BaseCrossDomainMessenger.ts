export default [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "msgHash",
        "type": "bytes32"
      }
    ],
    "name": "RelayedMessage",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "message",
        "type": "bytes"
      }
    ],
    "name": "SentMessage",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_send",
        "type": "bool"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_target",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      },
      {
        "internalType": "uint32",
        "name": "_gasLimit",
        "type": "uint32"
      }
    ],
    "name": "sendMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "xDomainMessageSender",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
