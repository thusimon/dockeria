# using existing docker image as a base
# like installing OS on a blank machine
FROM alpine

# download and install dependency
# like installing softwares
RUN apk add --update redis

# tell the image what to do when it starts as a container
CMD ["redis-server", "--protected-mode no"]