---
sidebar_position: 2
---

# Demo Notes

An update on where Ivynet is at, where we're going, and what we want your feedback on!

## Demo Codebase

### Where we're at

**Ivynet Client:** Currently, the IvyNet client assumes that users are running AVSs across multiple virtualized environments for security, management ease, etc.
However, we’ve realized that since AVS operators aren’t yet compensated, many are running multiple AVSs on a single bare-metal server.
At this stage, IvyNet supports only one AVS per virtual operating system in this demo version.
Our next release will allow operators to run multiple AVS instances on a single server.

**API and Interface:** Our primary focus has been on gathering metrics, logs, and system information from your node, with less emphasis on AVS discovery.

### Where we're going

**Ivynet Client:** In upcoming updates, we’re expanding support for running multiple clients on a single virtual environment (while keeping single-client functionality).
We’re also adding direct interaction with containers, moving away from Docker Compose.
For the near term, we’ll focus more on observability features rather than new deployments, as most operators are successfully building out their own AVS instances.

**Interface and API:** We’re enhancing AVS discoverability, statistics, and introducing an AI Ops tool to diagnose issues directly from your logs and metrics.

## Feedback Wanted

If you’re reading this, you’re likely already in a Telegram group with us. But if you’re not, feel free to contact us [here on telegram](https://t.me/soho_dot) to share feature requests or feedback!

Here’s what we’d love to know:

- How easy is it to use the various parts of IvyNet (Client, API, Interface)?
- Are there usability improvements we could make to any part of IvyNet?
- Are there any features we don’t yet offer that would make a measurable improvement to your experience as an operator?
- Any other feedback you’d like to share!

<!-- ### Test Scenarios

TODO: -->