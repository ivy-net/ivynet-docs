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

## Usage

## Scan for active Nodes

`ivynet scan` - This command will scan for any AVS's metrics endpoints, and add them into a file at `~/.ivynet/monitor-config.toml`

NOTE: This command scans for active /metrics endpoints, so if the endpoint isn't up yet (because a test instance was just spun up), then no monitorable endpoints will show up until the /metrics endpoint is functional.

## Monitor those Nodes

`ivynet monitor` - This command will build an `~/.ivynet/ivynet-config.toml` file with your node information. Two things happen at first bootup:

- You are asked to sign in - this uses a randomly generated ECDSA key to register your node to the backend. If you accidentally delete this, you can just reregister, but the backend has no access to this private key (or any other key for that matter). This will break continuity of metrics once history is added in the future.
- It uses the previously run scan command's monitor-config to start monitoring endpoints for your metrics and logs. It then sends these to our backend, allowing you to view them through the API or interface.

 In the future, our AI Ops tool will be able to diagnose any problems in your logs, and your metrics will be visible to you in any timespan or granularity you desire. Also, alerts can be built on top of them.
