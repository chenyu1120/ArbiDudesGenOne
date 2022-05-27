const ArbiDudesGenOne = artifacts.require("ArbiDudesGenOne");

module.exports = function (deployer) {
  deployer.deploy(ArbiDudesGenOne, "https://www.arbidudes.xyz/api/dude/", 10000);
};
