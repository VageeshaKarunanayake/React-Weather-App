# ==== CONFIGURE =====
FROM node:18-alpine 
WORKDIR /app
COPY . .

# ==== BUILD =====
RUN npm ci 
# Build the app
RUN npm run build

# ==== RUN =======
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]
