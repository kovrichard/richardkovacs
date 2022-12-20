.PHONY: start stop restart sh logs

container=nextjs

# start all the containers
start:
	docker compose up -d

# stop all the containers
stop:
	docker compose down

# restart containers
restart: stop start

# get a shell within the app container
sh:
	docker compose exec $(container) /bin/sh

# check console output
logs:
	docker compose logs -f
