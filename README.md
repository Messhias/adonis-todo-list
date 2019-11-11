# ToDo List with Adonis Framework

This project is a test project for adonis framework.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup with docker

You can easy setup the application using [Docker](https://docker.com) typing:

```docker
docker-compose up --build
```

If you want to run the container in detached mode you type:

```docker
docker-compose up -d --build
```

## Setup without docker
Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
