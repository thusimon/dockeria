# commands
* docker ps
  * docker ps --all
* docker run \<image-name\>
  * docker create \<image-name\>
  * docker start -a \<container-id\>
  * docker run -p \<host-portal\>:\<container-portal\> \<image-name\>
  * docker run -v \<folder-in-container-NO-mapping\> -v \<folder-in-host\>:\<folder-in-container\> \<image-name\>
  * docker run -it \<image-name\> \<commands\> # e.g docker run 62a459883961 npm run test
* docker logs \<container-id\>
* docker stop \<container-id\>
  * docker kill \<container-id\>
* docker exec -it \<container-id\> \<commands\>
  * docker exec -it \<container-id\> sh
* docker build .
  * docker build -t \<docker-id\>\\<project-name\>:\<version-tag\> .
  * docker build -f \<docker-file-path\> .
* docker rm \<container-id\>
  * docker imgage rm \<image-id\>
  * docker system prune -a
  * docker volume rm $(docker volume ls -q -f dangling=true)
