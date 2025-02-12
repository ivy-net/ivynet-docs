---
sidebar_position: 4
---

# Ivynet CLI Commands List

The following convention is used in the description of the CLI commands:

Mandatory Arguments: `<ARG>`
Optional Arguments: `[ARG]`
Options: `--option`

## Global Options

The following options can be used with any command:

- `--server-url <URL>`: IvyNet servers Uri for communication (default: "https://api1.test.ivynet.dev:50050" in production, "http://localhost:50050" in debug)
- `--server-ca <PATH>`: IvyNet server certificate path
- `--log-level <LEVEL>`: Set the verbosity level for logs (default: INFO)
- `--no-backned`: Does not connect client to a backend

## Commands

### monitor

starts ivynet client and sends data to the backend.

The command does not have any special options.

### scan

prepares information for the monitoring.
In the first step this command scans running docker containers for any known AVSs, and let user to select which to monitor.
Additionally, it allows users to specify any running container.
All information are added into the `~/.ivynet/monitor-config.toml` file.

The command does not have any special options.

### register-node

creates the connection identity key for a secure communication between the ivynet client and the backend server.
The registration requires the username (email address) and the password used to create a fronted account.

The command does not have any special options.

### config

manages the `ivyconfig.toml` file (located in `~/.ivynet/`), which is used for base configuration.

Please use only subcommands listed below.

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
- `get backend`
  - Get backend connection information
- `get config`
  - Get all config data
- `get sys-info`
  - Get system information
- `set identity_key <KEY>`
  - Set backend connection identity key


## Additional commands

These commands are not part of the current ivynet workflow.
Some of them are not implement or do not work at the moment.

### key

provides methods to manage cryptographic keys.
Ivynet does not require any key to interact with AVSs, so these command are not essential for ivynet.

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


### node

is not implement yet, please ignore

### rename-node

does not work.
