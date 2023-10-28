# Digital-Document-Verification-using-Blockchain
Digital Document Verification using Blockchain and IPFS. This is the Final year project for Engineering 2020–24 SSGMCE.
## Introduction
The students graduating either choose to continue their studies or go hunting for jobs. In both cases, they are required to submit their certificates. A couple of times students find that they have lost the certificates and they need to reapply, which is a long procedure and has to go through multiple verifications, taking a lot of time. Also, considering the increase in forgery of documents, the organization to which the certificates are submitted finds it difficult to verify the certificates. There is no effective way to check for forgery.
## Aim
To address the issue of the distribution and verification of certificates, we propose a decentralized application that does the digital certificate generation and certificate verification processes. An effective solution by integrating the concepts of blockchain, ipfs and QR codes has been proposed. The system saves paper, cuts management costs, prevents forgery, and provides accurate and reliable information about certificates.
## Components
1. Student: upload the document and request verification from the university.
2. University: verifies the document.
3. Company: check the verification status.
4. Owner: register the universities and company.
## Functions
1. student:
   - select the university and upload the document
   - select which company can access the status of selected document
2. University:
   - register as University (needs to be verified by Owner)
   - select the document id for verification and upload the original document approved by university and verify
   - select which company can access the status of selected document
3. Company:
   - register as Company (needs to be verified by Owner)
   - scan the QR code of document and check status
   - or upload document submitted by student to check its authenticity and verification status
4. Owner:
   - verify the university
   - verify the company
## Workflow
- when student upload the document, it is pining on IPFS and its CID (hash) is stored in the blockchain as <br> mapping{documentID->student_address,hash,university_address,verifiedStatus}.
- Then the university selects the document ID to be verified or sees the document uploaded by the student. To verify this document, they have to submit the original document issued by the university for verification. If both documents are the same, then the ipfs will return the same hash; otherwise, a new hash is returned, which is checked in the blockchain. If it is found to be the same, then verification status is changed to verified; otherwise, it remains unverified. \
and after verification A QR code is embedded in a document with a document ID for verification.
- Company can scan the QR to see the verification status and document. \
or they can upload the document submitted by the student, then ifps will return the hash, and blockchain will check if it is the same as the uploaded document hash or not. if it is, then the document is authentic and its verification status is returned; otherwise, the document is Fake (counterfeit)
## What we need 
1) npm , Node.js //for packages and server
2) Ganache //for local blockchain with dummy accounts loaded with ethers for transactions
3) IPFS client //for storing documents in decentralized storage
4) MetaMask //for connecting the website with blockchain (localhost), for transactions, and for accounts and token management
5) Remix //for deploying contract on local blockchain
## Software Requirements
1) npm , Node.js
2) Ganache
3) IPFS desktop client
4) MetaMask Chrome Extension
5) Remix 
## Installation
> step 1. Clone the repository to your local machine:
```
git clone https://github.com/ykstech/Digital-Document-Verification-using-Blockchain.git
```
>step 2. Navigate to repository:
```
cd Digital-Document-Verification-using-Blockchain
```
>step 3. Navigate to ipfs_frontend folder
```
cd ipfs_frontend
```
>step 4 Install dependencies for frontend
```
Digital-Document-Verification-using-Blockchain>ipfs_frontend>npm install
```
>step 5 Navigate to ipfs-backend:
```
cd..
cd ipfs-backend
```
>step 6 Install dependencies for backend
```
Digital-Document-Verification-using-Blockchain>ipfs-backend>npm install
```

## File structure Tree
```
Digital-Document-Verification-using-Blockchain
|── Test1 //main project folder
      ├── ipfs_frontend  //frontend
      │        ├── src
      │        │     └── pages
      │        │           ├── Home.js  //landing page
      │        │           ├── OwnerPage.js  
      │        │           ├── StudentPage.js
      │        │           ├── UniversityPage.js
      │        │           ├── CompanyPage.js
      │        │           └── MetaMaskInfo.js  //connection with SC and metamask 
      │        ├── App.js           //main file
      │        └── TestContract.js  //contract address and abi
      ├── ipfs-backend   //backend
      │       └── server.js 
      └── SmartContract  //smartcontract
              └── Test.sol
```
## Setup (Windows)
step 1. start Ganache (Default settings) \
step 2. start ipfs client               \
step 4. start MetaMask and setup account \
step 5. switch network to Localhost \
step 6. import account using private key from Ganache dummy accounts (atleast 4 accounts with names as: owner, student, university and company) \
step 5. open Remix in chrome and copy Test.sol and paste it as a new file inside contracts folder \
  - click on metamask and connect with this remix website
  - change the account to owner
  - then click deploy smart contract and confirm transaction
  - copy deployed contract address and paste into address constant in TestContract.js
## Run the project
>step 1. Navigate to ipfs-frontend and write:
```
npm start
```
>step 2. Navigate to ipfs_backend and write:
```
npm start
```
>step 3. Connect the website with MetaMask

BOOM ALL DONE!!
## project Interaction
*Note: The page name should match with the metamask account name.
for ex. When the student page is open, the student account is set in metamask and its address is shown on screen\
// now its not the correct time to explain the functionalities because UI/CSS is not completed , but if you want to try you can use it , all functions are working 

      


