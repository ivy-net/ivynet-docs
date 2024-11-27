---
sidebar_position: 6
---

# Ivynet API Specification (Demo)

https://api1.test.ivynet.dev/

## Swagger

**https://api1.test.ivynet.dev/swagger-ui/**

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

## Organization

### Create Organization

**Endpoint:** `/organization`  
**Method:** `POST`  
**Description:** Creates a new organization  
**Example:** `POST /organization`

### Get Organization

**Endpoint:** `/organization/{id}`  
**Method:** `GET`  
**Description:** Retrieves organization details  
**Example:** `GET /organization/123`

### Get Organization Machines

**Endpoint:** `/organization/machines`  
**Method:** `GET`  
**Description:** Lists all machines in an organization  
**Example:** `GET /organization/machines`

### Get Organization AVSes

**Endpoint:** `/organization/avses`  
**Method:** `GET`  
**Description:** Lists all AVSes in an organization  
**Example:** `GET /organization/avses`

### Invite User

**Endpoint:** `/organization/invite`  
**Method:** `POST`  
**Description:** Invites a user to the organization  
**Example:** `POST /organization/invite`

### Confirm Organization

**Endpoint:** `/organization/confirm/{id}`  
**Method:** `POST`  
**Description:** Confirms an organization's verification  
**Example:** `POST /organization/confirm/123e4567-e89b-12d3-a456-426614174000`

### Add Operator Key

**Endpoint:** `/organization/keys`  
**Method:** `POST`  
**Description:** Adds a new operator key to the organization  
**Example:** `POST /organization/keys`

## Machine Management

### Get All Machines

**Endpoint:** `/machine`  
**Method:** `GET`  
**Description:** Retrieves information for all machines  
**Example:** `GET /machine`

### Get Machine Status

**Endpoint:** `/machine/status`  
**Method:** `GET`  
**Description:** Gets overview of healthy and unhealthy machines  
**Example:** `GET /machine/status`

### Get Idle Machines

**Endpoint:** `/machine/idle`  
**Method:** `GET`  
**Description:** Lists all idle machines  
**Example:** `GET /machine/idle`

### Get Unhealthy Machines

**Endpoint:** `/machine/unhealthy`  
**Method:** `POST`  
**Description:** Lists all unhealthy machines  
**Example:** `POST /machine/unhealthy`

### Get Healthy Machines

**Endpoint:** `/machine/healthy`  
**Method:** `POST`  
**Description:** Lists all healthy machines  
**Example:** `POST /machine/healthy`

### Get Machine Info

**Endpoint:** `/machine/{machine_id}`  
**Method:** `GET`  
**Description:** Gets detailed information about a specific machine  
**Example:** `GET /machine/123e4567-e89b-12d3-a456-426614174000`

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

## AVS Management

### Update AVS

**Endpoint:** `/machine/{machine_id}/{avs_name}`  
**Method:** `PUT`  
**Parameters:** `chain` (optional), `operator_address` (optional)  
**Description:** Updates AVS configuration  
**Example:** `PUT /machine/123e4567-e89b-12d3-a456-426614174000/eigenda?chain=mainnet&operator_address=0x123...`

### Get AVS Metrics

**Endpoint:** `/machine/{machine_id}/{avs_name}/metrics`  
**Method:** `GET`  
**Description:** Gets condensed metrics for a specific AVS  
**Example:** `GET /machine/123e4567-e89b-12d3-a456-426614174000/eigenda/metrics`

### Get All AVS Metrics

**Endpoint:** `/machine/{machine_id}/{avs_name}/metrics/all`  
**Method:** `GET`  
**Description:** Gets all metrics for a specific AVS  
**Example:** `GET /machine/123e4567-e89b-12d3-a456-426614174000/eigenda/metrics/all`

### Get AVS Logs

**Endpoint:** `/machine/{machine_id}/{avs_name}/logs`  
**Method:** `GET`  
**Parameters:** `log_level` (optional), `from` (optional), `to` (optional)  
**Description:** Retrieves logs for a specific AVS  
**Example:** `GET /machine/123e4567-e89b-12d3-a456-426614174000/eigenda/logs?log_level=error&from=1635724800&to=1635811200`

## Public Key Management

### Get All Keys

**Endpoint:** `/pubkey`  
**Method:** `GET`  
**Description:** Retrieves all operator keys for the organization  
**Example:** `GET /pubkey`

### Create Key

**Endpoint:** `/pubkey`  
**Method:** `POST`  
**Parameters:** `public_key`, `name`  
**Description:** Creates a new operator key  
**Example:** `POST /pubkey?public_key=0x123...&name=main-key`

### Update Key Name

**Endpoint:** `/pubkey`  
**Method:** `PUT`  
**Parameters:** `public_key`  
**Description:** Updates the name of an existing operator key  
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
**Description:** Lists all clients and their associated machines  
**Example:** `GET /client`

### Get Client Machines

**Endpoint:** `/client/{id}`  
**Method:** `GET`  
**Description:** Lists all machines associated with a specific client  
**Example:** `GET /client/0x123...`

## Information

### Get AVS Version

**Endpoint:** `/info/avs/version/{avs}`  
**Method:** `GET`  
**Description:** Gets version information for a specific AVS  
**Example:** `GET /info/avs/version/eigenda`

### Get All AVS Versions

**Endpoint:** `/info/avs/version`  
**Method:** `GET`  
**Description:** Gets version information for all supported AVSes  
**Example:** `GET /info/avs/version`
