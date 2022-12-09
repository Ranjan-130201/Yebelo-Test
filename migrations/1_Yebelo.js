var Yebelo = artifacts.require("Yebelo.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Yebelo);
};