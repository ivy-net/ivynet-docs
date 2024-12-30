---
sidebar_position: 3
---

# Ivynet Client Documentation

The instructions on how to start using Ivynet Client are located in the [Quickstart Guide](./QuickstartGuide.md).

## Definitions

- **Node**:
  - Any AVS that offers a /metrics endpoint a la EigenLayer's metrics documentation.
  In the future, this scope will broaden to Symbiotic, L1s, L2s, etc.
- **Machine**:
  - The server (baremetal or virtual) running the Ivynet client.
- **Client**:
  - The software itself, separated from the machine in order to accommodate future container management software like Kubernetes.

## Errors

### Machine Error

- `Idle`
  - The Ivynet Client is running, but is not aware of any currently running AVS's.
  If you have recently changed AVS's, remember to rescan!
- `SystemResourcesUsage`
  - The machine resource usage, specifically memory and/or disk space, is greater than 90%.

### Node Error

- `ActiveSetNoDeployment`
  - The AVS is registered in the active set, but it is malfunctioning in some way and metrics are not being sent.
  Usually, the AVS container has crashed.
  **This is a very high priority error**.
- `CrashedNode`
  - The node's latest communication was greater than 15 minutes ago. Either the AVS or the Ivynet client itself has crashed.
  This same scenario will also produce the `ActiveSetNoDeployment` error if the operator is a member of the active set.
- `IdleNodeNoCommunication`
  - Metrics have not been sent in the last 15 minutes.
- `LowPerformanceScore`
  - The performance score for the AVS is lower than 80/100.
- `NeedsUpdate`
  - The node needs an update.
  Refer to the `update_status` in API (e.g. [/avs](api_spec#get-all-avss)) for more information.
- `NoChainInfo`
  - No chain information added to the AVS instance.
  It is require to establish the status of active set and the latest version check.
- `NoOperatorId`
  - There is no operator address assigned to this AVS instance.
  Ivynet cannot get an active set information.
- `UnregisteredFromActiveSet`
  - The node is running (and operator address / chain information are set), but the AVS is not registered to be in the active set.

## Usage

## Scan for active Nodes

`ivynet scan` - This command will scan for any AVS's metrics endpoints, and add them into a file at `~/.ivynet/monitor-config.toml`

NOTE: This command scans for active /metrics endpoints, so if the endpoint isn't up yet (because a test instance was just spun up), then no monitorable endpoints will show up until the /metrics endpoint is functional.

## Monitor those Nodes

`ivynet monitor` - This command will build an `~/.ivynet/ivynet-config.toml` file with your node information. Two things happen at first bootup:

- You are asked to sign in - this uses a randomly generated ECDSA key to register your node to the backend. If you accidentally delete this, you can just reregister, but the backend has no access to this private key (or any other key for that matter). This will break continuity of metrics once history is added in the future.
- It uses the previously run scan command's monitor-config to start monitoring endpoints for your metrics and logs. It then sends these to our backend, allowing you to view them through the API or interface.

 In the future, our AI Ops tool will be able to diagnose any problems in your logs, and your metrics will be visible to you in any timespan or granularity you desire. Also, alerts can be built on top of them.
