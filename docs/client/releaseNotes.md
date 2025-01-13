---
sidebar_position: 8
---

# Ivynet 0.4 Release Notes

Updated on December 30, 2024.
## Features
- Unified Metrics Observability: Across Mainnet and Holesky EigenLayer AVS nodes, including:
    - AVS Version Check: Ensure nodes are running the latest AVS versions.
    - Active Set Inclusion: Verify if nodes are part of the active set.
    - Error Detection & Diagnostics: Identify and diagnose node errors in real-time.
    - Connectivity Check: Monitor connectivity to ensure network stability.
    - System Metrics Monitoring: Track CPU, memory, disk usage, and system health.
    - AVS Performance Metrics & Logs: Access AVS-specific performance insights and historical logs.
- Multi-AVS Support: Run and monitor multiple AVSs on a single machine, enabling better infrastructure efficiency.
- Access via API or Interface: Choose between a visual dashboard or API integration to access unified metrics and insights.

## Acknowledgements

- Docker: Priotized support for Docker container deployments due to restaking ecosystem popularity.
Currently working on support for binary deployments.
- Node Coverage: Prioritized support for EigenLayer AVSs deployed on both Holseky and Mainnet, ensuring coverage for key production and testnet environments.
Currently working on Symbiotic AVS nodes.
- AVS Endpoint Availability: Not all AVSs expose metrics endpoints, so support may vary depending on AVS implementation.
- Semantic Versioning: Not all AVSs use semantic versioning, so next-best alternatives pursued in these instances.
- Bridge Mode: Metrics tracking for AVS nodes supported for default (bridge) mode.
Not every AVS has documentation on how to set up these ports, as some start in host network mode.
See Metrics Setup tab for more detail.

