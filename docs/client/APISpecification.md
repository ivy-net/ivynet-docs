---
sidebar_position: 6
---

# Ivynet API Specification (Demo)

https://api1.test.ivynet.dev/

## Swagger

**https://api1.test.ivynet.dev/swagger-ui/**

## Status Codes

### Success Messages

`200` OK Successful request <br />
`201` Created New object saved <br />
`204` No content Object deleted <br />

### Client Errors

`400` Bad Request Returns JSON with the error message<br />
`401` Unauthorized Couldn't authenticate your request<br />
`404` Not Found No such object<br />

### Server Errors

`500` Internal Server Error Something went wrong<br />
`503` Service Unavailable Your connection is being throttled or the service is down for maintenance<br />

## Endpoints

## Client

Endpoints that focus on a specific machine and its deployed AVS. These endpoints will contain health checks, version information for the ivy client as well as the currently deployed AVS, and allow for updates and reconfiguration of the deployed AVS.

### Get Overall System Status

**Endpoint:** `/client/status`

**Method:** `GET`

**Description:** Retrieves the overall status of the system

**Response:**

```json
{
  "error": [],
  "result": {
    "total_machines": 100,
    "healthy_machines": ["machine_id1", "...etc"],
    "unhealthy_machines": [
      "machine_id8",
      "machine_id45",
      "machine_id65",
      "machine_id89"
    ],
    "idle_machines": ["machine_id5"],
    "updateable_machines": ["machine_id65", "machine_id89"],
    "erroring_machines": ["machine_id8", "machine_id45"]
  }
}
```

### Get All Client Machines

**Endpoint:** `/client`

**Method:** `GET`

**Description:** Retrieves information for each deployed client instance

**Response:**

```json
[
  {
    "error": [],
    "result": {
      "machine_id": "0x59e5d5eb84edeba88d8a4109f94d0cd49b47f6de",
      "name": "your-hostname-auto-assigned-and-changeable",
      "status": "Healthy",
      "metrics": {
        "cpu_usage": 0.0,
        "memory_info": {
          "usage": 31713816576.0,
          "free": 2309165056.0,
          "status": "Warning"
        },
        "disk_info": {
          "usage": 352359101440.0,
          "free": 1677106334720.0,
          "status": "Healthy"
        },
        "uptime": 27093,
        "deployed_avs": {
          "name": "eigenda",
          "chain": "holesky",
          "version": "0.8.4",
          "active_set": "true",
          "operator_id": "0xbb7fe0c234cd07e2440b515621ab31d263f76e1e",
          "performance_score": 100.0,
          "updateable": false
        },
        "error": []
      },
      "last_checked": "2024-10-21T21:03:00.195332"
    }
  }
]
```

### Get Machine Info

**Endpoint:** `/client/{MACHINE_ID}`

**Method:** `GET`

**Description:** Retrieves same information as `/client` but for a specific ID.

**Response:**

```json
{
  "error": [],
  "result": {
    "machine_id": "0x0de1c0b493092b3eeb81c5fc2caee26a546ff5e8",
    "name": "your-hostname-auto-assigned-and-changeable",
    "status": "Idle",
    "metrics": {
      "cpu_usage": 0.0,
      "memory_info": {
        "usage": 34294882304.0,
        "free": 3112935424.0,
        "status": "Warning"
      },
      "disk_info": {
        "usage": 356483736576.0,
        "free": 1672981699584.0,
        "status": "Healthy"
      },
      "uptime": 40628,
      "deployed_avs": {
        "name": null,
        "chain": null,
        "version": null,
        "active_set": null,
        "operator_id": null,
        "performance_score": 0.0,
        "updateable": null
      },
      "error": []
    },
    "last_checked": "2024-10-22T00:48:35.674008"
  }
}
```

### Get All Idle Machines

**Endpoint:** `/client/idle`

**Method:** `GET`

**Description:** Retrieves IDs of idle machines.

**Response:**

```json
[
  "0x59e5d5eb84edeba88d8a4109f94d0cd49b47f6de",
  "0x84a161ee229d69abeae7c93c6ce8789ecc371497",
  "0xc9369f47aa9d19723fa4ef8e449a0c6b9ec9f43b",
  "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
  "0xd7a85c2eb6f148cba5a14f96e606acdd2d11911f",
  "0x52959f3ca4a5383fd50dcf39f4122076e42ebc38",
  "0x6d140ebd309d3382026c07c570a8493f962d1693",
  "0x0de1c0b493092b3eeb81c5fc2caee26a546ff5e8",
  "0x546cb7ac68763640d2727a1531aa142716e220cd"
]
```

