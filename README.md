# Express ReactJS Boilerplate
Easy to use opinionated Express based React boilerplate. This boilerplate provides a solid pattern that developers can use to scaffold and start developing a Express (NodeJS) backed frontend with React, Redux, React Router, Material UI and webpack.

The boilerplate demonstrates several key design patterns that include:

- Standard project structure to use for ReactJS based application.
- Highly optimized webpack and babel configuration.
- Creating complex and nexted application routes with React Router.
- Making HTTP and async calls from within React components.
- Showing how to include images within your react components that webpack can bundle
- Separation of concerns with React presentational and state-aware container components.
- A neat pattern to modularize CSS code in LESS.
- Some fundamental testing patterns for Test Driven Development / Behavior driven development for React and Redux.
- Running selenium functional tests for your application.

## What does it provide?
This boilerplate provides pre-configured:

- Simplistic directory structure for any React project
- Webpack configuration with:
    - Webpack dev server with hot reloader and dev proxy server
    - Bundle analyzer
- Unit testing setup with coverage with:
    - Jest for unit testing the application
    - Enzyme for snapshot testing
    - Sinon for mocking and stubbing
    - Chai deep meaningful assertions
- Selenium web driver configuration
- React routing with v4
- Material UI with demonstration of theme customizations
- Winston logger for logging to file and console with daily rotating log file module for backend logging.

## How to install?
Getting started with this boilerplate is easy. There are two ways to install and use it

### Installing manually
Clone this repo on your workstation

    git clone https://github.com/doomsbuster/express-react-microservice.git

### Installing as a node module
Boilerplate is also available as module from `npm` registry

## Getting Started
Once you have installed the boilerplate, running it is easy:

Run

    npm install

Copy the package by running the following command in the directory where you installed the module

    cp -R ./node_modules/express-react-boilerplate/* .

Build the application using pre-configured `webpack`  bundler

    npm run build

Start the application

    npm start

Point your browsr at `http://localhost:3000`. You should see the React frontend which shows you this documentation

### Running webpack dev server
For developing your application, this boilerplate comes a `webpack-dev-server` with hot reloading fully configured. Run

    npm run dev

That's it, build your application and see it change live on the fly.

### Running tests
Get a hang testing by running

    npm test

If you want to watch tests as you change the code and modify tests run

    npm run test:watch

This command will watch and run your tests everytime you change a file.

That's it! Have fun.

## What does it not provide?
This project does come with test coverage for all files as they are expected to be removed or different for your projects. Samples are for demonstration of the concept and the pattern only.

## Contributing
Fork the repo and submit a pull request.

## License
Mr. Doomsbuster doesn't care about attribution. All source code is license under [Do What The Fuck You Want To (WTFPL)](https://ashishdesai.com/license.txt) public license.