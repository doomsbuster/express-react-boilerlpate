# Express ReactJS Kickstart
Easy to use opinionated Express based React kickstart. This kickstart provides a solid pattern that developers can use to scaffold and start developing a Express (NodeJS) backed frontend with React, Redux, React Router, Material UI and webpack within minutes.

## Why this kickstart?
Most of the scaffolds or kickstart projects you will try often include too many tools and concepts without providing reasonable clarity of the why, what and how of it. Most of the time you get tangled into understanding and troubleshooting what's wrong and why. That kind of defeats the purpose of a kickstart / boilerplate. This boilerplate is created with simplicity and ease of use in mind. It's a promise that you will have to use **less brain power** than most of the kickstarts out there. In this kickstart, you will find some very commonly occuring patterns and concepts that you will inevitably end up using, whether you are a champoin or a first timer in React.

All key concepts are demonstrated in different flavors with in-depth comments for you to comprehend what's going on. If you are new to React and Express, **don't even wait**, simply go install this and get started. Once you use this boilerplate, you will never have to look at any other boilerplate again.

If you still need more help, go to the [detailed 3 part tutorial](https://thinkwith.ashishdesai.com) on my blog.

### Concepts demonstrated
The kickstart / boilerplate demonstrates several key design patterns that include:

- Standard project structure to use for ReactJS based application.
- Highly optimized webpack and babel configuration.
- Creating complex and nested application routes with React Router.
- Making HTTP and async calls from within React components.
- Showing how to include images within your react components that webpack can bundle
- Separation of concerns with React presentational and state-aware container components.
- A neat pattern to modularize CSS code in LESS and use of compose for CSS reuse.
- Some fundamental testing patterns for Test Driven Development (TDD) / Behavior Driven Development (BDD) for React and Redux.
- Running selenium functional tests for your application.

## What does it provide?
This boilerplate provides pre-configured:

- Simplified directory structure for any React / Redux project
- React routing with v4
- Material UI with demonstration of theme customizations
- Redux, Redux Thunk and Redux Logger
- Webpack configuration with:
    - `webpack-dev-server` with hot reloader and dev proxy server
    - Webpack Bundle analyzer
    - Production and development build setup
- Unit testing setup with coverage with:
    - Jest for unit testing the application
    - Enzyme for snapshot testing
    - Sinon for mocking and stubbing
    - Chai deep meaningful assertions
- CSS Modules and Less loader
- ESLint for standard React projects
- Selenium web driver configuration
- Winston logger for logging to file and console with daily rotating log file module for backend logging.
- `.editorconfig` for consistent editor configurations.

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

    cp -R ./node_modules/express-react-microservice/* .

Build the application using pre-configured `webpack`  bundler

    npm run build

Start the application

    npm start

Point your browser at `http://localhost:3000`. You should see the React frontend which shows you this documentation

### Running webpack dev server
For developing your application, this boilerplate comes a `webpack-dev-server` with hot reloading fully configured.

Run

    npm run dev

That's it, build your application and see it change live on the fly. It will open your application in the browser at `http://localhost:9000`

### Running tests
Get a hang of testing by running

    npm test

If you want to watch tests as you change the code and modify tests run

    npm run test:watch

This command will watch and run your tests everytime you change a file.

> **Note on code coverage**
>
> Jest if fully configured to provide `istanbul` coverage for all files within the project. Typical configurations often only provide coverage for modules that have corresponding tests.
>

That's it! Have fun.

## What does it not provide?
The project does not come with test coverage for all files as they are expected to be removed or different for your projects. Samples are for demonstration of the concept and the pattern only.

## Contributing
Fork the repo and submit a pull request.

## License
[Mr. Doomsbuster](https://ashishdesai.com) doesn't care about attribution. All source code is license under [Do What The Fuck You Want To (WTFPL)](https://ashishdesai.com/license.txt) public license.
