FROM node:16.16-alpine3.16 as build-stage


# Create app directory
WORKDIR /storage-service-ui

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN npm install -g @angular/cli
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run-script build

CMD [ "npm", "run", "dist" ]


FROM nginx:1.23.3-alpine as production-stage