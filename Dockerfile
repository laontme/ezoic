FROM node:alpine AS webpack-build
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn run build

FROM nginx:alpine AS nginx-serve
WORKDIR /app
COPY --from=webpack-build /app/dist /usr/share/nginx/html
