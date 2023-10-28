import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAddress, contractAbi } from './ContractInfo'; // Import contractAddress and contractAbi

function MetaMaskInfo({Contract ,Account ,Web3var}) {
 
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);


  useEffect(() => {
    async function loadMetaMaskData() {
      //window.ethereum
      if (window.ethereum) {
      
        const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const cAddress = contractAddress;
      const cAbi = contractAbi // Replace with your contract's ABI
      const contractInstance = new ethers.Contract(cAddress, cAbi, signer);

        setWeb3(provider);
       //send the we3 instance to other file//
         Web3var(provider);

        // Create a contract instance
        setContract(contractInstance);
          //send the contract instance to other files//
        Contract(contractInstance);

        try {
          // Request access to accounts
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const currentAccount = accounts[0];

          // Set the account
          setAccount(currentAccount);
          //send the account to other files//
          Account(currentAccount);

          // Listen for changes in the active account, network ID, and balance
          window.ethereum.on('accountsChanged', (newAccounts) => {
            setAccount(newAccounts[0]);
            //update the account//
        Account(newAccounts[0]);
          });


        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      }
    }

    loadMetaMaskData();
  }, []);

  // Function to handle connecting to MetaMask
  async function connectToMetaMask() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    }
  }

  return (
    <div>
      <h2>MetaMask Account Info</h2>
      <p>Account: {account}</p>
      
     {!contract && <button onClick={connectToMetaMask}>Connect to MetaMask</button>}
    </div>
  );
}

export default MetaMaskInfo;
