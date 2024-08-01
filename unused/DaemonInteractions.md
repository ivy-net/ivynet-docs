---
sidebar_position: 4
---

# Interacting with the Ivy Daemon

<!-- Unincluded for now. No reason explain these endpoints for now. -->

The Ivynet service exposes a GRPC interface for interacting with the daemon, which can be used either via the Ivynet CLI or through GRPC actions directly. Examples are presented using [GRPCurl](https://github.com/fullstorydev/grpcurl)

## Using GRPCurl

GRPCurl can be used to access the GRPC interface of the Ivynet daemon, either through IPC or an exposed port. The following examples assume that the Ivynet daemon is running on an IPC at `${HOME}/.ivynet/ivynet.ipc` (the default location).

List GRPC services:

```ssh
grpcurl -unix -plaintext -authority "localhost" ~/.ivynet/ivynet.ipc list
```

In some later versions of GRPCurl, the `-authority` flag may be unnecessary, but is included here for robustness.

### The Avs Namespace

The following GRPC actions are supported:

### Info

`ivy_daemon_avs.Avs/AvsInfo`
Get information about the currently running AVS instance.

Return:

```json
{
  /**
    * Whether the AVS is currently running
    * @type {boolean}
    */
  "running": true,
  /**
    * The type of AVS that is currently running
    * @type {string}
    */
  "avsType": "eigenda",
  /**
    * The chain that the AVS is currently running on
    * @type {string}
    */
  "chain": "holeksy"
}
```

CLI:
`ivynet avs info`

GRPCurl:

`grpcurl -unix -plaintext -authority "localhost" ~/.ivynet/ivynet.ipc avs.Avs/AvsInfo`

#### Select

`ivy_daemon_avs.Avs/Select`
Replace the active AVS with a new AVS instance. Errors if the AVS is curently running.

Arguments:
"avs": The name of the AVS to load
"chain": The chain to operate the loaded AVS on

CLI:

`ivynet avs select <AVS> <CHAIN>`

GRPCurl:

`grpcurl -unix -plaintext -authority "localhost" -d '{"avs": "eigenda", "chain": "mainnet"}'~/.ivynet/ivynet.ipc avs.Avs/SelectAvs`

Example:

`ivynet avs select eigenda holesky`

#### Start

`avs.Avs/Start`
Start the loaded AVS instance. This will run the AVS in the background in a docker container. Errors if no AVS has been selected or the AVS is already running.

CLI:

`ivynet avs start`

GRPCurl:

`grpcurl -unix -plaintext -authority "localhost" ~/.ivynet/ivynet.ipc avs.Avs/Start`

#### Stop

`ivy_daemon_avs.Avs/Stop`
Stop the AVS instance. This will stop the AVS and close its docker container.

CLI:
`ivynet avs stop`

GRPCurl:
`grpcurl -unix -plaintext -authority "localhost" ~/.ivynet/ivynet.ipc avs.Avs/Stop`

#### Optin

`ivy_daemon_avs.Avs/OptIn`
Optin to the AVS instance. This will use the stored keypair from the `ivyconfig.toml` file to optin to the AVS. Errors if no AVS has been selected or the AVS is already running.

CLI:
`ivynet avs optin`

GRPCurl:

`grpcurl -unix -plaintext -authority "localhost" ~/.ivynet/ivynet.ipc avs.Avs/OptIn`

#### Optout

`ivy_daemon_avs.Avs/OptOut`
Optout of the AVS instance. This will use the stored keypair from the `ivyconfig.toml` file to optout of the AVS. Errors if no AVS has been selected or the AVS is already running.

CLI:

`ivynet avs optout`

GRPCurl:

```grpcurl -unix -plaintext -authority "localhost" ~/.ivynet/ivynet.ipc avs.Avs/OptOut```

### The Operator Namespace

### Getters

#### Operator Details

`ivy_daemon_operator.Operator/GetOperatorDetails`
Get operator details for the currently loaded operator, defined by the ECDSA keypair file referenced in `ivyconfig.toml`.

Return:

```json
{
  /**
    * The Ethereum address of the operator
    * @type {string}
    */
  "operator": "0x00000000000000000000000000000000DeaDBeef",
  /**
    * Whether the operator is registered on the Eigenlayer network
    * @type {boolean}
    */
  "is_registered": true,
  /**
    * The earnings receiver for the operator. Currently deprecated by the Eigenlayer network but maintained for backwards compatibility.
    * @type {string}
    */
  "__deprecated_earnings_receiver": "0x0000000000000000000000000000000000000000",
  /**
    * The address of the operator's delegation approver. This is the address that can approve or deny delegation requests.
    * @type {string}
    */
  "delegation_approver": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  /**
    * The number of blocks that this operator's delegated stakers must wait before opting out of their delegation.
    * @type {number}
    */
  "staker_opt_out_window_blocks": 10,
}
```

CLI:
`ivynet operator get details`

GRPCurl:
`grpcurl -unix -plaintext -authority "localhost" ~/.ivynet/ivynet.ipc operator.Operator/GetOperatorDetails`

#### Operator Shares

`ivy_daemon_operator.Operator/GetOperatorShares`
Get the operator shares for the currently loaded operator.

Return:

```json
{
  /**
    * The operator shares for the operator. This is a list of objects, each containing a strategy and the number of shares the operator has in that strategy. This returns an array of all available strategies, even if the operator has no shares in them.
    * @type {Array.<{strategy: string, shares: string}>}
    */
  "operatorShares": [
    {
      /**
        * The strategy that the operator has shares in
        * @type {string}
        */
      "strategy": "0x7d704507b76571a51d9cae8addabbfd0ba0e63d3",
      /**
        * The number of shares that the operator has in the strategy
        * @type {string}
        */
      "shares": "100000000000000000"
    },
    ...
  ]
}
```

CLI:
`ivynet operator get shares`

GRPCurl:
`grpcurl -unix -plaintext -authority "localhost" ~/.ivynet/ivynet.ipc operator.Operator/GetOperatorShares`

#### Operator Delgatable Shares

`ivy_daemon_operator.Operator/GetDelegatableShares`
Get the operator's delegatable shares. These are the shares that the operator can delegate to other stakers.

Return:

```json
{
  /**
    * The operator's delegatable shares. This is a list of objects, each containing a strategy and the number of shares the operator has in that strategy that are delegatable. This returns an array of only the strategies that the operator has delegatable shares in.
    * @type {Array.<{strategy: string, shares: string}>}
    */
  "delegatableShares": [
    {
      /**
        * The strategy that the operator has delegatable shares in
        * @type {string}
        */
      "strategy": "0x7d704507b76571a51d9cae8addabbfd0ba0e63d3",
      /**
        * The number of shares that the operator has in the strategy that are delegatable
        * @type {string}
        */
      "shares": "100000000000000000"
    },
    ...
  ]
}
```

CLI:
`ivynet operator get delegatable-shares`

GRPCurl:
`grpcurl -unix -plaintext -authority "localhost" ~/.ivynet/ivynet.ipc operator.Operator/GetDelegatableShares`
