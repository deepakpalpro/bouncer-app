#  Dockerfile for Node Express Backend

FROM node:lts-alpine

# Create App Directory
RUN mkdir -p /usr/src/app/api-rest-private
WORKDIR /usr/src/app/api-rest-private

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["npm","start"]