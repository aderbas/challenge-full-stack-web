FROM node:14-alpine

# Service port
ARG PORT

# Create app directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# App source
COPY . .

# Change onwner to node user
RUN chown -R node:node /home/node/app

# Chanhe user to node user
USER node

# Bind port
EXPOSE $PORT

CMD ["npm", "start"]