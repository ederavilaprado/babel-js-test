# Learning babeljs and es6

## Quick start

The version of nodejs used here was `6.9.4`.

```bash
$ npm install
$ npm run babel-debug
```
This will transpile the code before run it.

## Commands

```bash
# run the project with the debug port opened, also with nodemon for dev purposes
$ npm run debug
# run the code for debug using node-inspector (is not working, probably because of some bugs with node-inspector, babel and node version)
$ npm run babel-node-debug
# build the code to run in a production environment
$ npm run build
# run the built code
$ npm run start
# check for outdated packages
$ npm run check-outdated
```
