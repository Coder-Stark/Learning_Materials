//DELET IMAGES AND CONTAINERS

/*
Via docker desktop 
first delete running container then images


//-> remove particular image via terminal
//for unused image (not having container)
//-> docker image rm <nof>

// -> for inused image (having container)
//-> docker image rm <nof> -f

//another approach (first delete container then image)
// -> if container stopped
//-> docker container rm <nof>

// -> if container running 
//-> docker container rm <nof> -f
*/