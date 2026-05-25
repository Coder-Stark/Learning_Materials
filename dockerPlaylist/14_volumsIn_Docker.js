//VOLUMES IN DOCKER
//for making sync core file with container (docker)

//example change in index.js will reflect on port as well

//cmd
//docker run --name <container name> -p <docker port>:
// <internal port> --rm -v "<absolute path (remove index.js)>/:/app" 
// <image>

//example
//docker run --name basic-container-v1 -p 5000:
// 5000 --rm -v "E:\Codes\03. Learning\dockerPlaylist\basicProject:/app" 
// basic-app    

//same as above
//docker run --name basic-container-v1 -p 5000:5000 --rm -v 
// "${PWD}:/app" basic-app      

//in package.json 
//"dev": "nodemon -L index.js"    (for windows only)