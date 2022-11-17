<<<<<<< HEAD
# BURFY3
=======
## Details

A decentralised p2p insurance platform.

Every user can create an insurance contract, which will have following informations:
1) Title
2) Description
3) Minimum members
4) Time after which no new user can enter and insurance will start
5) validity, that is for how long insurance will remains
6) claim time: that is for how long after insurance ended, can a user make an insurance claim for their loss.
7) Percentage divided among judges
8) judging time: how much time will judge get to judge all the claims.

After an insurance contract is created, anyone who wants join a particular contract is supposed to send a request for membership. If every member of that contract accept the request then the user can add himself to the contract.

Judges are selected using chainlink oracles, one for getting random numbers to select judges randomly and other to perform function after certain period which is also done using oracles. So custom logic based automation + random number is used from chainlink oracles.

If no judges had fullfilled their jobs then everyone except those judges will get their fund inside the pool back. If no claim have majority votes then judges who didn't fullfilled won't get their funds back and everyone else will get their funds back. If claim request is fullfilled then remaining amount is distributed among all the members. Also first judges get their percentage from total pool amount as a prize for fullfilling their job.
[Fullfillment logic in smart contract](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/smart_contracts/contracts/BurfyInsurance.sol#L266)


All contracts are deployed on fantom testnet. And moralis is used for getting data from contracts and performing other tasks like pushing json to ipfs folder, etc.
[smart contract address](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/client/my-app/constants/contractAddress.json)

| Tech stack used                   |
| --------------------------------- |
| [Fantom](#fantom)               |
| [Moralis](#moralis)               |
| [Chainlink](#chainlink)           |
| [Mantine UI](#mantine-ui)         |

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

### Moralis

Connection to blockchain and uploading json to folder in ipfs was done using moralis and moralis api.

#### Atleast one example: 

[uploading json inside a folder in ipfs](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/client/my-app/pages/index.js#L38)

[uploading json inside a folder in ipfs](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/client/my-app/components/InsurancePage.jsx#L358)

### Chainlink

Chainlink was used to randomly select an image out of all images of the post while also considering rarities assigned while minting.

#### Atleast one example: 

[perform upkeep](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/smart_contracts/contracts/Burfy.sol#L84)

[fulfill random words](https://github.com/Ahmed-Aghadi/BURFY3/blob/main/smart_contracts/contracts/Burfy.sol#L100)

### Mantine UI

Mantine ui was heavily used in front end for styling.
>>>>>>> dcfaae06ac1fa9fc42bc08795c2ec035f9baf670
