FROM node:lts-alpine

WORKDIR /usr/src/app
COPY *.js* ./
RUN npm install
COPY src ./src
RUN npm run build

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY --from=0  /usr/src/app/package*.json ./
RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY --from=0 /usr/src/app/dist .

EXPOSE 8080
CMD [ "node", "main.js" ]
