---
sidebar_position: 3
---

# Ivynet CLI Commands List

The following is documentation of the various commands that can be called from the Ivynet CLI:

Mandatory Arguments: `<ARG>` <br />
Optional Arguments: `[ARG]` <br />
Options: `--option` <br />

## Init

Initialize the `ivyconfig.toml` file and perform first-time setup of the ivynet cli.

**Usage:**
`ivynet init`

## Config

Manage the `ivyconfig.toml` file (located in `~/.ivynet/`), which is used for base configuraction for the CLI and downstream AVS instances. This allows for piecemeal modification of the setup step done on init.

**Usage:**
`ivynet config <OP>`

- `import-key <PRIVATE_KEY> [KEYNAME] [PASSWORD]`
  - Import and save as your default Ethereum private key with a password
- `create-key [KEYNAME] [PASSWORD] --store`
  - Create an Ethereum private key to use with Ivynet and optionally store it with a name and password
- `get-default-public`
  - Get the current default saved keypair's Ethereum address
- `get-default-private`
  - Get the current default saved private key
- `set-rpc <CHAIN> <RPC_URL>`
  - Set default URLs to use when connecting to 'mainnet', 'holesky', and 'local' RPC urls
- `get-rpc <CHAIN>`
  - Get the current default RPC URL for 'mainnet', 'holesky', or 'local'
- `set-metadata [METADATA_URI] [LOGO_URI] [FAVICON_URI]`
  - Set metadata for EigenLayer Operator
- `get-metadata`
  - Get local metadata
- `get-config`
  - Get all config data
- `get-sys-info`
  - Get system information
- `register --email <EMAIL> --password <PASSWORD>`
  - Register node on IvyNet server

## Operator

Manage the eigenlayer operator. This namespace includes both query actions for operator status of various accounts, as well as management of the operator status of the account's Ethereum address. For write actions, including register, this namespace will use the ECDSA keypair stored in the `ivyconfig.toml` file to sign transactions.

**Usage:**
`ivynet operator <OP> <CHAIN> <OTHER_FIELDS>`

- `get`
  - `details`
    - Get operator details for loaded operator with `[ADDRESS]` argument for operator lookups
  - `shares`
    - Get an operator's total shares per strategy - including 0 share strategies - with `[ADDRESS]` argument for operator lookups
  - `delegatable-shares`
    - Get an operator's total delegatable shares per strategy usable for restaking with `[ADDRESS]` argument for operator lookups

- `set`
  - `ecdsa-keyfile`
    - Set the operator's ECDSA keyfile to be used in the Ivynet Client
  - `bls-keyfile`
    - Set the operator's BLS keyfile to be used in AVS operations

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
