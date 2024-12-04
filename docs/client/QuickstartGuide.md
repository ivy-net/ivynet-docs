---
sidebar_position: 2
---

# Quickstart Guide

Contact us on [telegram](https://t.me/h_comfort) if you'd like to be part of our alpha group.

## Prerequisites and dependencies

The following document assumes that:

- a contemporary Linux distribution (e.g. Debian 12, Ubuntu 24.04, RHEL 9) with libssl and libcrypto libraries is ready to use
- docker and docker-compose (or docker compose) are installed
- user operating ivynet can control docker, e.g. is a member of the docker group
- the user's ECDSA account has already registered as an operator on the Eigenlayer network. If not, go the [Eigenlayer site](https://docs.eigenlayer.xyz/eigenlayer/operator-guides/operator-installation).
- all AVS's are deployed with docker

## Installation

*The installation of the ivynet client, as well as docker, can be done with the [Ansible role](https://github.com/ivy-net/ivynet-client-ansible).*

* Get the binary file, e.g. from the `https://storage.googleapis.com/ivynet-share/ivynet-{version}` cloud bucket
* Compare the hash of the downloaded file `sha256 ivynet-{version}` with the hash store in the bucket: `https://storage.googleapis.com/ivynet-share/ivynet-{version}.sha256`
* Save the file as `ivynet` in a folder which is included in the PATH variable, or adjust the variable

## Setup and Configuration

The application does not required manual configuration.

### Scan for active (Nodes) AVS's

When application is ready, scan the system for running AVS's with
```
ivynet scan
```
The output of the command is the list of all potential AVS (a docker container with an expose port and `/metrics` endpoint available).
Select which containers should be monitor pressing SPACE and ticking box next to them.
Confirm the selection by pressing ENTER.
The command will add all AVS's into the `~/.ivynet/monitor-config.toml` file.

### Monitor (Nodes) AVS's

Now, start the monitor with

```
ivynet monitor
```
If the application is started for the first time, it will ask for ivynet website registration details (username and password).
![Screenshot of ivynet asking for login details](./imgs/screens/registration.png)

These information are going to be stored in the `~/.ivynet/ivynet-config.toml` file along the node information.

The line `Node properly registered with key 0x{ecsda_address}` confirm that registration is successful.
Below it the list of all running docker container are going to be printed as visible on the screenshot below.
![Screenshot of successful registration](./imgs/screens/monitor.png)

## Further usage

Navigate to the Ivynet website and confirm that information from the node are uploaded.

The ivynet application can be restarted detached from the remote terminal, for example by starting it in a UNIX multiplexers like `screen` or `tmux`.
An alternative might to use the [start-stop-daemon](https://github.com/daleobrien/start-stop-daemon) tool or prepare a systemd script.

start-stop-daemon example:
```
start-stop-daemon -b -x {ivynet_dir}/ivynet -S -- monitor
```

Visit the [client documentation](./clientDocs.md) for more in-depth information.
And when ready: *share the feedback!*
