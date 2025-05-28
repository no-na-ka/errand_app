DEV_COMPOSE=docker compose --env-file .env.dev -f infra/docker-compose.dev.yml

dev-up:
	$(DEV_COMPOSE) up --build

dev-down:
	$(DEV_COMPOSE) down