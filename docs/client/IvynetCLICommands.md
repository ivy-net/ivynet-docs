---
sidebar_position: 4
---

# Ivynet CLI Commands List

The following is documentation of all commands that can be called from the Ivynet CLI:

Mandatory Arguments: `<ARG>`  
Optional Arguments: `[ARG]`  
Options: `--option`  

## Global Options

The following options can be used with any command:

- `--network <CHAIN>`: The network to connect to: mainnet, holesky, local (default: "holesky")
- `--server-url <URL>`: IvyNet servers Uri for communication (default: "https://api1.test.ivynet.dev:50050" in production, "http://localhost:50050" in debug)
- `--server-ca <PATH>`: IvyNet server certificate path
- `--log-level <LEVEL>`: Set the verbosity level for logs (default: INFO)

## Observability

**Usage:**  
`ivynet scan` - This command will scan for any AVS's metrics endpoints, and add them into a file at `~/.ivynet/monitor-config.toml`


**Usage:**  
`ivynet monitor`


## Config

Manage the `ivyconfig.toml` file (located in `~/.ivynet/`), which is used for base configuration for the CLI and downstream AVS instances.

**Usage:**  
`ivynet config <COMMAND>`

Commands:

<!-- - `set rpc <CHAIN> <RPC_URL>`
  - Set default URLs to use when connecting to 'mainnet', 'holesky', and 'local' RPC urls
- `set metadata [METADATA_URI] [LOGO_URI] [FAVICON_URI]`
  - Set metadata for EigenLayer Operator
- `set server_url <URL>`
  - Set backend server connection url
- `set server_ca <PATH>`
  - Set backend server certificate -->
<!-- - `get rpc <CHAIN>`
  - Get the current default RPC URL for 'mainnet', 'holesky', or 'local'
- `get metadata`
  - Get local metadata -->
- `set identity_key <KEY>`
  - Set backend connection identity key
- `get config`
  - Get all config data
- `get sys-info`
  - Get system information
- `get backend`
  - Get backend connection information


<!-- Commented out until deployments brought back in -->
<!-- ## Key

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
  - Get information about stored keys -->

## AVS

Setup, run, and manage node instances. For now, we've paused integration on deployment integrations and we're focusing on observability. We will be expanding to EigenLayer AVS, Symbiotic AVS, and top L1s in the future. 

**Usage:**  
`ivynet node <COMMAND> [OPTIONS]`

Commands:

- `setup <AVS> <CHAIN>`: Run the setup script for the specified AVS
- `select <AVS> <CHAIN>`: Select the AVS to run in the background service
- `register`: Register for the specified AVS
- `unregister`: Unregister from the current AVS
- `start [AVS] [CHAIN]`: Start the specified AVS (or current if not specified)
- `stop`: Stop the current AVS
- `info`: Get information about the current AVS status
- `inspect`: Get logs from an AVS with an interactive menu

Supported Nodes:

- `eigenda` - EigenDA with Quorum 0: Staked Eth/LSTs

Supported Chains:

<!-- - `mainnet` - Ethereum Mainnet -->
- `holesky` - Holesky Testnet

## Register

Register this node on IvyNet server.

**Usage:**  
`ivynet register`

<!-- Options:

- `--email <EMAIL>`: Email address registered at IvyNet portal
- `--password <PASSWORD>`: Password to IvyNet account -->

## Common Workflows

### Monitor Flow:

```bash
ivynet avs scan
ivynet avs monitor
```

### Deployment Flow:

```bash
ivynet avs setup <AVS> <CHAIN>
ivynet avs select <AVS> <CHAIN>
ivynet avs start
ivynet avs register
```
