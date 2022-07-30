# Docker Commands

### To built an image

```
docker build -t "image-name" .
```

### To list all the images

```
docker images
```

### To delete an image

```
docker image rm "image-name"
```

### To run a container

```
docker run -p 3000:3000 -d  node-app-image
```

### To run a container with a custom container name

```
docker run -p 3000:3000 -d --name node-express-app node-express-app-image
```

```
docker ps
```

```
docker ps -a (started or Stop all container will get listed)
```

### This cmd will give us a intertaice bash for our container

```
docker exec -it node-express-app bash
```

```
docker rm node-express-app -f (container will get stop)
```

### To sync you current folder with the docker container use the below commands.

```
docker run -v %cd%:/app -p 3000:3000 -d --name node-app node-app-image
```

### Notes

    - %cd% is the path to folder on location
    - /app is the path to folder on container

```
docker logs containerID
```
