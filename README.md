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
docker run -p 3000:3000 -d  image-name
```

### To run a container with a custom container name

```
docker run -p 3000:3000 -d --name container-name  image-name
```

### This command will list the running container in our system.

```
docker ps
```
