// test/testNFT.ts

import * as dotenv from "dotenv";

import { expect } from "chai";
import { ethers } from "hardhat";

dotenv.config();

describe("NFT", function () {
  it("Should mint a new nft", async function () {
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    await nft.deployed();
    const address = process.env.METAMASK_WALLET_ADDRESS;
    expect(await nft.safeMint(address)).to.be.called;
  });
});
