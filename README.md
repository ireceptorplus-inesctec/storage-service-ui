# iReceptorChain Storage UI

This repository contains the front-end software of the client to interact with [iReceptorChain](https://github.com/ireceptorplus-inesctec/storage-service-ui) prototype. The iReceptorChain client also consists of a back-end that is available at [this repository](https://github.com/ireceptorplus-inesctec/storage-service).

This repository contains the code for a coreui application that interacts with the back-end which interacts with the blockchain.

## Running

This repository currently supports two different running modes for the iReceptorChain Storage Service: development and deployment.

### Development
To run in development mode, navigate to the root of the repository and run
```bash
npm start
```

### Production
To run in development mode, you need to edit the [environment.prod.ts](src/environments/environment.prod.ts), at ```src/environments/environment.prod.ts```, replace the IP in the apiUrl variable to the IP address of the machine where the storage-service is being deployed.

Then, at the root of the repository, run
```bash
docker-compose up
```