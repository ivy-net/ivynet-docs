---
sidebar_position: 3
---

# Introduction to IV1

## Challenges of Modular POS Networks development
Foundry and HardHat are great development environments for preparing Ethereum smart contracts.
Public TestNets are a good tool to share your work with others.
But jumping from a developer's laptop into a public network might not be the right move.
That is especially true when working on Modular POS Network solutions.
There are layers of smart contracts involved.
Every Modular POS application requires a set of restaking protocol smart contracts deployed first.
Additionally, those solutions have important off-chain components which also need to be deployed.
Testing a complex product with components and dependencies developed at various tempos is a hard task, especially if done without a private environment bound to a CI/CD pipeline.

## IV1

[IV1](https://github.com/ivy-net/iv1) is the local Ethereum test/dev network dedicated to EigenLayer and other restaking protocols in the future.
It is based on the [POS DevNet](https://github.com/ivy-net/eth-pos-devnet) repository but extended by an automatic deployment of the EigenLayer contracts.
The repository also contains a library of AVS (EigenLayer Modular POS Network) scenarios.

## Scenarios review
The simplest scenario deploys the POS DevNet and adds EigenLayer smart contracts.
The contracts are deployed from a prearranged Docker image.
This method is cleaner than messing with the genesis block of an Anvil-based network.
It is a blank slate enabling testing deployments of the AVS smart contracts and other components of the solution in a private Proof of Stake network.
The same method can be used with an Anvil network.
Other scenarios add AVS-specific smart contracts, again deployed from a Docker image.
They also include off-chain components.
One of the scenarios contains extra monitoring components.
That helps to familiarize with metrics available from an AVS.

## Docker image deployer

The repository also contains packer scripts to prepare a Docker image containing smart contracts.
The image is based on the Foundry Anvil one and adds precompiled smart contracts of EigenLayer and AVSes.
It can be used to help in developing other solutions.
Slight modifications (e.g., adjusting Network Id) enable smart contract deployments to other networks (e.g., Anvil or a public Testnet).
That can be an element of a multi-step CI/CD pipeline.