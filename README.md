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

---

# Key Takeaways

- By Default Docker container can talk to the outside world.
- But from the outside world no once can talk with our container that is by default due to security mechanism.
- Outside world means local machine and internet both.

- docker run -p 3000:3000 -d  image-name Here in this command do port forwarding we send the traffic which comes to our machine at port 3000 will be forwarded to container port 3000.
- Now we are able to talk to our container.
- number of left to -p is the traffic coming from outside world and the number on right side is the number which our container is expecting.
