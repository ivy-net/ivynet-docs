---
sidebar_position: 3
---

# Ivynet Functionalities

The instructions on how to start using Ivynet Client are located in the [Quickstart Guide](./QuickstartGuide.md).

## Definitions

- **Node**:
  - Any AVS that offers a /metrics endpoint a la EigenLayer's metrics documentation.
  In the future, this scope will broaden to Symbiotic, L1s, L2s, etc.
- **Machine**:
  - The server (bare metal or virtual) running the Ivynet client.
- **Client**:
  - The software itself, separated from the machine in order to accommodate future container management software like Kubernetes.

## Functionalities

### Scan for active Nodes

The ivynet provides automated configuration of any known Nodes running on the machine along the client.
It is executed with the first step of the `ivynet scan`.
The results of the scan are added to the `~/.ivynet/monitor-config.toml` file.

For a Node to be added to ivynet with automated scan following conditions have to be met:
- node runs as a docker container
- node is on the [recognizable AVS list](#appendix-list-of-recognizable-avss)

### Monitor AVS Active Set

Ivynet observe blockchains to monitor if the operator continues to be part of an active set.

For ivynet to monitor operator status in AVS active set following conditions have be met:
- AVS is added to list of monitored AVS's on the client
- client is connected to the backend
- right chain is selected in the frontend
- AVS is on the [recognizable AVS list](#appendix-list-of-recognizable-avss)

### Upload logs

Ivynet uploads Node logs to the central server (backend).
It uses docker API to get any logs from the standard and error outputs of containers.

For ivynet to upload logs following conditions have to be met:
- node runs as a docker container
- node entry is present in the `~/.ivynet/ivynet-config.toml` configuration file
- application sends logs to standard output/error

### Monitor metrics

Ivynet collects node Prometheus metrics and sends them to the backend.

For ivynet to transmit metrics following conditions have to be met:
- node runs as a docker container
- node exposes metrics in the Prometheus format
- node uses the default docker networking mode (bridge)
- the node port where metrics are served is exposed
- node entry is present in the `~/.ivynet/ivynet-config.toml` configuration file

## Appendix: List of recognizable AVS's

IvyNet is working to recognize all mainnet and holesky AVSs for Ethereum restaking protocols. Containers that are not currently recognized can be manually added. 
