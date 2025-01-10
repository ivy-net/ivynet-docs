---
sidebar_position: 7
---

# Ivynet API Docs

Use this URL: (https://api1.test.ivynet.dev/) to construct HTTP queries.

## Swagger

The API definition are visualised with [Swagger](https://api1.test.ivynet.dev/swagger-ui/)

## Authorization

Refer to swagger above for use of the authorize endpoint, or use basic auth (email/password) per request.

## Status Codes

### Success Messages

`200` OK Successful request
`201` Created New object saved
`204` No content Object deleted

### Client Errors

`400` Bad Request Returns JSON with the error message
`401` Unauthorized Couldn't authenticate your request
`404` Not Found No such object

### Server Errors

`500` Internal Server Error Something went wrong
`503` Service Unavailable Your connection is being throttled or the service is down for maintenance

# Endpoints

## Machine Management

### Get All Machines

**Endpoint:** `/machine`
**Method:** `GET`
**Description:** Retrieves information for all machines

#### Response

```json
[
  {
    "machine_id": "b4ea1e76-f4ab-4d36-a374-840a69fe0a95",
    "name": "US-East-Eigen-AVS-1",
    "status": "Unhealthy",
    "system_metrics": {
      "cores": 24.0,
      "cpu_usage": 0.0,
      "memory_info": {
        "usage": 13781446656.0,
        "free": 45015527424.0,
        "status": "Healthy"
      },
      "disk_info": {
        "usage": 419884315648.0,
        "free": 1609581120512.0,
        "status": "Healthy"
      }
    },
    "avs_list": [
      {
        "machine_id": "b4ea1e76-f4ab-4d36-a374-840a69fe0a95",
        "avs_name": "eigenda-native-node",
        "avs_type": "EigenDA",
        "avs_version": "0.8.4",
        "chain": "holesky",
        "version_hash": "sha256:6650119a385f2447ca60f03080f381cf4f10ad7f920a2ce27fe0d973ac43e993",
        "operator_address": "0x123...",
        "active_set": false,
        "created_at": "2024-11-28T15:41:59.629501",
        "updated_at": "2024-11-28T15:41:59.629501",
        "uptime": 1765.0,
        "performance_score": 100.0,
        "update_status": "Unknown",
        "errors": [
          "UnregisteredFromActiveSet",
        ]
      }
    ],
    "errors": [
      {
        "NodeError": {
          "name": "/eigenda-native-node",
          "node_type": "EigenDA",
          "errors": [
            "UnregisteredFromActiveSet",
          ]
        }
      }
    ]
  }
]
```

### Get Machine Status

**Endpoint:** `/machine/status`
**Method:** `GET`
**Description:** Gets overview of healthy and unhealthy machines

#### Response

```json
{
  "total_machines": 5,
  "healthy_machines": ["21152637-fabd-4261-b72b-d43d76c02ff9", "d1f25fbe-4163-4b8c-9c75-61da44091da9"],
  "unhealthy_machines": ["6994f6ce-8e8e-4ee0-81ec-0756a4ae3bbe", "f021e11f-c908-45e7-8bb3-9a192422f38c", "f06d8d7e-26b7-40cf-abf3-cf354d265c9d"]
}
```

### Get Idle Machines

**Endpoint:** `/machine/idle`
**Method:** `GET`
**Description:** Lists all idle machines

#### Response

```json
["3082db55-4916-41d9-8057-3a0ee5493817"]
```

### Get Unhealthy Machines

**Endpoint:** `/machine/unhealthy`
**Method:** `GET`
**Description:** Lists all unhealthy machines

#### Response

```json
["6994f6ce-8e8e-4ee0-81ec-0756a4ae3bbe", "f021e11f-c908-45e7-8bb3-9a192422f38c", "f06d8d7e-26b7-40cf-abf3-cf354d265c9d"]
```

### Get Healthy Machines

**Endpoint:** `/machine/healthy`
**Method:** `GET`
**Description:** Lists all healthy machines

#### Response

```json
["21152637-fabd-4261-b72b-d43d76c02ff9", "d1f25fbe-4163-4b8c-9c75-61da44091da9"]
```

### Get Machine Info

**Endpoint:** `/machine/{machine_id}`
**Method:** `GET`
**Description:** Gets detailed information about a specific machine
**Example:** `GET /machine/123e4567-e89b-12d3-a456-426614174000`

#### Response

```json
{
"machine_id": "b4ea1e76-f4ab-4d36-a374-840a69fe0a95",
"name": "US-East-Eigen-AVS-1",
"status": "Unhealthy",
"system_metrics": {
    "cores": 24.0,
    "cpu_usage": 0.0,
    "memory_info": {
    "usage": 13781446656.0,
    "free": 45015527424.0,
    "status": "Healthy"
    },
    "disk_info": {
    "usage": 419884315648.0,
    "free": 1609581120512.0,
    "status": "Healthy"
    }
},
"avs_list": [
    {
    "machine_id": "b4ea1e76-f4ab-4d36-a374-840a69fe0a95",
    "avs_name": "eigenda-native-node",
    "avs_type": "EigenDA",
    "avs_version": "0.8.4",
    "chain": "holesky",
    "version_hash": "sha256:6650119a385f2447ca60f03080f381cf4f10ad7f920a2ce27fe0d973ac43e993",
    "operator_address": "0x123...",
    "active_set": false,
    "created_at": "2024-11-28T15:41:59.629501",
    "updated_at": "2024-11-28T15:41:59.629501",
    "uptime": 1765.0,
    "performance_score": 100.0,
    "update_status": "Unknown",
    "errors": [
        "UnregisteredFromActiveSet",
    ]
    }
],
"errors": [
    {
    "NodeError": {
        "name": "/eigenda-native-node",
        "node_type": "EigenDA",
        "errors": [
        "UnregisteredFromActiveSet",
        ]
    }
    }
]
}
```

### Delete Machine

**Endpoint:** `/machine/{machine_id}`
**Method:** `DELETE`
**Description:** Removes a machine from the system
**Example:** `DELETE /machine/123e4567-e89b-12d3-a456-426614174000`

### Set Machine Name

**Endpoint:** `/machine/{machine_id}`
**Method:** `POST`
**Parameters:** `name` (query)
**Description:** Sets a custom name for a machine
**Example:** `POST /machine/123e4567-e89b-12d3-a456-426614174000?name=production-1`

### Get Machine Node Data

**Endpoint:** `/machine/{machine_id}/info`
**Method:** `GET`
**Description:** Retrieves all node information for a machine
**Example:** `GET /machine/123e4567-e89b-12d3-a456-426614174000/info`

#### Response

```json
[
  {
    "machine_id": "21152637-fabd-4261-b72b-d43d76c02ff9",
    "avs_name": "/eigenda-native-node",
    "avs_type": "EigenDA",
    "avs_version": "0.0.0",
    "chain": "holesky",
    "version_hash": "sha256:6650119a385f2447ca60f03080f381cf4f10ad7f920a2ce27fe0d973ac43e993",
    "operator_address": null,
    "active_set": false,
    "created_at": "2024-12-01T15:11:10.141019",
    "updated_at": "2024-12-01T15:36:11.850349",
    "uptime": 74153.0,
    "performance_score": 0.0,
    "update_status": "Unknown",
    "errors": [
      "CrashedNode",
      "NoOperatorId"
    ]
  }
]
```

## AVS Management

### Update an AVS's chain and/or Operator Key for active set monitoring

**Endpoint:** `/machine/{machine_id}`
**Method:** `PUT`
**Parameters:** `avs_name`, `chain` (optional), `operator_address` (optional)
**Description:** Updates AVS configuration
**Example:** `PUT /machine/123e4567-e89b-12d3-a456-426614174000?avs_name=/eigenda-native-node&chain=mainnet&operator_address=0x123...`

### Get AVS Metrics (Condensed)

**Endpoint:** `/machine/{machine_id}/metrics`
**Method:** `GET`
**Parameters** `avs_name`
**Description:** Gets condensed metrics for a specific AVS
**Example:** `GET /machine/123e4567-e89b-12d3-a456-426614174000?avs_name=/eigenda-native-node`

#### Response

```json
[
  {
    "machine_id": "2d65d5bb-df5d-4882-b7a9-0e7e3f04eacb",
    "avs_name": "/eigenda-native-node",
    "name": "eigen_performance_score",
    "value": 100.0,
    "attributes": {
      "avs_name": "da-node"
    },
    "created_at": "2024-12-01T18:55:40.794273"
  },
  {
    "machine_id": "2d65d5bb-df5d-4882-b7a9-0e7e3f04eacb",
    "avs_name": "/eigenda-native-node",
    "name": "node_reachability_status",
    "value": 0.0,
    "attributes": {
      "service": "retrieval"
    },
    "created_at": "2024-12-01T18:55:40.794273"
  },
  {
    "machine_id": "2d65d5bb-df5d-4882-b7a9-0e7e3f04eacb",
    "avs_name": "/eigenda-native-node",
    "name": "node_reachability_status",
    "value": 0.0,
    "attributes": {
      "service": "dispersal"
    },
    "created_at": "2024-12-01T18:55:40.794273"
  }
]
```

### Get All AVS Metrics

**Endpoint:** `/machine/{machine_id}/metrics/all`
**Method:** `GET`
**Parameters** `avs_name`
**Description:** Gets all metrics for a specific AVS
**Example:** `GET /machine/123e4567-e89b-12d3-a456-426614174000/metrics/all?avs_name=eigenda`

#### Response

Same as above, just with more metrics

### Get AVS Logs

**Endpoint:** `/machine/{machine_id}/logs`
**Method:** `GET`
**Parameters:** `avs_name`, `log_level` (optional), `from` (optional), `to` (optional)
**Description:** Retrieves logs for a specific AVS
**Example:** `GET /machine/123e4567-e89b-12d3-a456-426614174000/logs?avs_name=eigenda&log_level=error&from=1635724800&to=1635811200`

<!-- #### Response

```json

``` -->

## Public Key Management

### Get All Keys

**Endpoint:** `/pubkey`
**Method:** `GET`
**Description:** Retrieves all operator public keys for the organization

#### Response

```json
["0x000000000000000000000000000000000000dEaD"]
```

### Create Key

**Endpoint:** `/pubkey`
**Method:** `POST`
**Parameters:** `public_key`, `name`
**Description:** Add a new operator public key to monitor
**Example:** `POST /pubkey?public_key=0x123...&name=main-key`

### Update Key Name

**Endpoint:** `/pubkey`
**Method:** `PUT`
**Parameters:** `public_key`
**Description:** Updates the name of an existing operator public key
**Example:** `PUT /pubkey?public_key=0x123...`


### Delete Key

**Endpoint:** `/pubkey`
**Method:** `DELETE`
**Parameters:** `public_key`
**Description:** Removes an operator key
**Example:** `DELETE /pubkey?public_key=0x123...`

## Client Management

### Get All Clients

**Endpoint:** `/client`
**Method:** `GET`
**Description:** Lists all clients and their associated machines (separately to help with container orchestration in the future)

#### Response

```json
[
  [
    {
      "client_id": "0x41357be4cd76bd57bb692d0fda7a5b5ec5b879ee",
      "organization_id": 1,
      "created_at": "2024-12-01T18:55:40.699992",
      "updated_at": "2024-12-01T18:55:40.699992"
    },
    [
      {
        "machine_id": "2d65d5bb-df5d-4882-b7a9-0e7e3f04eacb",
        "name": "darthvader",
        "client_id": "0x41357be4cd76bd57bb692d0fda7a5b5ec5b879ee",
        "created_at": "2024-12-01T18:55:40.708849",
        "updated_at": "2024-12-01T18:55:40.708849"
      }
    ]
  ]
]
```

### Get Client Machines

**Endpoint:** `/client/{id}`
**Method:** `GET`
**Description:** Lists all machines associated with a specific client
**Example:** `GET /client/0x123...`

#### Response

```json
[
  {
    "client_id": "0x41357be4cd76bd57bb692d0fda7a5b5ec5b879ee",
    "organization_id": 1,
    "created_at": "2024-12-01T18:55:40.699992",
    "updated_at": "2024-12-01T18:55:40.699992"
  },
  [
    {
      "machine_id": "2d65d5bb-df5d-4882-b7a9-0e7e3f04eacb",
      "name": "darthvader",
      "client_id": "0x41357be4cd76bd57bb692d0fda7a5b5ec5b879ee",
      "created_at": "2024-12-01T18:55:40.708849",
      "updated_at": "2024-12-01T18:55:40.708849"
    }
  ]
]
```

## AVS View

### Get all AVS's

**Endpoint:** `/avs`
**Method:** `GET`
**Description:** Gets info on all AVS's

#### Response

```json
[
  {
    "machine_id": "2d65d5bb-df5d-4882-b7a9-0e7e3f04eacb",
    "avs_name": "/eigenda-native-node",
    "avs_type": "EigenDA",
    "avs_version": "0.8.4",
    "chain": null,
    "version_hash": "sha256:6650119a385f2447ca60f03080f381cf4f10ad7f920a2ce27fe0d973ac43e993",
    "operator_address": null,
    "active_set": false,
    "created_at": "2024-12-01T18:55:40.944938",
    "updated_at": "2024-12-01T19:05:41.938524",
    "uptime": 87564.0,
    "performance_score": 100.0,
    "update_status": "Unknown",
    "errors": [
      "UnregisteredFromActiveSet",
      "NoChainInfo",
      "NoOperatorId"
    ]
  }
]
```

## Information

### Get AVS Version

**Endpoint:** `/info/avs/version/{avs}`
**Method:** `GET`
**Description:** Gets version information for a specific AVS - could return multiple objects that differ by chain
**Example:** `GET /info/avs/version/eigenda`

#### Response

```json
[
  {
    "node_type": "EigenDA",
    "chain": "holesky",
    "latest_version": "0.8.5",
    "breaking_change_version": "0.8.0",
    "breaking_change_datetime": "2024-10-11T05:00:00"
  }
]
```

### Get All AVS Versions

**Endpoint:** `/info/avs/version`
**Method:** `GET`
**Description:** Gets version information for all supported AVSes
