FROM node:16.19.1-alpine3.17 as build-stage

RUN npm install -g npm@9.6.2

# Create app directory
WORKDIR /storage-service-ui

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

COPY . .

RUN npm install -g @angular/cli
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

RUN npm run build




FROM nginx:1.23.3-alpine as production-stage