# BURFY3

## Details

A decentralised p2p insurance platform.

Every user can create an insurance contract, which will have following informations:

1. Title
2. Description
3. Minimum members
4. Time after which no new user can enter and insurance will start
5. validity, that is for how long insurance will remains
6. claim time: that is for how long after insurance ended, can a user make an insurance claim for their loss.
7. Percentage divided among judges
8. judging time: how much time will judge get to judge all the claims.

After an insurance contract is created, anyone who wants join a particular contract is supposed to send a request for membership. If every member of that contract accept the request then the user can add himself to the contract.

Judges are selected using chainlink oracles, one for getting random numbers to select judges randomly and other to perform function after certain period which is also done using oracles. So custom logic based automation + random number is used from chainlink oracles.

If no judges had fullfilled their jobs then everyone except those judges will get their fund inside the pool back. If no claim have majority votes then judges who didn't fullfilled won't get their funds back and everyone else will get their funds back. If claim request is fullfilled then remaining amount is distributed among all the members. Also first judges get their percentage from total pool amount as a prize for fullfilling their job.
[Fullfillment logic in smart contract](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/smart_contracts/contracts/BurfyInsurance.sol#L266)

All contracts are deployed on fantom testnet, polygon mumbai and goerli. And moralis is used for getting data from contracts and performing other tasks like pushing json to ipfs folder, etc.
[smart contract address](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/client/my-app/constants/contractAddress.json)

Multichain is used to let user interact to smart contract being on different chain. User can interact with insurance contract created on Fantom testnet being on goerli ( paying gas fees on goerli ) or vice versa and dApp will automatically handle that. dApp will pay the fees on the chain your wallet is connected to. For polygon mumbai, anycallv7 isn't there, so multichain compatibility isn't there for polygon mumbai. 

User can also chat in comment section which is created using Orbis.club which uses CERAMIC under the hood.

| Tech stack used           |
| ------------------------- |
| [Fantom](#fantom)         |
| [Polygon](#polygon)       |
| [MultiChain](#multichain) |
| [Moralis](#moralis)       |
| [Chainlink](#chainlink)   |
| [Orbis Club](#orbis-club) |
| [Mantine UI](#mantine-ui) |

## Deployements

Deployed website at Vercel: [Burfy3](https://burfy3.vercel.app/)

## Getting Started

To run frontend :

```bash
cd client/my-app

yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To deploy smart contracts to localhost :

```bash
cd smart_contracts/

yarn hardhat deploy --network localhost
```

## Sponsors Used

### Fantom

All the smart contracts are deployed on fantom testnet.

#### Atleast one example:

[Deployements](https://github.com/Ahmed-Aghadi/BURFY3/tree/main/smart_contracts/deployments/fantomtest)

[Smart Contracts](https://github.com/Ahmed-Aghadi/BURFY3/tree/main/smart_contracts/contracts)

### Polygon

All the smart contracts are deployed on polygon mumbai.

#### Atleast one example:

[Deployements](https://github.com/Ahmed-Aghadi/BURFY3/tree/main/smart_contracts/deployments/fantomtest)

[Smart Contracts](https://github.com/Ahmed-Aghadi/BURFY3/tree/main/smart_contracts/contracts)

### Multichain

Multichain compatibility is added using multichain

#### Atleast one example:

[FrontEnd logic](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/client/my-app/components/InsurancePage.jsx#L379)

[Smart Contract Function which uses anycall](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/smart_contracts/contracts/Burfy.sol#L86)

[Smart Contract Function anyExecute](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/smart_contracts/contracts/BurfyInsurance.sol#L156)

### Moralis

Connection to blockchain and uploading json to folder in ipfs was done using moralis and moralis api.

#### Atleast one example:

[Smart contract interaction using moralis API](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/client/my-app/pages/index.js#L52)

### Chainlink

Chainlink was used to randomly select an image out of all images of the post while also considering rarities assigned while minting.

#### Atleast one example:

[perform upkeep](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/smart_contracts/contracts/Burfy.sol#L192)

[check upkeep](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/smart_contracts/contracts/Burfy.sol#L216)

[fulfill random words](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/smart_contracts/contracts/Burfy.sol#L208)

### Orbis Club

User can chat in comment section which is created using Orbis.club which uses CERAMIC under the hood.

#### Atleast one example:

[send message function](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/client/my-app/components/ChatBox.js#L70)

### Mantine UI

Mantine ui was heavily used in front end for styling.
