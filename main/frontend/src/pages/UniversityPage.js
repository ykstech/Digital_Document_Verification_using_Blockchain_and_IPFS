import React, { useState,useEffect } from 'react';
import axios from 'axios';
import MetaMaskInfo from './MetaMaskInfo';

// Create a Web3 instance using the current Ethereum provider (MetaMask)
function UniversityPage() {
  const [file, setFile] = useState(null);
  const [oldcid, setoldCid] = useState(null);
  const [newcid, setnewCid] = useState(null);
  
  const [pdfUrl, setPdfUrl] = useState(null);
  
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  const [companyAddresses, setCompanyAddresses] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(''); // State for selected company address
  
  const [universityDocumentlist, setUniversityDocumentlist] = useState([]); // State for selected company address
  const [selectedUUID, setSelectedUUID] = useState(''); // State for selected company address
  
  const statusdiv= document.getElementById("statusdiv");
 
  const getMetamaskContract = (contract) => {
    // Handle the data received from the child component
    console.log('Contract from metamask:', contract);
    setContract(contract);

  };
  const getMetamaskAccount = (account) => {
    // Handle the data received from the child component
    console.log('Account from metamask:', account);
    setAccount(account);
  };
  const getMetamaskWeb3 = (web3var) => {
    // Handle the data received from the child component
    console.log('web3 from metamask:', web3var);
    setWeb3(web3var);
  };


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setoldCid(null);
    setnewCid(null);
    setPdfUrl(null);
  };



  const getHash = async () => {
    const formData = new FormData();
    formData.append('certificate', file);
    formData.append('selectedUUID', selectedUUID); // Include the selectedUUID in the formData

    try {
      const oldresponse = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const newresponse = await axios.post('http://localhost:5000/issue', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      
    console.log(oldresponse.data);
    console.log(newresponse.data);

    setoldCid(oldresponse.data.cid);
    setnewCid(newresponse.data.cid);
    setPdfUrl(newresponse.data.ifpsLink);
    
    verifyDocument(oldresponse.data.cid,newresponse.data.cid);

    } catch (error) {
      console.error(error);
    }


  };
  const getHash2 = async () => { //hash for unverify//
    const formData = new FormData();
    formData.append('certificate', file);
    formData.append('selectedUUID', selectedUUID); // Include the selectedUUID in the formData

    try {
      const newresponse = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      
    console.log(newresponse.data);

    setnewCid(newresponse.data.cid);
    setoldCid(null);
    setPdfUrl(null);

    unverifyDocument(newresponse.data.cid);

    } catch (error) {
      console.error(error);
    }


  };

  

// Define your document upload function
async function verifyDocument(_oldcid,_newcid) {
  try {
   
    // Call the smart contract function
    const transaction = await contract.verifyDocument(selectedUUID,_oldcid,_newcid,{ from: account });
    await transaction.wait();
    
    statusdiv.style.display="block";
    console.log('Document Verified successfully:', transaction);


  } catch (error) {
    
    statusdiv.style.display="none";
    console.error('Error verifying document:',error.reason);
    // Handle the error here
  }
}
async function unverifyDocument(_newcid) {
  try {
    
    // Call the smart contract function
    const transaction = await contract.unverifyDocument(selectedUUID,_newcid,{ from: account });
    await transaction.wait();

    console.log('Document unVerified successfully:', transaction);


  } catch (error) {
    console.error('Error unverifying document:',error.reason);
    // Handle the error here
  }
}



  useEffect(() => {
    // Check if contract is not null
    if (contract !== null) {
      
      getUniversityDocumentList();
      fetchCompanyAddresses();
    }
  }, [account]); // Add contract as a dependency

  // Function to handle dropdown selection
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };
  const handleDocumentChange = (event) => {
    setSelectedUUID(event.target.value);
  };

 // Function to fetch company addresses from the smart contract
  const fetchCompanyAddresses = async () => {
    try {
      const transaction = await contract.getAllCompanyAddresses({ from: account });
      console.log('Response from smart contract:', transaction); // Log the response
      const uniqueAddressesSet = new Set(transaction);
      // Convert the Set back to an array.
      const uniqueAddressesArray = [...uniqueAddressesSet];
      setCompanyAddresses(uniqueAddressesArray);
    } catch (error) {
      console.error('Error fetching Company addresses:', error.reason);
    }
  };

  async function includeCompany() {
    try {
     
      // Call the smart contract function
      const transaction = await contract.includeCompany(selectedUUID,selectedCompany,{ from: account });
      await transaction.wait();
      console.log('Company included successfully:', transaction.transactionHash);
  
  
    } catch (error) {
      console.error('Error including company:',error.reason);
      // Handle the error here
    }
  }
  async function removeCompany() {
    try {
  
     
      // Call the smart contract function
      const transaction = await contract.removeCompany(selectedUUID,selectedCompany,{ from: account });
      await transaction.wait();
  
      console.log('Company removed successfully:', transaction.transactionHash);
  
  
    } catch (error) {
      console.error('Error removing company:',error.reason);
      // Handle the error here
    }
  }



  
