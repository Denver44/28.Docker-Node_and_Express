## Docker Commands

---

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

### To run a container with -d detach mode and port forwarding

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

### This command will return the list of all Started or Stopped containers

```
docker ps -a
```

### This cmd will give us a interactive bash for our container

```
docker exec -it container-name bash
```

### To kill a running container

```
docker rm container-name -f
```

### To sync you current folder dir with the docker container /app dir use the below commands.

```
docker run -v %cd%:/app -p 3000:3000 -d --name container-name image-name
```

### This command help us to get the logs of the container

```
docker logs containerID / container-name
```

### Anonymous volume this hack for node_modules folder

```
docker run -v %cd%:/app -v /app/node_modules -p 3000:3000 -d --name container-name image-name
```

---

# Key Takeaways on PORT Forwarding

- By Default Docker container can talk to the outside world.
- But from the outside world no once can talk with our container that is by default due to security mechanism.
- Outside world means local machine and internet both.

- docker run -p 3000:3000 -d  image-name Here in this command do port forwarding we send the traffic which comes to our machine at port 3000 will be forwarded to container port 3000.
- Now we are able to talk to our container.
- number of left to -p is the traffic coming from outside world and the number on right side is the number which our container is expecting.

# Key Takeaways on Sync Source code

- In docker we can sync our source code with the docker work dir.
- So we don't have to rebuild our image again as we make changes in our code.
- During build command ve need use -v flag with localPath:ContainerPath
- Here we have use %cd% which automatically fetch the current local path of pour folder.
- /app is the path to folder on container from which we have to sync.
- This -v is bind mount.
- This will sync all the folder.

# Key Takeaways on anonymous volume

- To prevent the local folder from over riding the /app dir of our container we use anonymous volume.
- Using another v flag we can mention the anonymous volume.
- -v /app/node_modules this is little hack to bind the node_modules folder with our container.
- All the folder will get sync but it will not touch the node_modules folder of container
