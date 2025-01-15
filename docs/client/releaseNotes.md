---
sidebar_position: 8
---

# Ivynet 0.4 Release Notes

Updated on January 14, 2025.
## Features
- Unified Metrics Observability: Across Mainnet and Holesky EigenLayer AVS nodes, including:
    - AVS Version Check: Ensure nodes are running the latest AVS versions.
    - Active Set Inclusion: Verify if nodes are part of the active set.
    - Error Detection and Diagnostics: Identify and diagnose node errors in real-time.
    - Connectivity Check: Monitor connectivity to ensure network stability.
    - AVS Performance Metrics: Access structured performance insights at AVS or environment level.
    - AVS Logs: Access structured AVS historical logs.
    - System Metrics Monitoring: Track CPU, memory, disk usage, and system health.
- Startup Scripts: Reference scripts to start AVS containers with metrics ports exposed and install IvyNet client across mutliple environments. 
- Multi-AVS Support: Run and monitor multiple AVS nodes on a single machine, enabling better infrastructure efficiency.
- APIs and Interface: Access unified metrics and insights through a virtual dashboard or API integration.

## Acknowledgements

- Docker: Support for Docker deployments including automatically recognized and manually added containers. 
- Node Coverage: All EigenLayer Mainnet AVS's and majority of Holseky AVS's. 
- AVS Endpoint Availability: Not all AVS's expose metrics endpoints, so support may vary depending on AVS implementation.
- Semantic Versioning: Not all AVS's use semantic versioning, so next-best alternatives pursued in these instances.
- Bridge Mode: Metrics tracking for AVS nodes supported for default (bridge) mode.
Not every AVS has documentation on how to set up these ports, as some start in host network mode.
See AVS Startup Scripts tab for more detail.
