FROM alpine:latest
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add --no-cache --update nodejs nodejs-npm
COPY . /app
RUN cd /app && npm install --production --registry=https://registry.npm.taobao.org
WORKDIR /app
EXPOSE 8000
CMD node /app/app.js
