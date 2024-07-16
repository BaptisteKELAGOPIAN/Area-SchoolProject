FROM node
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
RUN npm install octokit
RUN npm install -g firebase-tools
EXPOSE 8080
CMD ["npm", "run", "start:dev"]