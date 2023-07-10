# health-app-arent

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/duydangit/health-app-arent">
    <img src="src/assets/icons/app_logo.svg" alt="Logo">
  </a>

  <h3 align="center">Health App - Arent</h3>

  <p align="center">
    An awesome health app project built with React!
    <br />
    <a href="https://github.com/duydangit/health-app-arent"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/duydangit/health-app-arent">View Demo</a>
    ·
    <a href="https://github.com/duydangit/health-app-arent/issues">Report Bug</a>
    ·
    <a href="https://github.com/duydangit/health-app-arent/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Mocking API with JSON Server](#mocking-api-with-json-server)
* [Usage](#usage)
* [License](#license)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project

This project is a health app built with React. It's designed to help users track their health data and make informed decisions about their lifestyle.

Here's why:
* Health is a top priority, and having a tool that makes it easy to track health data can make a big difference.
* This app is designed to be user-friendly and intuitive, making it easy for anyone to use.

### Built With

This project was built with the following technologies:

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Styled Components](https://styled-components.com/)
* [Axios](https://axios-http.com/)
* [Chart.js](https://www.chartjs.org/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is a list of things you need to use the software and how to install them.
* npm
```sh
  npm install npm@latest -g
```
### Installation
1. Clone the repo
```sh
  git clone https://github.com/duydangit/health-app-arent.git
```
2. Install NPM packages
```sh
  npm install
```
<!-- MOCK API -->
## Mocking API with JSON Server

This project uses [JSON Server](https://github.com/typicode/json-server) to mock the API. JSON Server is a great tool that lets you create a full fake REST API for development and testing purposes.

The mock API is defined in the `mock-api.ts` file and includes the following endpoints:

- `/dashboard`: Uses data from the `mock-db/dashboard.json` file.
- `/achievements`: Uses data from the `mock-db/achievements.json` file.
- `/recommended`: Uses data from the `mock-db/recommended.json` file.

The mock API server is integrated into the start script of the project. When you start the project with the following command:

```sh
  npm start
```

<!-- USAGE EXAMPLES -->
### Usage
Once you have the project set up, you can run `npm start` to start the development server and open the app in your browser.
<!-- LICENSE -->
### License
Distributed under the `MIT` License.
<!-- CONTACT -->
### Contact
Duy Dang - duydangit24@gmail.com

Project Link: https://github.com/duydangit/health-app-arent
