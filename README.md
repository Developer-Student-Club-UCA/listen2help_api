# Listen2Help API

> NodeJS API for Listen2Help App that help therapists connect with their patients.

## Contribution Guidelines

* One commit per subtask
* Title in English, beginning with a verb in the present
* The title must not reach 50 characters

## Commets for the commits
* Completed subtask: `taskCode` + `title`
* Unfinished subtask: `taskCode` + `WIP` + `title`

## Getting Started

### First time cloning the repo?

Make sure you have [NodeJS](https://nodejs.org/es/) installed.
Then clone the Repo and run `npm install` or `npm i` to install node modules.

### Development server

Run `npm start` to run the server in `http://localhost:8080/`.
Of course, you can change the port in the `.env` file.

## Coding Guidelines

Every file that is created, must follow the following standard: `file_name.{sorter}.js`.
* Where `{sorter}` means the name of the source file we are creating. Example: `name.controller.js`, `name.middleware.js` or `name.route.js`.

Variables should be named with CamelCase and must represent the action for which they were created.

### Endpoints routes

These endpoints are defined in it's own route file. And every route file is instantiated in the `endpoints.js` file.

Endpoints routes names must follow the following standards:
* Get multiple resources or post a new one: `/controller_name`.
* Get, edit and delete single resource: `/controller_name/resource_id`.

### Controller's functions

The name must represent the action for which they were developed. Example: `GetTherapistById` or `PostTherapist`.
