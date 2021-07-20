# pull the base image
# FROM node:alpine
FROM node:11.12.0-alpine

RUN apk update && apk add python make g++
RUN apk --no-cache add curl
# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./

ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Run the install
RUN npm config set registry https://artifactory.spectrumtoolbox.com/artifactory/api/npm/npm/
RUN curl --fail -u c-willliam.tring@charter.com:AKCp8ihpZJ4tooRFKC727N12sKs5s5yDb12NoS16XWwV9hLXGaQoHKdwTyRLghBDU8HALy4Qx https://artifactory.spectrumtoolbox.com/artifactory/api/npm/auth >> ~/.npmrc
RUN npm install --legacy-peer-deps

# Bundle app source
COPY . .
# Specify port
EXPOSE 4000

CMD ["npm", "run", "dist"]
