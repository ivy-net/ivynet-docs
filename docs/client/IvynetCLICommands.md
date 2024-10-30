---
sidebar_position: 4
---

# Ivynet CLI Commands List

The following is documentation of the various commands that can be called from the Ivynet CLI:

Mandatory Arguments: `<ARG>`  
Optional Arguments: `[ARG]`  
Options: `--option`  

## Global Options

The following options can be used with any command:

- `--network <CHAIN>`: The network to connect to: mainnet, holesky, local (default: "holesky")
- `--server-url <URL>`: IvyNet servers Uri for communication (default: "https://api1.test.ivynet.dev:50050" in production, "http://localhost:50050" in debug)
- `--server-ca <PATH>`: IvyNet server certificate path
- `--log-level <LEVEL>`: Set the verbosity level for logs (default: INFO)

## Init

Initialize the `ivyconfig.toml` file and perform first-time setup of the ivynet cli.

**Usage:**  
`ivynet init`

## Config

Manage the `ivyconfig.toml` file (located in `~/.ivynet/`), which is used for base configuration for the CLI and downstream AVS instances.

**Usage:**  
`ivynet config <COMMAND>`

Commands:

- `set rpc <CHAIN> <RPC_URL>`
  - Set default URLs to use when connecting to 'mainnet', 'holesky', and 'local' RPC urls
- `set metadata [METADATA_URI] [LOGO_URI] [FAVICON_URI]`
  - Set metadata for EigenLayer Operator
- `set server_url <URL>`
  - Set backend server connection url
- `set server_ca <PATH>`
  - Set backend server certificate
- `set identity_key <KEY>`
  - Set backend connection identity key
- `get rpc <CHAIN>`
  - Get the current default RPC URL for 'mainnet', 'holesky', or 'local'
- `get metadata`
  - Get local metadata
- `get config`
  - Get all config data
- `get sys-info`
  - Get system information
- `get backend`
  - Get backend connection information

## Key

Manage ECDSA and BLS keys for the operator.

**Usage:**  
`ivynet key <COMMAND>`

Commands:

- `import`
  - Import an existing ECDSA or BLS key
  - Supports importing from folder, file, private key, or mnemonic (ECDSA only)
- `create`
  - Create a new ECDSA or BLS private key
- `get`
  - Get information about stored keys

## AVS

Setup, run, and manage AVS instances.

**Usage:**  
`ivynet avs <COMMAND> [OPTIONS]`

Commands:

- `setup <AVS> <CHAIN>`: Run the setup script for the specified AVS
- `select <AVS> <CHAIN>`: Select the AVS to run in the background service
- `register`: Register for the specified AVS
- `unregister`: Unregister from the current AVS
- `start [AVS] [CHAIN]`: Start the specified AVS (or current if not specified)
- `attach [AVS] [CHAIN]`: Attach to a specified AVS
- `stop`: Stop the current AVS
- `info`: Get information about the current AVS status

Supported AVSes in DEMO:

- `eigenda` - EigenDA

Supported chains in DEMO:

<!-- - `mainnet` - Ethereum Mainnet -->
- `holesky` - Holesky Testnet

## Serve

Start the Ivynet service.

**Usage:**  
`ivynet serve [OPTIONS]`

Options:

- `--avs <AVS>`: AVS to start with (requires --chain)
- `--chain <CHAIN>`: Chain to use (requires --avs)

## Register

Register this node on IvyNet server.

**Usage:**  
`ivynet register --email <EMAIL> --password <PASSWORD>`

Options:

- `--email <EMAIL>`: Email address registered at IvyNet portal
- `--password <PASSWORD>`: Password to IvyNet account

<!-- ## Operator

View and manage operator information.

**Usage:**  
`ivynet operator get <COMMAND>`

Commands:

- `details`: Get operator details
- `shares`: Get operator's total shares per strategy
- `delegatable-shares`: Get operator's delegatable shares per strategy -->

## Common Workflows

### AVS Registration Flow:

1. Initialize Ivynet:  
   `ivynet init`
2. Configure RPC and keys:  
   `ivynet config set rpc holesky <RPC_URL>`
3. Setup the AVS:  
   `ivynet avs setup eigenda holesky`
4. Select and start the AVS:  
   `ivynet avs select eigenda holesky`  
   `ivynet avs start`
5. Register the AVS:  
   `ivynet avs register eigenda holesky`

### Typical AVS Deployment Flow:

```bash
ivynet avs setup <AVS> <CHAIN>
ivynet avs select <AVS> <CHAIN>
ivynet avs start
ivynet avs register
```
