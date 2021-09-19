# commands
* docker ps
  * docker ps --all
* docker run \<image-name\>
  * docker create \<image-name\>
  * docker start -a \<container-id\>
  * docker run -p \<host-portal\>:\<container-portal\> \<image-name\>
* docker logs \<container-id\>
* docker stop \<container-id\>
  * docker kill \<container-id\>
* docker exec -it \<container-id\> \<commands\>
  * docker exec -it \<container-id\> sh
* docker build .
  * docker build -t \<docker-id\>\\<project-name\>:\<version-tag\> .
