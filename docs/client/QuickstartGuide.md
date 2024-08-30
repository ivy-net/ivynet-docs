---
sidebar_position: 2
---

# Quickstart Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/5OjIVZAWAfA?si=F7cevth7rrhXowbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br />

MVP coming soon! Contact us on [telegram](https://t.me/h_comfort) if you'd like to be part of our closed alpha group.

## Setup and Configuration

The following assumes that the ivynet has been installed and is available in the PATH, and that the user's ECDSA account has already registered as an operator on the Eigenlayer network. [If not, go here!](https://docs.eigenlayer.xyz/eigenlayer/operator-guides/operator-installation)

### Initialize Ivynet

`ivynet init`

Initialize the Ivynet directory and configuration file. The configuration file can be found at `${HOME}/.ivynet/ivy-config.toml` and can be configured manually or through `ivynet init` interactive mode. Sensible defaults are provided for newly generated `ivy-config.toml` files created via 'empty' mode.

### Configure a private key

If not already done through interactive mode in the `init` command, configure the private key for the ECDSA account that will be used to sign transactions.

**Import a private ecdsa key:**

`ivynet key import ecdsa <PRIVATE_KEY> [KEYNAME] [PASSWORD]`

This will import the private key into the `ivy-config.toml` file and create public and private keystore files in the `.ivynet` directory. Private and public keystore files are named `${KEYNAME}.json` and `${KEYNAME}.txt` respectively, and the private keystore file is encrypted with the provided password. Additionally, a `${KEYNAME}.legacy.json` file is created for backwards compatibility with AVS types which expect legacy keystore formats.

Example:
`ivynet key import ecdsa 0x00..01 mykey mypassword`

**Alternatively, create a new keypair:**

`ivynet key create ecdsa <STORE> [KEYNAME] [PASSWORD]`

Where `[KEYNAME]` and `[PASSWORD]` behave as above, and `[STORE]` is a boolean flag which store the keypair with the above format if true, or simply return the private and public keypair to the console if false.

Example:
`ivynet key create ecdsa --store mykey mypassword`

### Configure RPC endpoints

If not already done through interactive mode in the `init` command, configure the RPC endpoints for supported networks (currently Mainnet and Holesky). This can be done by editing the `mainnet_rpc_url` and `holesky_rpc_url` fields in the `ivy-config.toml` file, or by running the following commands:

`ivynet config set rpc <CHAIN> <RPC_URL>`

Example:
`ivynet config set rpc mainnet https://rpc.flashbots.net`

Valid CHAIN values are `mainnet` and `holesky`.

### Setup the AVS type you wish to run

`ivynet avs setup <AVS> <CHAIN>`

This will download the necessary files and set up the environment variables for the AVS, as well as create all necessary directories and files for the AVS to run. Setup, configuration files, and executables are stored in the `.eigenlayer/${AVS_NAME}` directory, though additional files may be created elsewhere as a component of the individual AVS setup process, and may vary between AVS types.

Example:
`ivynet avs setup eigenda holesky`

### Start the Ivynet Daemon

`ivynet serve`

This will start the ivynet daemon over a unix domain socket, located at `${HOME}/.ivynet/ivynet.ipc`. The daemon will run in the background.

### Select Your AVS

`ivynet avs select <AVS> <CHAIN>`

This will select your chosen AVS on the daemon. Having select be separated from setup allows multiple AVS's to be prepared for.

Example:
`ivynet avs select eigenda holesky`

### Start your AVS

`ivynet avs start` or `ivynet avs start --avs <AVS> --chain <CHAIN>`

This will direct the daemon to boot up the previously selected AVS node, or bypass the select step to boot up immediately. 

### Register

`ivynet avs register`

After your node is fully running, you're not actually validating the AVS. Instead, you have to register onchain in order for the AVS to start passing your node information. An operator never wants to opt in to validating an AVS before the node is fully deployed, however, because this could lead to slashing risk.

Example:
`ivynet avs optin eigenda holesky`

### OPTIONAL: Attach to existing deployment

`ivynet avs attach` or `ivynet avs attach --avs <AVS> --chain <CHAIN>`

This command will allow you to attach to an existing deployment. Upon attachment, it will check for appropriate node size based on your stake, check your avs version is up to date, and will allow for health metrics and error monitoring. Unfortunately, we do not have the ability to modify, ie update, existing custom deployments (yet).
