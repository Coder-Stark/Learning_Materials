//01. -> build docker images
//->  docker build -t <(noi)-name of image> .

//02. -> all images
//-> docker images
//02b. -> all containers
// -> docker ps -a


//03. -> remove particular image via terminal
//for unused image (not having container)
//-> docker image rm <noi>
//-> docker rmi <noi>                   //same as above

//04. -> for inused image (having container)
//-> docker image rm <noi> -f

//another approach (first delete container then image)
//05. -> if container stopped
//-> docker container rm <noc>
//-> docker rm <noc>                         //same as above

//06. -> if container running 
//-> docker container rm <noi> -f

//07. -> all cache and unused container remove  (not used)
//-> docker system prune -a
//07b. -> particular container delete
//-> docker rm <(noc)-name of container>

//08. -> to verify current storage
//-> docker system df

//09. -> build next version of an image
//-> docker build -t basic-app:v2 .

//10. -> run particular container
//-> docker run --name <container-name(anything)> -p 5500:500 <noi>

//11. -> run docker containers with volume
//-> docker run --name <noc> -p 5000:5000 --rm -v "${PWD}:/app" <noi>    

//12. -> run compose file
//-> docker compose up