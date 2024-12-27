---
sidebar_position: 5
---

# How to start AVS in the bridge mode

At the moment Ivynet Client can only track metrics from AVSs started in the default (bridge) docker network mode.
Not every AVS has documentation on how to do this.
Below are a few examples on how to modify a startup script/procedure to start a container with metrics ports exposed for the Client.

## K3

The K3 AVS exposes metrics on port 4000, so the script to start it can look like:

```
#!/bin/bash

# Change the IMAGE for the mainnet
IMAGE=k3official/k3-labs-avs-operator-dev
NAME=${1:-k3}

echo "Kill docker container:"
docker ps | grep -q ${NAME} && docker kill ${NAME}
echo "Remove docker container:"
docker ps -a | grep -q ${NAME} && docker rm ${NAME}

echo "=========="
echo "Pull the image:"
docker pull ${IMAGE}

echo "=========="
echo "Run the container:"
echo "${NAME}"
docker run \
  -d \
  --env-file .env \
  --name ${NAME} \
  -p 3000:3000 \
  -p 4000:4000 \
  -p 4001:4001 \
  -p 9876:9876 \
  ${IMAGE} performer
```

The script not only starts the AVS, exposes all used ports, and names the container (default is 'k3'), but also sends it to the background.
The logs can be accessed with the `docker logs` command, e.g. if the default name is used:
```
docker logs k3
```
## Predicate

The Predicate AVS exposes metrics on port 9090, which is also used by other AVSs (e.g. EigenDA).
Therefore the script not only exposes the ports used by the program but also changes them to avoid conflicts.

```
#!/bin/bash

VERSION=1.0.2
IMAGE=ghcr.io/predicatelabs/operator:${VERSION}
NAME=${1:-predicate}

export ENV_FILE=./.env
. $ENV_FILE

echo "Kill docker container:"
docker ps | grep -q ${NAME} && docker kill ${NAME}
echo "Remove docker container:"
docker ps -a | grep -q ${NAME} && docker rm ${NAME}

echo "=========="
echo "Pull the image:"
docker pull ${IMAGE}

echo "=========="
echo "Run the container:"
echo "${NAME}"
docker run \
  -d \
  -p 19010:9010 \
  -p 19090:9090 \
  -p 19091:9091 \
  --name ${NAME} \
  --env-file ${ENV_FILE} \
  -v "${DB_PATH}:/app/data/" \
  -v "${PREDICATE_SIGNING_PRIVATE_KEY_STORE_PATH}:/app/signingkey.json" \
  ${IMAGE} start \
    --db-path /app/data/ \
    --predicate-signing-private-key-store-path /app/signingkey.json

```

The script not only starts the AVS, exposes all the ports, and names it (default is 'predicate'), but also sends it to the background.
The logs can be accessed with the `docker logs` command, e.g. if the default name is used:
```
docker logs predicate
```

