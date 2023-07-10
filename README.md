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

- [health-app-arent](#health-app-arent)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Login Feature](#login-feature)
  - [Mocking API with JSON Server](#mocking-api-with-json-server)
    - [Usage](#usage)
    - [License](#license)
  - [Future Plans](#future-plans)
    - [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a health app built with React. It's designed to help users track their health data and make informed decisions about their lifestyle.

Here's why:

- Health is a top priority, and having a tool that makes it easy to track health data can make a big difference.
- This app is designed to be user-friendly and intuitive, making it easy for anyone to use.

Demo pictures:

<img width="1199" alt="Screenshot 2023-07-10 at 22 22 36" src="https://github.com/duydangit/health-app-arent/assets/33681740/7037c4a3-1757-44f3-905a-eef6f23a1018">
<img width="1200" alt="Screenshot 2023-07-10 at 22 15 52" src="https://github.com/duydangit/health-app-arent/assets/33681740/c940762c-db07-4f56-aac3-19c3ae013738">
<img width="1203" alt="Screenshot 2023-07-10 at 22 05 28" src="https://github.com/duydangit/health-app-arent/assets/33681740/7f536090-5afe-43bf-b03e-4bbad5e7e546">

### Built With

This project was built with the following technologies:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [Chart.js](https://www.chartjs.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is a list of things you need to use the software and how to install them.

- npm

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

<!-- LOGIN FEATURE -->

## Login Feature

The application now includes a login feature. This allows users to access the top page and achievements page, which are only accessible to logged-in users. The recommended page can still be accessed without logging in.

For testing purposes, you can use the following dummy account to log in:

- Username: admin
- Password: 12345678

Once logged in, you will be able to access the top page and achievements page.

<!-- MOCK API -->

## Mocking API with JSON Server

This project uses [JSON Server](https://github.com/typicode/json-server) to mock the API. JSON Server is a great tool that lets you create a full fake REST API for development and testing purposes.

The mock API is defined in the `mock-api.ts` file and includes the following endpoints:

- `/dashboard`: Uses data from the `mock-db/dashboard.json` file.
- `/achievements`: Uses data from the `mock-db/achievements.json` file.
- `/recommended`: Uses data from the `mock-db/recommended.json` file.
- `/users`: Uses data from the `mock-db/users.json` file.

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

<!-- FUTURE PLANS -->

## Future Plans

In the future, we plan to enhance the login feature by integrating `JWT`(JSON Web Tokens) and `Auth0`. This will provide a more secure and robust authentication system for the application.

`JWT is a standard for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

`Auth0`, on the other hand, is a flexible, drop-in solution to add authentication and authorization services to your applications.

In addition to these, we also plan to incorporate `Doppler` into our development workflow. Doppler is a universal secret manager that helps to secure sensitive environment variables. By using Doppler, we aim to further enhance the security of our application.

Stay tuned for these exciting updates!

<!-- CONTACT -->

### Contact

Duy Dang - duydangit24@gmail.com

Project Link: https://github.com/duydangit/health-app-arent
