# MERN
MONGO - EXPRESS - REACT - NODE

# Objectives
The Hello World Seed applications are good but they never include enough functionality to really evaluate whether they 
are suitable for Enterprise SaaS applications.  This project takes the [React Core UI Admin Interface](https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template/tree/master/React_Full_Project)
and adds the following functionality:

## Routing
Using [react-router](https://reacttraining.com/react-router/web/guides/quick-start
Add new Route for Users screen - [PR](https://github.com/thinkjones/mern/commit/e7da6eb5af7f89f4f324ca49fe36febd25d567a3)
Add new Route for Settings screen - [PR](https://github.com/thinkjones/mern/commit/968333edd2d4f7a72e716b52f20569a46fefc6bf)

## Server Call
Using [axios](https://github.com/mzabriskie/axios) a Promise based HTTP client for the browser and node.js.
Add server data call for Main Hero Chart - [PR](https://github.com/thinkjones/mern/commit/85f2d65b0fbe7c507fe245849dff1a6fe486e42b)
Part Deux - [PR](https://github.com/thinkjones/mern/commit/aaa98e595c9645cdbf3d323a523cd12ad270bcc0)

## Repeating Child Component in Parent Component Example
Using GeneComponent for chart we examine how to dynamically generate this chart and pass data from the parent container
to the child.  This raised several important issues about Props & State which is a common theme for React app, especially
for newbies.  Props are Immutable, State changes with the application. [PR](https://github.com/thinkjones/mern/commit/457c95aea260988b2edcae22d65888c059a30fa5)

## Added Client And Server Auth (Also Added Redux)
* Used https://github.com/reactGo/reactGo/tree/master/app for Inspiration
* Implemented Redux in the app
* Responded to auth object changes in state by routing to login / logout screens.
* Added fake server login / logout

## TODO
* Display Victory Chart
* Pub/Sub (Maybe not needed)

# Starting App
Starts the client build and server api.  Running concurrently.
`npm start` 

# Notes:
* package.json needed if importing a directory aka `import Users from './views/Users/'`
* Bootstrap utilised with [reactstrap](https://reactstrap.github.io/)

# React Questions
* How best to implement PubSub?
* How to show-hide components based on logged in status?
* How to intercept navigation when not logged in?
* How to best poll for current authentication?
* What is Redux?

# BACKGROUND ON CREATE-REACT
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Something Missing?
If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/thinkjones/mern/issues)
