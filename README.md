# Backend REST API - Aviação

## Setup

### Install all dependencies:

```bash
npm i
```

### Run the backend server

```bash
npm start
```

## Endpoints

| Método | Verbo HTTP | Endpoint |
|---|---|---|
| Create new Model | POST | `/model` |
| List All Models | GET | `/model` |
| Find Model by Id | GET | `/model/{id}`|
| Update Model by Id | UPDATE | `/model/{id}`|
| Delete Model by Id | DELETE | `/model/{id}`|
|---|---|---|
| Create new Airplane | POST | `/airplane` |
| List All Airplanes | GET | `/airplane` |
| Find Airplane by Id | GET | `/airplane/{id}`|
| Update Airplane by Id | UPDATE | `/airplane/{id}`|
| Delete Airplane by Id | DELETE | `/airplane/{id}`|
|---|---|---|
| Create new ANAC Test | POST | `/airplane` |
| List All ANAC Tests | GET | `/anac_test` |
| Find ANAC Test by Id | GET | `/anac_test/{id}`|
| Update ANAC Test by Id | UPDATE | `/anac_test/{id}`|
| Delete ANAC Test by Id | DELETE | `/anac_test/{id}`|
|---|---|---|
| Create new Syndicate | POST | `/syndicate` |
| List All Syndicates | GET | `/syndicate` |
| Find Syndicate by Id | GET | `/syndicate/{id}`|
| Update Syndicate by Id | UPDATE | `/syndicate/{id}`|
| Delete Syndicate by Id | DELETE | `/syndicate/{id}`|
|---|---|---|
| Create new Employee | POST | `/employee` |
| List All Employees | GET | `/employee` |
| Find Employee by Id | GET | `/employee/{id}`|
| Update Employee by Id | UPDATE | `/employee/{id}`|
| Delete Employee by Id | DELETE | `/employee/{id}`|