### Get All Unhealthy Machines

**Endpoint:** `/client/unhealthy`

**Method:** `GET`

**Description:** Retrieves IDs of all unhealthy machines which includes machines with a deployed instance that are unregistered onchain, erroring machines, machines needing client updates, and offline machines with AVS registered status.

**Response:**

```json
[
  "0x59e5d5eb84edeba88d8a4109f94d0cd49b47f6de",
  "0x84a161ee229d69abeae7c93c6ce8789ecc371497"
]
```

### Get All Erroring Machines

**Endpoint:** `/client/errors`

**Method:** `GET`

**Description:** Retrieves IDs of all machines in serious error

**Response:**

```json
[
  "0x6d140ebd309d3382026c07c570a8493f962d1693",
  "0x0de1c0b493092b3eeb81c5fc2caee26a546ff5e8",
  "0x546cb7ac68763640d2727a1531aa142716e220cd"
]
```

### Get Machine's Metrics (Condensed)

**Endpoint:** `/client/{MACHINE_ID}/metrics`

**Method:** `GET`

**Description:** Gets system metrics and some avs metrics like performance score

**Response:**

```json
[
  {
    "node_id": "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
    "name": "ram_usage",
    "value": 13517897728.0,
    "attributes": null,
    "created_at": "2024-10-24T21:52:21.613245"
  },
  {
    "node_id": "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
    "name": "running",
    "value": 1.0,
    "attributes": {
      "operator_id": "0x76f6d8a8f4e51772b974589ab13cc04d193f9dd2",
      "avs": "eigenda",
      "chain": "holesky",
      "active_set": "false",
      "version": "0.8.4"
    },
    "created_at": "2024-10-24T21:52:21.613245"
  },
  {
    "node_id": "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
    "name": "cpu_usage",
    "value": 0.0,
    "attributes": null,
    "created_at": "2024-10-24T21:52:21.613245"
  },
  {
    "node_id": "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
    "name": "uptime",
    "value": 30265.0,
    "attributes": null,
    "created_at": "2024-10-24T21:52:21.613245"
  },
  {
    "node_id": "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
    "name": "eigen_performance_score",
    "value": 100.0,
    "attributes": {
      "avs_name": "da-node"
    },
    "created_at": "2024-10-24T21:52:21.613245"
  },
  {
    "node_id": "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
    "name": "disk_usage",
    "value": 370393510912.0,
    "attributes": null,
    "created_at": "2024-10-24T21:52:21.613245"
  }
]
```

or with no avs running

```json
NoRunningAvsFound("No running AVS found when searching for condensed metrics")
```

### Get Machine's Metrics

**Endpoint:** `/client/{MACHINE_ID}/metrics/all`

**Method:** `GET`

**Description:** Gets all metrics

**Response:**

```json
[
  {
    "node_id": "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
    "name": "ram_usage",
    "value": 13517897728.0,
    "attributes": null,
    "created_at": "2024-10-24T21:52:21.613245"
  },
  "..."
]
```

or with no avs running

```json
NoRunningAvsFound("No running AVS found when searching for condensed metrics")
```

### Get Machine's Logs

**Endpoint:** `/client/{MACHINE_ID}/logs`

**Method:** `GET`

**Optional Parameters:**

log_level - Valid values: debug, info, warning, error

from - timestamp value in milliseconds
to - timestamp value in milliseconds

**Description:** Gets logs with parameters including DATETIME to and from, as well as debug level. Valid values: debug, info, warning, error

**Response:**

```json
[
  {
    "node_id": "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
    "name": "ram_usage",
    "value": 13517897728.0,
    "attributes": null,
    "created_at": "2024-10-24T21:52:21.613245"
  },
  "..."
]
```

or with no avs running

```json
NoRunningAvsFound("No running AVS found when searching for condensed metrics")
```

### Get Machine's AVS Data

**Endpoint:** `/client/{MACHINE_ID}/data`

**Method:** `GET`

