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

## Functionalties

### Scan for active Nodes

The ivynet provides automated configuration of any known Nodes running on the machine along the client.
It is executed with the first step of the `ivynet scan`.
The results of the scan are added to the `~/.ivynet/monitor-config.toml` file.

For a Node to be added to ivynet with automated scan following conditions have to be met:
- node runs as a docker container
- node is on the [recognizable AVS list](#appendix-list-of-recognizable-avss)

### Monitor AVS Active Set

Ivynet observe blockchains to monitor if the operator continutes to be part of an active set.

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

Ivynet collects node prometheus metrics and sends them to the backend.

For ivynet to transmit metrics following conditions have to be met:
- node runs as a docker container
- node uses the default docker networking mode (bridge)
- the node port where metrics are served is exposed
- node entry is present in the `~/.ivynet/ivynet-config.toml` configuration file

## Appendix: List of recognizable AVS's

- altlayer-mach
- arpa-network-node-client
- automata
- ava-protocol
- chainbase-network-v-1
- chainbase-network-v-2
- cyber-mach
- dodo-chain-mach
- eigen-da
- e-oracle
- gm-network-mach
- hyperlane
- k-3-labs-avs
- k-3-labs-avs-holesky
- lagrange-state-committee
- lagrange-zk-worker-holesky
- lagrange-zk-worker-mainnet
- omni
- open-layer-holesky
- open-layer-mainnet
- predicate
- witness-chain
- xterio-mach
