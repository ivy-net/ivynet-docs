---
sidebar_position: 3
---

# Ivynet Client documentation

## Definitions

- Node:
  - This is currently any AVS that offers a /metrics endpoint a la EigenLayer's metrics documentation (and maybe Symbiotic as well, though we've not yet tested there). In the future, this scope will broaden to Symbiotic, L1s, L2s, etc.
- Machine
  - This is the server (baremetal or virtual) running the Ivynet client
- Client
  - The software itself, separated from the machine in order to accomodate future container management softwares like Kubernetes.

## Usage

## Scan for active Nodes

`ivynet scan` - This command will scan for any AVS's metrics endpoints, and add them into a file at `~/.ivynet/monitor-config.toml`

NOTE: This command scans for active /metrics endpoints, so if the endpoint isn't up yet (because a test instance was just spun up), then no monitorable endpoints will show up until the /metrics endpoint is functional.

## Monitor those Nodes

`ivynet monitor` - This command will build an `~/.ivynet/ivynet-config.toml` file with your node information. Two things happen at first bootup:

- You are asked to sign in - this uses a randomly generated ECDSA key to register your node to the backend. If you accidentally delete this, you can just reregister, but the backend has no access to this private key (or any other key for that matter). This will break continuity of metrics once history is added in the future.
- It uses the previously run scan command's monitor-config to start monitoring endpoints for your metrics and logs. It then sends these to our backend, allowing you to view them through the API or interface.

 In the future, our AI Ops tool will be able to diagnose any problems in your logs, and your metrics will be visible to you in any timespan or granularity you desire. Also, alerts can be built on top of them.

## Alpha Codebase Notes

An update on where Ivynet is at, where we're going, and what we want your feedback on!

### Where we're at

**Ivynet Client:** Previously, the IvyNet client assumed that users were running AVSs across multiple virtualized environments for security, management ease, etc.
However, since AVS operators aren’t yet compensated, many are running multiple AVSs on a single bare-metal server. As such, we've now built for that, and assume multiple containers might be on one server, baremetal or otherwise.

**API and Interface:** Our primary focus has been on gathering metrics, logs, and system information from your node, with less emphasis on AVS discovery.

### Where we're going

**Ivynet Client:** For the near term, we’ll focus more on observability features rather than new deployments, as most operators are successfully building out their own AVS instances.

**Interface and API:** Our next near-term release is metrics history (and data scaping endpoints to support that). In the longer term future, we'll enhancing AVS discoverability, statistics, and introducing an AI Ops tool to diagnose issues directly from your logs and metrics.

### Feedback Wanted

If you’re reading this, you’re likely already in a Telegram group with us. But if you’re not, feel free to contact us [here on telegram](https://t.me/soho_dot) to share feature requests or feedback!

Here’s what we’d love to know:

- How easy is it to use the various parts of IvyNet (Client, API, Interface)?
- Are there usability improvements we could make to any part of IvyNet?
- Are there any features we don’t yet offer that would make a measurable improvement to your experience as an operator?
- Any other feedback you’d like to share!
