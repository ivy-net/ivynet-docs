---
sidebar_position: 3
---

# Ivynet CLI Commands List

The following is documentation of the various commands that can be called from the Ivynet CLI:

## Init

Initialize the `ivyconfig.toml` file and perform first-time setup of the ivynet cli.

**Usage:**
`ivynet init`

## Config

Manage the `ivyconfig.toml` file (located in `~/.ivynet/`), which is used for base configuraction for the CLI and downstream AVS instances. This allows for piecemeal modification of the setup step done on init.

**Usage:**
`ivynet config <OP>`

//TODO: all commands and their explanation

## Operator

Manage the eigenlayer operator. This namespace includes both query actions for operator status of various accounts, as well as management of the operator status of the account's Ethereum address. For write actions, including register, this namespace will use the ECDSA keypair stored in the `ivyconfig.toml` file to sign transactions.

**Usage:**
`ivynet operator <OP> <CHAIN> <OTHER_FIELDS>`

//TODO: all commands and their explanation

## Avs

Setup, run, and manage AVS instances.

**Usage:**
`ivynet avs <OP> <AVS> <CHAIN>`

Supported operations:

- `setup`: Run the setup script for the specified AVS. This includes downloading files necessary for the AVS to run, as well as setting up the AVS environment variables.
- `select`: Select the AVS to run in the background service
- `optin`: Optin to the specified AVS. This will use the stored keypair from the `ivyconfig.toml` file to optin to the AVS.
- `optout`: Optout of the specified AVS. This will use the stored keypair from the `ivyconfig.toml` file to optout of the AVS.
- `start`: Start the specified AVS. This will run the AVS in the background in a docker container.
- `stop`: Stop the specified AVS. This will stop the AVS and close its docker container.

Supported AVSes:

- `eigenda` - EigenDA
- `altlayer` - AltLayer MACH (Whitelist)
- `lagrange` - LaGrange ZK Prover (Whitelist)

Supported chains:

- `mainnet` - Ethereum Mainnet
- `holesky` - Holesky Testnet

Registration steps: <br />
`ivynet operator register holesky` - Register the operator for Eigenlayer on the holesky chain <br />
`ivynet avs optin eigenda holesky` - Optin to the Eigenda AVS on the holesky chain

**Usual AVS Deployment Flow:**

`setup` -> `select` -> `start` -> `optin`
Opt in only after you've got the node fully deployed and running
