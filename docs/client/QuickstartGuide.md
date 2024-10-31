---
sidebar_position: 3
---

# Quickstart Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/5OjIVZAWAfA?si=F7cevth7rrhXowbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br />

MVP coming soon! Contact us on [telegram](https://t.me/h_comfort) if you'd like to be part of our closed alpha group.

## Prerequisites and dependencies

The following document assumes that:

- a contemporary Linux distribution (e.g. Debian 12, Ubuntu 24.04, RHEL 9) with libssl and libcrypto libraries is ready to use
- docker and docker-compose (or docker compose) are installed
- user operating ivynet can control docker, e.g. is a member of the docker group
- the ivynet has been installed and is available in the PATH
- and that the user's ECDSA account has already registered as an operator on the Eigenlayer network. [If not, go here!](https://docs.eigenlayer.xyz/eigenlayer/operator-guides/operator-installation)

## Setup and Configuration

### Initialize Ivynet

`ivynet init`

Initialize the ivynet directory, build a configuration file, and register your node with the backend. The configuration file can be found at `${HOME}/.ivynet/ivy-config.toml` and can be configured manually or through `ivynet init` interactive mode. Sensible defaults are provided for newly generated `ivy-config.toml` files created via 'empty' mode.

The command will ask for backend credentials (email address and password, e.g. the ones used to created the organisation) in order to register your machine to the organization.

### Configure Keys

If not already done through interactive mode in the `init` command, configure the operator key that will be used to deploy and monitor an AVS. By default, ivynet will import any keys already in the `${HOME}/.ivynet` into the keychain. Keep in mind, the Ivynet cli does not actually have access to any private keys unless a dialogue on the cli explicitly asks for it where an input box will appear and ask for the password.

**Import a private ecdsa key:**

`ivynet key import`

This command will take you through an interactive dialogue to import BLS/ECDSA keyfiles and stores them in the `${HOME}/.ivynet` directory. Keystore files are named `${KEYNAME}.bls.json` and `${KEYNAME}.ecdsa.json` respectively. The legacy keystore is the keystore that has a public key built into the json file, and thus does not need any decryption in order for monitoring of the address (like AVS active set) to take place.

**Alternatively, create a new keypair:**

`ivynet key create`

This also guides the user through an interactive dialogue and builds out a key for you.

### Configure RPC endpoints

_This is an optional step_

Public RPC endpoints are set automatically through interactive or empty configuration setup. However, they can be changed. For example, if any throttling errors pop up, its best to move to a private endpoint.

The RPC can be changed by editing the `mainnet_rpc_url` and `holesky_rpc_url` fields in the `ivy-config.toml` file, or by running the following commands:

`ivynet config set rpc <CHAIN> <RPC_URL>`

Example:
`ivynet config set rpc mainnet https://rpc.flashbots.net`

Valid CHAIN values are `mainnet` and `holesky`.

### Start the Ivynet Daemon

`ivynet serve`

This will start the ivynet daemon over a UNIX domain socket, located at `${HOME}/.ivynet/ivynet.ipc`.

### Setup the AVS type you wish to run

`ivynet avs setup <AVS> <CHAIN>`

This will download the necessary files and set up the environment variables for the AVS, as well as create all necessary directories and files for the AVS to run. Setup, configuration files, and executables are stored in the `.eigenlayer/${AVS_NAME}` or `.symbiotic/${AVS_NAME}` directories, though additional files may be created elsewhere as a component of the individual AVS setup process, and may vary between AVS types.

Example:
`ivynet avs setup eigenda holesky`

### Select the AVS

`ivynet avs select <AVS> <CHAIN>`

This will select your chosen AVS on the daemon. Having select be separated from setup allows multiple AVS's to be prepared for.

Example:
`ivynet avs select eigenda holesky`

### Attach to existing AVS

`ivynet avs attach` or `ivynet avs attach --avs <AVS> --chain <CHAIN>` to skip the selection step.

This command will allow you to attach to already configured and started AVS. Upon attachment, it will check for appropriate node size based on your stake, check your avs version is up to date, and will allow for health metrics and error monitoring. Unfortunately, we do not have the ability to modify, ie update, existing custom deployments (yet).

## Alternative: use ivynet to start AVS

<div style={{marginLeft: "2em"}}>

### Start the AVS

ivynet has ability to configure and start selected AVS's.

`ivynet avs start` or `ivynet avs start --avs <AVS> --chain <CHAIN>`

This will direct the daemon to boot up the previously selected AVS node, or bypass the select step to boot up immediately.

</div>

### Register

`ivynet avs register`

After your node is fully running, you're not actually validating the AVS. Make sure to register onchain in order for the AVS to start passing your node information. An operator never wants to opt in to validating an AVS before the node is fully deployed, however, because this could lead to slashing risk.

Example:
`ivynet avs register eigenda holesky`

Note that currently the command support registration only to the quorum "0" (ETH, LSTs).

### Inspect

`ivynet avs inspect`

Inspect the logs of the AVS instance on the local filesystem. This command will prompt the user to traverse the local file tree to locate the desired logfile. Local logs are stored in the `./ivynet/logs` directory according to the container name they are associated with and stored as a file with a `YYYY-MM-DD.log` naming convention.

After selecting a valid logfile, this command will tail the last 100 lines of the log.

Example:

`ivynet avs inspect` for an already selected avs

or

`ivynet avs inspect --avs eigenda --chain holesky`
