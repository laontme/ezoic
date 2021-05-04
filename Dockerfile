FROM nginx:alpine
COPY ./src /usr/share/nginx/html
COPY ./mjs.conf /etc/nginx/conf.d/mjs.conf