**Description:** Gets AVS data from a machine

**Response:**

```json
[
  {
    "serial_id": 434,
    "node_id": "0xa06b983c77bbaf7784b3218b2d7c18486d7578c4",
    "avs_name": "EigenDA",
    "avs_version": "0.8.4",
    "active_set": false,
    "operator_id": "0x76f6d8a8f4e51772b974589ab13cc04d193f9dd2"
  }
]
```

<!-- ### Get All Updateable Machines

**Endpoint:** `/client/updateable`

**Method:** `GET`

**Description:** Retrieves IDs of all machines which need an update to their AVS

**Response:**

```json
{
  "error": [],
  "result": {
    "updateable_machines": ["machine_id65", "machine_id89"]
  }
}
``` -->

<!-- TODO: future: update an ivynet client -->
<!-- TODO: future: new avs deployment -->
<!-- TODO: future: update an avs deployment -->

<!-- ## AVS -->

<!-- AVS Specific information like what AVS's are being run, what AVS's can be run, registration information, etc.

### Get All Deployable AVS's

**Endpoint:** `/avs/`

**Method:** `GET`

**Description:** Retrieves all AVS's deployable with the Ivynet Client

**Response:**

```json
{
  "error": [],
  "result": {
    "deployable_avs": [
      {
        "avs_name": "EigenDA",
        "avs_id": "eigenda",
        "networks": ["mainnet", "holesky"]
      },
      {
        "avs_name": "Lagrange ZK Prover Network",
        "avs_id": "lagrange_zk",
        "networks": ["mainnet", "holesky"]
      },
      {
        "avs_name": "Lagrange State Committees",
        "avs_id": "lagrange_sc",
        "networks": ["mainnet", "holesky"]
      },
      {
        "avs_name": "Cyber MACH",
        "avs_id": "altlayer_mach_cyber",
        "networks": ["mainnet", "holesky"]
      },
      {
        "avs_name": "AltLayer MACH",
        "avs_id": "altlayer_mach",
        "networks": ["mainnet", "holesky"]
      },
      {
        "avs_name": "Xterio MACH",
        "avs_id": "altlayer_mach_xterio",
        "networks": ["mainnet", "holesky"]
      },
      {
        "avs_name": "OpenLayer",
        "avs_id": "openlayer",
        "networks": ["mainnet", "holesky"]
      },
      {
        "avs_name": "incredible_squaring",
        "avs_id": "incredible_squaring",
        "networks": ["local"]
      }
    ]
  }
}
``` -->
<!--
### Get All Deployed AVS's

**Endpoint:** `/avs/deployed/`

**Method:** `GET`

**Description:** Retrieves all Ivynet deployed AVS's

**Response:**

```json
{
  "error": [],
  "result": {
    "deployed_avs": [
      {
        "avs_name": "EigenDA",
        "avs_id": "eigenda",
        "network": "mainnet",
        "avs_version": "0.7.4",
        "machine_id": "machine_id1",
        "operator": "0x0a3e3d83c99b27ca7540720b54105c79cd58dbdd",
        "registered": true
      },
      {
        "avs_name": "Lagrange ZK Prover Network",
        "avs_id": "lagrange_zk",
        "network": "holesky",
        "avs_version": "0.4.3",
        "machine_id": "machine_id2",
        "operator": "0x0a3e3d83c99b27ca7540720b54105c79cd58dbdd",
        "registered": false
      }
      // More deployed instances
    ]
  }
}
``` -->

<!-- ### Get All Registered AVS's

**Endpoint:** `/avs/registered/`

**Method:** `GET`

**Description:** Retrieves all registrations statuses for Ivynet deployable AVS's

**Response:**

```json
{
  "error": [],
  "result": {
    "registered_avs": [
      {
        "avs_name": "EigenDA",
        "avs_id": "eigenda",
        "network": "mainnet",
        "machine_id": "machine_id1",
        "operator": "0x0a3e3d83c99b27ca7540720b54105c79cd58dbdd",
        "registered": true
      }
    ]
  }
}
``` -->

<!-- ### Get Registration Status

**Endpoint:** `/avs/registered/{avs_id}`

**Method:** `GET`

**Description:** Retrieves registration status for a specific AVS

**Response:**

```json
{
  "error": [],
  "result": true
}
``` -->

