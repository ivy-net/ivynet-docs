---
sidebar_position: 5
---

# Errors

## Machine Error

- `Idle`
  - The Ivynet Client is running, but is not aware of any currently running AVSs.
  If you have recently changed AVSs, remember to rescan!
- `SystemResourcesUsage`
  - The machine resource usage, specifically memory and/or disk space, being greater than 90% is a `Warning` status. If it is higher than 95%, it is `Critical`. Disks are evaluated individually (by partition), and the worst score of any single disk is how criticality is determined.
- `ClientUpdateRequired`
  - This means the `ivynet` client you are using is on `0.4.X`, and we recommend you update to `0.5.X`

## Node Error

- `ActiveSetNoDeployment`
  - The AVS is registered in the active set, but it is malfunctioning in some way and metrics are not being sent.
  Usually, the AVS container has crashed.
  **This is a very high priority error**.
- `CrashedNode`
  - The node's latest communication was greater than 15 minutes ago.
  Either the AVS or the Ivynet client itself has crashed.
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
