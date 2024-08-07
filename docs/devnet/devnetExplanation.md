---
sidebar_position: 3
---

# Introduction to IV1

## Challenges of Modular POS Networks development
Foundry and HardHat are great development environments helping prepare Ethereum smart contracts.
Public TestNets are a good tool to share your work with others.
But jumping from a developer laptop into a public network might not be the right move.
That is especial true when working on the Modular POS Network solutions.
There are layers of smart contracts involved.
Every Modular POS application requires a set of restaking protocol smart contracts deployed first.
Additionally, those solutions have important off-chain components, which needs to be deployed.
Testing a complex product with components and dependencies development in various tempo is a hard task, especially if done without a private environment bind to a CI/CD pipeline.

## IV1

[IV1](https://github.com/ivy-net/iv1) is the local Ethereum test/dev network dedicate to EigenLayer, and other restaking protocols in the future.
It bases on the [POS DevNet](https://github.com/ivy-net/eth-pos-devnet) repository, but extended by an automatic deployment of the EigenLayer contracts.
The repository also contains a library of AVS (EigenLayer Modular POS Network) scenarios.

## Scenarios review
The simplest scenario deploy the POS DevNet and adds EigenLayer smart contracts.
The contracts are deployed from a prearranged docker image.
This method is cleaner that messing with genesis block of an anvil based network.
It is a blank slate enabling testing deployments of the AVS smart contracts, and other components, of the solution in a private Proof of Stake network.
The same method can be used with an Anvil network.
Other scenarios adding AVS specific smart contracts, again deployed from a docker image.
They also include off-chain components.
One of the scenarios contains the extra monitoring components.
That helps to familiarise with metrics available from an AVS.

## Docker image deployer

The repository contains also packer scripts to prepare a docker image contaning smart contrats.
The image bases on the foundry anvil one, and adds precompile smart contrats of EigenLayer and AVSes.
It can be use to help in developing other solutions.
Slight modifications (e.g. adjusting Network Id) enables smart contract deployments to other networks (e.g. Anvil or a public Testnet).
That can be an element of multi-step CI/CD pipeline.

