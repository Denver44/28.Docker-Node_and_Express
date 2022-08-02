# Docker Commands

### To build an image

```
docker build .
```

### To build an image with a tag name

```
docker build -t "image-name" .
```

### To list all the images

```
docker images ls
```

### To delete an image

```
docker image rm image-name
```

### To run a container with -d detach mode

```
docker run -p 3000:3000 -d  image-name
```

### To run a container with a custom container name

```
docker run -p 3000:3000 -d --name container-name  image-name
```

### This command will list the running container in our system.

```
docker ps
```

```
docker ps -a (started or Stop all container will get listed)
```

### This cmd will give us a interactive bash for our container

```
docker exec -it node-app bash
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

```
docker ps -a
```

### Anonymous volume this hack for node_modules folder

```
docker run -v %cd%:/app -v /app/node_modules -p 3000:3000 -d --name test node-app
```

### Docker Read Only Bind Mount

```
docker run -v %cd%:/app:ro -v /app/node_modules -p 3000:3000 -d --name test node-app
```
