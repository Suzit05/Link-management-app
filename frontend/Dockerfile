# -------- BUILD STAGE --------
FROM node:18-alpine AS builder

WORKDIR /app
COPY .env .env    

COPY package*.json ./
RUN npm install

COPY . .     

RUN npm run build


# -------- PRODUCTION STAGE --------
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
