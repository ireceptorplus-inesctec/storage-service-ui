# iReceptorChain Storage UI

This repository contains the front-end software of the client to interact with [iReceptorChain](https://github.com/ireceptorplus-inesctec/storage-service-ui) prototype. The iReceptorChain client also consists of a back-end that is available at [this repository](https://github.com/ireceptorplus-inesctec/storage-service).

This repository contains the code for a coreui application that interacts with the back-end which interacts with the blockchain.

## Running

This repository currently supports two different running modes for the iReceptorChain Storage Service: development and deployment.

For both modes, you need to set the URL of the storage-service api. The URL should be accessible by the browser accessing this Core-ui front-end component. To set the URL, please refer to instructions for either Development or Production listed below.

### Development
Before running this Core-ui front-end component, you need to set the api url. For that, go to file [environment.ts](src/environments/environment.ts), at ```src/environments/environment.ts``` and set the apiUrl variable to the url of the storage-service api.

To run in development mode, navigate to the root of the repository and run
```bash
npm start
```

### Production
Before running this Core-ui front-end component, you need to set the api url. For that, go to file [environment.prod.ts](src/environments/environment.prod.ts), at ```src/environments/environment.prod.ts``` and set the apiUrl variable to the url of the storage-service api.

Then, at the root of the repository, run
```bash
docker-compose up
```