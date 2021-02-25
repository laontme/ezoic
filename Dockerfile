FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY ./mjs.conf /etc/nginx/conf.d/mjs.conf
