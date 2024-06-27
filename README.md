# Project Title

Admin User Management System

## Description

This project is a user management system built with [React JS](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [SCSS](https://sass-lang.com/), and [Framer Motion](https://www.framer.com/motion/) for animations. It includes the following pages:
- **Login**
- **Dashboard (Users)**
- **User Detail Page**

The application consumes a mocky API that contains 500 users. Users can access the app by logging in with the provided email and password.

The app was tested using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/). The tested components include:

- App
- Login
- Dashboard

## Features

- Login Page: Users can log in using the provided email and password.
- Dashboard: Displays a list of users retrieved from the mocky API.
- User Detail Page: Shows detailed information about a selected user.

## Tech Stack

- [React JS](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static types.
- [SCSS](https://sass-lang.com/): A CSS preprocessor for styling.
- [Framer Motion](https://www.framer.com/motion/): A library for animations in React.

## API

The application consumes a mocky API with the following endpoint:

- [Mocky API](https://run.mocky.io/v3/b4d0fc36-c69f-4407-92fc-6f9ba51249b1)

### User Interface

```typescript
interface User {
  id: number;
  organization: string;
  name: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  dateJoined: string;
  status: string;
  bvn: string;
  account: string;
  gender: string;
  bank: string;
  maritalStatus: string;
  children: number;
  typeOfResidence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  monthlyIncome: string;
  loanRepayment: string;
  socials: Socials;
  guarantor: Guarantor;
}

```

## Login Credentials
Email: Elisabeth.Wiegand85@hotmail.com
Password: tjEx%mK8

## Video Introduction
- [User Management Application](https://www.youtube.com/watch?v=EMl0CVNyKbg)

## Getting Started
### Prerequisites
Ensure you have the following installed on your local machine:

- Node.js
- npm or yarn

## Installation
Clone the repository

- git clone https://github.com/uferekalu/lendsqr-project.git
- cd lendsqr-project

## Install dependencies
- npm install
# or
- yarn install

## Start the development server
- npm start
# or
- yarn start

## Building for Production
- npm run build
# or
- yarn build

## Running Tests
To run the test suite, use:

-npm test
# or
- yarn test

## Deployment
The application is hosted on Vercel. You can access it using the following link: Admin User Management System

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.

## Acknowledgements
- [React JS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [Framer Motion](https://www.framer.com/motion/)
For any questions or issues, please open an issue on GitHub.
