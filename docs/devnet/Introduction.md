---
sidebar_position: 1
---

## Challenges of Modular POS Networks development

Foundry and HardHat are great development environments for preparing Ethereum smart contracts.
Public TestNets are a good tool to share your work with others.
But jumping from a developer's laptop into a public network might not be the right move.
That is especially true when working on Modular POS Network solutions.
There are layers of smart contracts involved.
Every Modular POS application requires a set of restaking protocol smart contracts deployed first.
Additionally, those solutions have important off-chain components which also need to be deployed.
Testing a complex product with components and dependencies developed at various tempos is a hard task, especially if done without a private environment bound to a CI/CD pipeline.
