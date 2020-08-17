<p align="center">
  <img src="./docs/proffy2_0.png" alt="Proffy" width="346">
  <a href="https://reactjs.org/" target="blank"><img src="https://www.fullstackpython.com/img/logos/react.png" width="320" alt="Nest Logo" /></a>
</p>

[![license](https://img.shields.io/github/license/ajaymache/travis-ci-with-github.svg)](https://opensource.org/licenses/MIT)
[![nodejs](https://img.shields.io/badge/Server-Node.js-%23339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![typescript](https://img.shields.io/badge/-TypeScript-%23007ACC?style=flat-square&logo=TYPESCRIPT)](https://www.typescriptlang.org/)
[![react](https://img.shields.io/badge/Web-React-%23007ACC?style=flat-square&logo=REACT)](https://reactjs.org/)

## Proffy 2.0

> This is the NLW project from (https://nextlevelweek.com). This web version includes the following technologies:

- React
- Axios
- MobX State Tree
- TypeScript

<p align="center" >
    <img src="docs/home-screen.png" alt="Homescreen" width="600px">
</p>

## Quick Start

The Proffy project's structure:

```
├── src
│   ├── assets
│   ├── components
│   ├── config
│   ├── models
│   ├── pages
│   ├── routes
│   ├── services
│   ├── stories
│   ├── App.tsx
│   ├── index.tsx
├── public
│   ├── index.html
├── README.md
├── tsconfig.json
└── package.json

```

### ./src directory

The inside of the src directory looks similar to the following:

```
app
│── assets
│── components
│── config
├── models
├── pages
├── routes
├── services
├── stories
├── index.tsx
└── App.tsx
```

**assets**
This is where your assets such as images and global stylesheet will live.

**components**
This is where your React components will live. Each component will have a directory containing the `.tsx` file, along with a story file, and optionally `.css` file.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**config**
This is where your app configuration will live.

**pages**
This is where your pages components will live. A page is a React component which will take up the entire screen and be part of the navigation hierarchy. Each page will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**routes**
This is where your app routes will live. It forwards the supported requests (and any information encoded in request URLs) to the appropriate controller functions.

**stories**
This is where your stories will be registered and where the Storybook configs will live

**App.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [MobX-State-Tree](https://mobx-state-tree.js.org/) - It helps you organize your application states in a very structured manner.

## Authors

* **Gustavo Silva** - *Initial work* - [Proffy-Web](https://github.com/gusilva/proffy-web)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
