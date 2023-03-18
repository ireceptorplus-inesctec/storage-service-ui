FROM node:16.19.1-alpine3.17 as build-stage

RUN npm install -g npm@9.6.2

# Create app directory
WORKDIR /storage-service-ui

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN npm install -g @angular/cli
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build


FROM nginx:1.23.3-alpine as production-stage
COPY --from=build-stage /storage-service-ui/dist/coreui-free-angular-admin-template /usr/share/nginx/html
COPY --from=build-stage /storage-service-ui/deployed/default.conf /etc/nginx/conf.d/default.conf

ENV NGINX_PORT=80

