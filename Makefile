OUT_DIR := ./out
STYLE_DIR := src/css
STYLE_FILES := $(patsubst $(STYLE_DIR)/%.css,$(OUT_DIR)/static/%.css,$(wildcard $(STYLE_DIR)/*.css))
JS_DIR := src/javascript
JS_FILES := $(patsubst $(JS_DIR)/%.js,$(OUT_DIR)/static/%.js,$(wildcard $(JS_DIR)/*.js))
STATIC_DIR := src/static
STATIC_FILES := $(patsubst $(STATIC_DIR)/%,$(OUT_DIR)/static/%,$(wildcard $(STATIC_DIR)/**))
NODE_ENV ?= production

all: install build
build: clean js style markup static

# kudos https://mattandre.ws/2016/05/make-for-hipsters/#Intermediate-make
install: node_modules
node_modules: package-lock.json
	npm ci > /dev/null

js: $(JS_FILES)
$(OUT_DIR)/static/%.js: $(JS_DIR)/%.js
	@mkdir -p $(OUT_DIR)/static
	cp -r $< $(OUT_DIR)/static/

style: $(STYLE_FILES)
$(OUT_DIR)/static/%.css: $(STYLE_DIR)/%.css
	@mkdir -p $(OUT_DIR)/static
	NODE_ENV=$(NODE_ENV) npx postcss $< --base src/css --dir $(OUT_DIR)/static/

markup:
	@mkdir -p $(OUT_DIR)
	NODE_ENV=$(NODE_ENV) node ./scripts/build-markup.js

static: $(STATIC_FILES)
$(OUT_DIR)/static/%: $(STATIC_DIR)/%
	@mkdir -p $(OUT_DIR)/static
	cp -r $< $(OUT_DIR)/static/

clean:
	rm -rf $(OUT_DIR)

.PHONY: all build install js style markup static clean
