IMAGE_NAME = methodology/docusaurus:latest
CONTAINER_NAME = open-edu-hub-methodology-bash
OUTPUT_DIR = $$PWD/.output/methodology/

.PHONY: all buildimg build run_bash enter_bash clean cleanall

all: build

buildimg:
	docker build -f ./Dockerfile --tag $(IMAGE_NAME) .

build: buildimg
	@echo "Building content. This will take a while (several minutes) ..."
	@echo "After the build, point your browser to http://localhost:8080/methodology"
	@mkdir -p $(OUTPUT_DIR)
	docker run --rm -v $$PWD/:/content -v $(OUTPUT_DIR):/output $(IMAGE_NAME)

run_bash:
	@mkdir -p $(OUTPUT_DIR)
	docker run -d -it --entrypoint /bin/bash --name $(CONTAINER_NAME) -v $$PWD/:/content -v $(OUTPUT_DIR):/output $(IMAGE_NAME)

enter_bash:
	docker exec -it $(CONTAINER_NAME) /bin/bash

clean:
	rm -fr $(OUTPUT_DIR)

cleanall:
	docker image rm $(IMAGE_NAME)
