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

## Some special cases

### Using `enzyme-to-json` and its `toJson` helper
The `enzyme-to-json` module provides standard serializer for snapshot testing. A little lesser known fact about it is this helper function called `toJson`. In addition to providing an options object to get finer control over what gets serialized, its job is to simplyfiy the serialization of your component's snapshot. Let's take an example of what it does and what it looks like.


#### Test that does not use `toJson`

```
/* eslint-disable no-unused-expressions */
import React from 'react'
import chai from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Home from '../../components/Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home component renders', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  afterEach(() => {
    wrapper.unmount()
  })
})
```

#### Snapshot file
Take a look at how your snapshot file looks
```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`When Home component renders should match the snapshot 1`] = `
ShallowWrapper {
  "length": 1,
  Symbol(enzyme.__root__): [Circular],
  Symbol(enzyme.__unrendered__): <b />,
  Symbol(enzyme.__renderer__): Object {
    "batchedUpdates": [Function],
    "getNode": [Function],
    "render": [Function],
    "simulateEvent": [Function],
    "unmount": [Function],
  },
  Symbol(enzyme.__node__): Object {
    "instance": null,
    "key": undefined,
    "nodeType": "host",
    "props": Object {
      "children": Array [
        <b
          id="demoLeft"
        />,
        <b
          id="demoRight"
        />,
      ],
      "className": "homeContainer",
      "id": "home",
    },
    "ref": null,
    "rendered": Array [
      Object {
        "instance": null,
        "key": undefined,
        "nodeType": "class",
        "props": Object {
          "id": "demoLeft",
        },
        "ref": null,
        "rendered": null,
        "type": [Function],
      },
      Object {
        "instance": null,
        "key": undefined,
        "nodeType": "class",
        "props": Object {
          "id": "demoRight",
        },
        "ref": null,
        "rendered": null,
        "type": [Function],
      },
    ],
    "type": "div",
  },
  Symbol(enzyme.__nodes__): Array [
    Object {
      "instance": null,
      "key": undefined,
      "nodeType": "host",
      "props": Object {
        "children": Array [
          <b
            id="demoLeft"
          />,
          <b
            id="demoRight"
          />,
        ],
        "className": "homeContainer",
        "id": "home",
      },
      "ref": null,
      "rendered": Array [
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "class",
          "props": Object {
            "id": "demoLeft",
          },
          "ref": null,
          "rendered": null,
          "type": [Function],
        },
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "class",
          "props": Object {
            "id": "demoRight",
          },
          "ref": null,
          "rendered": null,
          "type": [Function],
        },
      ],
      "type": "div",
    },
  ],
  Symbol(enzyme.__options__): Object {
    "adapter": ReactSixteenAdapter {
      "options": Object {
        "enableComponentDidUpdateOnSetState": true,
      },
    },
  },
}
`;
```

#### Test that uses `toJson` helper to save snapshots
Now let's take a look at the snapshot when we use the `toJson` helper. Note, only changed lines shown for brevity.

```
/* eslint-disable no-unused-expressions */
import toJson from 'enzyme-to-json'

describe('When Home component renders', () => {
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
```

#### Snapshot File
Neat right, it provides you a simplified and a neater view of your components snapshot, while providing options to configure serialization of specific nodes.
```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`When Home component renders should match the snapshot 1`] = `
<div
  className="homeContainer"
  id="home"
>
  <b
    id="demoLeft"
  />
  <b
    id="demoRight"
  />
</div>
`;
```


###  Mocking CSS, images and other assets for Jest Testing
If you are using CSS Modules and loading images and other assets dynamically, then while unit testing with jest, you will receive errors compiling CSS and loading other dynamic assets. The reason for this is Jest does not understand the webpack context and pre-processing while running your tests.

Worse yet, if you want to perform assertions on presence of CSS classes while using CSS Modules, you are out of luck, since Jest / enzyme snapshots have no context of real class names. Remember, CSS Modules hashes out style names to avoid style conflicts between modules?

**Solution**: There is a very neat method Jest provides to get around this problem. It's called `moduleNameMapper`. This configuration object, takes a map of globbing patterns that match web assets and map them to a `resolver` typically a mock / proxy that stubs the requested module out. Take a look at the `jest.config.json` in this project to understand how it works. The `identity-obj-proxy` module does a great job at stubbing CSS and Less assets and supports SASS as well.

### CSS Modules
CSS Modules are a great new way to modularize your CSS and structure your code into **meaningful and truly reusable** classes. CSS Modules promotes modularity through three basic concepts:

- Composing CSS rules
- Composing CSS rules across CSS files
- Single responsibility modules: Composition is powerful because it lets you describe what an element is, not what styles make it up. What this means is, if an element in your DOM needs to be styled, a single CSS class should describe the style of that element. You can compose several other style rules into the style rules for this element. Let's take an example

See [Glen Maddern's article on CSS Modules](https://glenmaddern.com/articles/css-modules) which has indepth details about CSS Modules.

#### Gotchas
While it might sound straight forward in theory, there are some Gotchas that you should be aware of

**1. Using Less Variables**
When you compose a rule from another external file in which the class name definitions make use of Less variables, those variables aren't evaluated. We need to use the `post-css-values` plugin in order to use variables with CSS modules

**2. Using `localIdentName` for compiled CSS**
The `localIdentName` option for the `css-loader` in Webpack config is used to define the pattern in which the CSS class names are generated when CSS Modules are compiled. For the development configuration, it is easier if the compiled hash has the real class name and module name. Check out the `webpack.dev.config.js` and `webpack.prod.config.js` to see a sample of how CSS class name generation can be controlled.

In production mode, just keeping a base64 hash as class names will reduce the CSS bundle size significantly.

## What does it not provide?
The project does not come with test coverage for all files as they are expected to be removed or different for your projects. Samples are for demonstration of the concept and the pattern only.

## Contributing
Fork the repo and submit a pull request.

## License
[Mr. Doomsbuster](https://ashishdesai.com) doesn't care about attribution. All source code is license under [Do What The Fuck You Want To (WTFPL)](https://ashishdesai.com/license.txt) public license.
