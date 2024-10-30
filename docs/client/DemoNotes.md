---
sidebar_position: 2
---

# Demo Notes

An update on where Ivynet is at, where we're going, and what we want your feedback on!

## Demo Codebase

### Where we're at

**Ivynet Client:** Currently, the Ivynet client is built under the assumption that people would be splitting AVS's into multiple different virtualized environments (because of security, ease of management, etc). We now realize that, especially because AVS's are not currently paying operators, many are running multiple AVS's on a single baremetal server. However, Ivynet only supports 1 AVS per virtual operating system as of ONLY this demo version. Our very next release will have this functionality updated to support as many AVS instances as an operator can fit on their server.

**API and Interface:** Focused heavily on getting metrics/logs/sys_info from your node, and not as focused on getting information about new AVS's

### Where we're going

**Ivynet Client:** As mentioned above, multiple clients running on a single virtual environment (while keeping the option to only run a single one) as well as more direct interaction with the containers themselves instead of docker compose. Also, a larger focus on observability instead of building out new deployments for the near future, as most operators seem to have a decent handle on building our their AVS instances already.

**Interface and API:** More building out of AVS discoverability functionality, AVS stats, etc., as well as introducing an AI Ops tool to help you actively diagnose problems straight from your logs and metrics!

## Feedback Wanted

If you're reading this, you're probably already in a telegram group with us, because in case you're not, contact us [here on telegram](https://t.me/soho_dot) if you have feature requests or feedback!

Primarly, what we're looking for is:

- How did you feel about ease of use for the separate parts of Ivynet? Client, API, Interface
- Is there anything we could improve from a usability perspective on any parts of Ivynet?
- What features do we not have that would make a measureable quality of life improvement for you as an operator?
- Any other helpful feedback you have!

<!-- ### Test Scenarios

TODO: -->