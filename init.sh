#!/bin/bash

echo "\n\n\nYarn install:"
yarn install

echo "\n\n\nCopy .env file:"
file="./.env.docker"
if [ -f "$file" ]
then
	echo "$file found."
	cp $file ./.env
	echo ".env created"
else
	echo "$file not found."
	exit 1
fi

echo "\n\n\nRun migration:"
docker-compose run --rm api adonis migration:run --force

echo "\n\n\nStart node server:"
adonis serve --dev --polling
