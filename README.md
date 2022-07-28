# Docker Commands

```
docker build -t "image-name" .
```

```
docker images
```

```
docker image rm "image-name"
```

```
docker run -p 3000:3000 -d --name node-express-app
```

```
docker run -p 3000:3000 -d --name node-express-app node-express-app-image
```

```
docker ps
```

```
docker exec -it node-express-app bash
```

```
docker rm node-express-app -f (container will get stop)
```
