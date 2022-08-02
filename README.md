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

---

# Key Takeaways

- By Default Docker container can talk to the outside world.
- But from the outside world no once can talk with our container that is by default due to security mechanism.
- Outside world means local machine and internet both.

- docker run -p 3000:3000 -d  image-name Here in this command do port forwarding we send the traffic which comes to our machine at port 3000 will be forwarded to container port 3000.
- Now we are able to talk to our container.
- number of left to -p is the traffic coming from outside world and the number on right side is the number which our container is expecting.
