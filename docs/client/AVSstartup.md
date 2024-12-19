#---
#sidebar_position: 3
#---

# How to start AVS in bridge mode

At the moment Ivynet Client can only track AVS's started in the default (bridge) docker network mode.
Not every AVS has documentation how to do.
Below a few examples on how to modify a startup script/procedure to start a container with metrics ports exposed for the Client.

## K3

The K3 AVS exposes metrics on port 4000, so the script to start it can look like:

```
#!/bin/bash

IMAGE=k3official/k3-labs-avs-operator-dev
NAME=${1:-k3}

echo "Kill docker container:"
docker ps | grep -q k3 && docker kill ${NAME}
echo "Remove docker container:"
docker ps -a | grep -q k3 && docker rm ${NAME}

echo "=========="
echo "Pull the image:"
docker pull ${IMAGE}

echo "=========="
echo "Run the container:"
echo "${NAME}"
docker run -d --env-file .env --name ${NAME} -p 3000:3000 -p 4000:4000 -p 4001:4001 -p 9876:9876 ${IMAGE} performer
```

The script not only start the AVS, but also sends it to background.
The logs can be access with the `docker logs` command, e.g. if the default name is used:
```
docker logs k3
```
## Predicate

The Predicate AVS exposes metrics on port 9090, which is also used by other AVS's (e.g. EigenDA).
Therefore the script not only expose the ports used by the program, but also change them, to avoid the clash.

```
#!/bin/bash

VERSION=1.0.2
IMAGE=ghcr.io/predicatelabs/operator:${VERSION}
NAME=${1:-predicate}

export ENV_FILE=./.env
. $ENV_FILE

echo "Kill docker container:"
docker ps | grep -q k3 && docker kill ${NAME}
echo "Remove docker container:"
docker ps -a | grep -q k3 && docker rm ${NAME}

echo "=========="
echo "Pull the image:"
docker pull ${IMAGE}

echo "=========="
echo "Run the container:"
echo "${NAME}"
docker run -d -p 19091:19091 -p 19090:19090 -p 19010:19010 --name ${NAME} --env-file ${ENV_FILE} -v "${DB_PATH}:/app/data/" -v "${PREDICATE_SIGNING_PRIVATE_KEY_STORE_PATH}:/app/signingkey.json" ${IMAGE} start --db-path /app/data/ --predicate-signing-private-key-store-path /app/signingkey.json

```

The script not only start the AVS, but also sends it to background.
The logs can be access with the `docker logs` command, e.g. if the default name is use:
```
docker logs predicate
```