// Define your document upload function
async function addUniversityfn() {
  try {

      // Call the 'addUniversity' function with the provided university address
      const transaction = await contract.addUniversity({ from: account });

      // Wait for the transaction to be mined and get the transaction hash
      await transaction.wait();

     console.log('University added successfully:', transaction);
  
  } catch (error) {
    console.error('Error UniversityAdded:',error.reason);
    // Handle the error here
  }
}

async function checkUniversity() {
  try {
   
    // Call the smart contract function
    const transaction = await contract.checkUniversity(account,{ from: account });
   
    console.log('university status:', transaction);


  } catch (error) {
    console.error('Error checking university:',error.reason);
    // Handle the error here
  }
}

 const getUniversityDocumentList = async () => {
  try {
    const transaction = await contract.getUniversityDocumentList({ from: account });
    console.log('Response getUniversityDocumentList:', transaction); // Log the response
   
    setUniversityDocumentlist(transaction);
  } catch (error) {
    console.error('Error fetching documents:', error.reason);
  }
};

async function viewDocument() {
  window.location.href = `/CompanyPage?document=${selectedUUID}`;
}


  return (
    <div className="App">
      <MetaMaskInfo Contract={getMetamaskContract} Account={getMetamaskAccount} Web3var={getMetamaskWeb3}/>
    
      <h3>Add University</h3>
      <button onClick={addUniversityfn}>Add university</button><br></br>
      <button onClick={checkUniversity}>check University</button>

     <div>
        <label>select document:</label>
        <select onChange={handleDocumentChange} value={selectedUUID}>
          <option value="">Select document</option>
          {universityDocumentlist.map((ipfs, index) => (
            <option key={index} value={ipfs}>
              {ipfs}
            </option>
          ))}
        </select>
      </div>

      <button onClick={viewDocument}>view Document</button>

      
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {/* <button onClick={getHash}>Generate Hash for verify</button>
     */}

<div id="statusdiv" style={{ display: 'none' }}> 
     
       <p>new IPFS Hash: {newcid}</p>
       <a target='_blank' href={pdfUrl}>View uploaded document</a>
       </div>

     
      <button onClick={getHash}>Verify Document</button>


     <br></br><br></br>
      {/* <button onClick={getHash2}>Generate Hash for unverify</button>
     */}
      <button onClick={getHash2}>unVerify Document</button>

      

      <div>
        <label>Add or Remove Company:</label>
        <select onChange={handleCompanyChange} value={selectedCompany}>
          <option value="">Select Company</option>
          {companyAddresses.map((address, index) => (
            <option key={index} value={address}>
              {address}
            </option>
          ))}
        </select>
      </div>
      
      <button onClick={includeCompany}>include Company</button>
      <button onClick={removeCompany}>remove Company</button>

      
     

    </div>
  );
}

export default UniversityPage;
