---
sidebar_position: 2
---

# Quickstart Guide

Contact us on [telegram](https://t.me/h_comfort) if you'd like to be part of our alpha group.

## Prerequisites and dependencies

The following document assumes that:

- A contemporary Linux distribution (e.g. Debian 12, Ubuntu 24.04, RHEL 9) with libssl and libcrypto libraries is ready to use
- Docker and docker-compose (or docker compose) are installed
- User operating ivynet can control Docker, e.g. is a member of the docker group
- The user's ECDSA account has already registered as an operator on the Eigenlayer network.
If not, go to the [Eigenlayer site](https://docs.eigenlayer.xyz/eigenlayer/operator-guides/operator-installation).
- All AVS's are deployed with Docker

## Installation

*The installation of the ivynet client, as well as Docker, can be done with the [Ansible role](https://github.com/ivy-net/ivynet-client-ansible).*

* Get the latest binary file from the [cloud bucket](https://storage.googleapis.com/ivynet-share/index.html)
* Compare the hash of the downloaded file `sha256 ivynet-{version}` with the hash store in the bucket e.g.: `https://storage.googleapis.com/ivynet-share/ivynet-{version}.sha256`
* Save the file as `ivynet` in a folder which is included in the PATH variable, or adjust the variable

## Setup and Configuration

The application does not require manual configuration.

### Scan for active (Nodes) AVS's

After the client has been configured, scan the system for running AVS's with:
```
ivynet scan
```
The output of the command is the list of all potential AVS: a Docker container with an exposed port and `/metrics` endpoint available (No support yet for network mode host).
Select which containers should be monitored by pressing SPACE and ticking the box next to them.
Confirm the selection by pressing ENTER.
![Screenshot of scan results](./imgs/screens/scan1.png)

Next step is to name each AVS.
The name has to be unique per system with ivynet (e.g. VM).

![Screenshot with added AVS's](./imgs/screens/scan2.png)
The command will add all AVS's into the `~/.ivynet/monitor-config.toml` file.

### Monitor (Nodes) AVS's

Now, start the monitor with:

```
ivynet monitor
```
If the application is started for the first time, it will ask for ivynet website registration details (username and password).
![Screenshot of ivynet asking for login details](./imgs/screens/registration.png)

This information is going to be stored in the `~/.ivynet/ivynet-config.toml` file along with the node information.

The line `Node properly registered with key 0x{ecdsa_address}` confirms that registration is successful.
Below it, the list of all running Docker containers will be printed as visible on the screenshot below.
![Screenshot of successful registration](./imgs/screens/monitor.png)

## Further usage

Navigate to the Ivynet website and confirm that information from the nodes are uploaded.

The ivynet application can be restarted detached from the remote terminal, for example by starting it in a UNIX multiplexer like `screen` or `tmux`.
An alternative might be to use the [start-stop-daemon](https://github.com/daleobrien/start-stop-daemon) tool or prepare a systemd script.

start-stop-daemon example:
```
start-stop-daemon -b -x {ivynet_dir}/ivynet -S -- monitor
```

Visit the [client documentation](./clientDocs.md) for more in-depth information.
And when ready: **share the feedback!**
