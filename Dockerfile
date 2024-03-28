FROM node:20-alpine 
WORKDIR /notes-app
COPY package.json  /notes-app/
COPY package-lock.json  /notes-app/
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm","run","dev"]
