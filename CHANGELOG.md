### Updates 2019-11-19 (HEAD -> feature/repository)
>Tue, 19 Nov 2019 22:17:00 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)

- Created the active NoSQL and SQL repositories.
- Started create the Base repository pattern to implement in the future repositories.



### Updates 2019-11-18 (origin/feature/repository)
>Mon, 18 Nov 2019 09:33:04 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)

- Created the post-commit file to generate CHANGELOG.md for every commit as developer diary.
- Started working on repository pattern in the project.
- Removed yarn.lock from project to not raise security issues on github repository.
- Updated .gitignore file to not get the yarn.lock file.



### Updates 2019-11-15 (origin/feature/controllers, feature/controllers)
>Fri, 15 Nov 2019 13:29:06 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)

- Finished to forge the ResourceController it'll be responsible to control all the
application default basic operations (create, delete, put and get).
- Set up all the necessary abstractions methods for extensions of the ResourceController
- Created the UsersController as test (it'll implemented a real user test case in the future) for testing the
ResourceController Abstractions.
- Changelog updates.

Next steps:

- Create the RepositoryLucidORM for abstraction of all the necessary transactions and model communication.

Possible improvements:
- Create interfaces for ResourceController.
- Start the LucidORM with interfaces implementations.



### created resource controller, need to finish the implmentation
>Tue, 12 Nov 2019 07:40:10 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)




### changelod misspelling fixes (origin/feature/migrations, feature/migrations)
>Mon, 11 Nov 2019 20:01:15 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)




### Updates 2019-11-11
>Mon, 11 Nov 2019 20:00:17 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)

- Created migrations
- General migrations



### added the changelog.md (origin/feature/docker, feature/docker)
>Mon, 11 Nov 2019 19:32:55 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)




### Updates 2019-11-11
>Mon, 11 Nov 2019 19:30:23 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)

- Created docker-compose file with web context for Adonis NodeJS application.
- Created Dockerfile to use the Adonis Framework within docker context (always using the latest NodeJS image).
- Update README.md with relevant information showing how to run the application with / without Docker.
- Created changelog



### project package updates (origin/master, master)
>Sun, 10 Nov 2019 20:34:17 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)




### first commit
>Sun, 10 Nov 2019 20:21:48 +0400

>Author: Fabio William Conceição (messhias@gmail.com)

>Commiter: Fabio William Conceição (messhias@gmail.com)




