# --- Stage 1: Build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# This creates the 'dist' folder
RUN npm run build 

# --- Stage 2: Serve ---
FROM nginx:alpine
# Copy the built files from Stage 1 into Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80 (Nginx default)
EXPOSE 80
# Run Nginx
CMD ["nginx", "-g", "daemon off;"]