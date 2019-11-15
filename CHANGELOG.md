# Updates 2019-11-11


- Created docker-compose file with web context for Adonis NodeJS application.
- Created Dockerfile to use the Adonis Framework within docker context (always using the latest NodeJS image).
- Update README.md with relevant information showing how to run the application with / without Docker.
- Created changelog
- Created migrations 
- General migrations

===================================================

Updates 2019-11-15

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
