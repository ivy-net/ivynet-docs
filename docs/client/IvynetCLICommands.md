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

- `--log-level <LEVEL>`: Set the verbosity level for logs (default: INFO).

## Commands

### monitor

Starts Ivynet client and sends data to the backend.

The command does not have any special options.

### scan

Prepares information for the monitoring.
In the first step, this command scans running Docker containers for any known AVSs and lets users select which to monitor.
Additionally, it allows users to specify any running container.
All information is added into the `~/.ivynet/monitor-config.toml` file.

The command does not have any special options.

### register-node

Creates the connection identity key for secure communication between the Ivynet client and the backend server.
The registration requires the username (email address) and the password used to create a frontend account.

The command does not have any special options.

### config

Manages the `ivyconfig.toml` file (located in `~/.ivynet/`), which is used for base configuration.

Please use only subcommands listed below.

**Usage:**
`ivynet config <COMMAND>`

Commands:

- `get backend`: Get backend connection information.
- `get config`: Get all config data.
- `get sys-info`: Get system information.
- `set identity_key <KEY>`: Set backend connection identity key.

These commands are not part of the current Ivynet workflow.
Some of them are not implemented or do not work at the moment.

### rename-node

Renames your node on the frontend.

### key

Provides methods to manage cryptographic keys.
Ivynet does not require any key to interact with AVSs, so these commands are not essential for Ivynet.