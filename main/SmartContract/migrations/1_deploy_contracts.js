const fs = require('fs');

const MyContract = artifacts.require('Contract'); // Update with your contract name

module.exports = function (deployer) {
  deployer.deploy(MyContract).then(async (instance) => {
    if (instance.address) {
      const contractAddress = instance.address;
      const contractAbi = JSON.stringify(instance.abi);

      const contractData = `const contractAddress = "${contractAddress}";\n const contractAbi = \n ${contractAbi};\n
      export { contractAddress, contractAbi };`;
      fs.writeFileSync('../frontend/src/pages/ContractInfo.js', contractData); // Update with your desired file path

      console.log('Contract address and ABI saved in contractInfo.js');
    }
  });
};
