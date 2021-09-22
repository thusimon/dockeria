#base image
FROM node:16-alpine as builder

WORKDIR /usr/app

# dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx:stable-alpine
# EXPOSE is for AWS elasticbeanstalk, it will find this EXPOSE key, and use that port for mapping the net work traffic
EXPOSE 80
COPY --from=builder /usr/app/build /usr/share/nginx/html
