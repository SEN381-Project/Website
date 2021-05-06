FROM node:latest
ADD . .
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]