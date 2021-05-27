usage:
	@echo "Choose a right target to continue..."

.PHONY: docker-build docker-push

NODE_BASE_IMAGE_TAG=16-alpine3.11
REGISTRY_BASE_DOMAIN=salvatorecordiano/at-node
NODE_CURRENT_IMAGE_TAG=20210527161234

docker-build:
	docker build \
	-f ./.docker/Dockerfile \
	--build-arg NODE_BASE_IMAGE_TAG=${NODE_BASE_IMAGE_TAG} \
	-t "${REGISTRY_BASE_DOMAIN}:${NODE_CURRENT_IMAGE_TAG}" .

docker-push:
	docker push "${REGISTRY_BASE_DOMAIN}:${NODE_CURRENT_IMAGE_TAG}"
