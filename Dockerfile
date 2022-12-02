FROM node:19.1.0-alpine
WORKDIR /app-backend
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3001