<!-- ### Get AVS Deployments Needing Updates

**Endpoint:** `/avs/updateable/`

**Method:** `GET`

**Description:** Retrieves all Ivynet deployed AVS's that need an update

**Response:**

```json
{
  "error": [],
  "result": {
    "updateable_avs": [
      {
        "avs_id": "eigenda",
        "network": "mainnet",
        "avs_version": "0.6.9",
        "machine_id": "machine_id1"
      }
      // More updateable instances
    ]
  }
}
``` -->

<!-- ### Get AVS Hardware Requirements

**Endpoint:** `/avs/requirements/{avs_id}&{operator_address}`

**Method:** `GET`

**Description:** Retrieves hardware, bandwidth, stake, and allowlist requirements for a specific AVS tailored to an operator's stake

**Example Request:** /avs/requirements/lagrange_zk&0x0a3e3d83c99b27ca7540720b54105c79cd58dbdd

**Response:**

```json
{
  "error": [],
  "result": {
    "physical": {
      "node_class": "4XL",
      "cores": 16,
      "memory": 180000000000, //180 gb
      "disk": 60000000000, //60gb
      "bandwidth": 5000000000 //5gbps - not specified by lagrange, taken from EigenLayer node classes
    },
    "stake": {
      //EigenDA example - 2 quorums
      "0": 1000000000000000000, //Eigen Token needed with decimals
      "1": 13000000000000000000 // LST restaked or native restaked ETH
    },
    "allowlist": true
  }
}
``` -->

<!-- ### Get AVS Rewards Rate

**Endpoint:** `/avs/rewards/{avs_id}&{currency}&{operator_address}`

**Method:** `GET`

**Description:** Retrieves monthly payment for validating a specific AVS in dollar and eth basis based on operator stake

**Example Request:** /avs/rewards/eigenda&0x0a3e3d83c99b27ca7540720b54105c79cd58dbdd

**Response:**

```json
{
  "error": [],
  "result": {
    "dollar": 1657.33,
    "ethereum": 0.50885
  }
}
``` -->

<!-- TODO: future: avs historical rewards -->
<!-- TODO: future: avs historical slashing risk -->

<!-- ## Operator

Operator specific information like information about their delegation, currently registered avs count,

### Get Delegated Stake

**Endpoint:** `/operator/stake/{operator_address}`

**Method:** `GET`

**Description:** Retrieves delegated stake for each quorum on EigenLayer

**Response:**

```json
{
  "error": [],
  "result": {
    "eigenlayer": {
        "eigen": 0,
        "ethereum": {[
            {
                "name": "Cbeth",
                "address": "0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc",
                "delegated_stake": 351
            },
            {
                "name": "Steth",
                "address": "0x93c4b944D05dfe6df7645A86cd2206016c51564D",
                "delegated_stake": 732
            },
            {
                "name": "Reth",
                "address": "0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2",
                "delegated_stake": 923
            },
            {
                "name": "Sweth",
                "address": "0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6",
                "delegated_stake": 953
            },
            {
                "name": "Lseth",
                "address": "0xAe60d8180437b5C34bB956822ac2710972584473",
                "delegated_stake": 155
            },
            {
                "name": "Sfrxeth",
                "address": "0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6",
                "delegated_stake": 169
            },
            {
                "name": "Wbeth",
                "address": "0x7CA911E83dabf90C90dD3De5411a10F1A6112184",
                "delegated_stake": 234
            },
            {
                "name": "Ethx",
                "address": "0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d",
                "delegated_stake": 604
            },
            {
                "name": "Oseth",
                "address": "0x57ba429517c3473B6d34CA9aCd56c0e735b94c02",
                "delegated_stake": 130
            },
            {
                "name": "Meth",
                "address": "0x298aFB19A105D59E74658C4C334Ff360BadE6dd2",
                "delegated_stake": 705
            },
            {
                "name": "Ankreth",
                "address": "0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff",
                "delegated_stake": 286
            },
            {
                "name": "Oeth",
                "address": "0xa4C637e0F704745D182e4D38cAb7E7485321d059",
                "delegated_stake": 657
            },
            {
                "name": "BeaconEth",
                "address": "0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0",
                "delegated_stake": 146
            }
        ]}
    }
  }
}
``` -->

<!-- TODO: registered avs count -->
