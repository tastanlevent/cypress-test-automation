# Cypress Test Automation

This project contains automated tests using Cypress to ensure the functionality of logging Amazon.com.
## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running Tests](#running-tests)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)


## Getting Started
Follow these steps to set up and run the project locally.

## Prerequisites 
- Install Node.js on your machine.
- You can use either npm or yarn for managing project dependencies.

## Installation
1. Clone the repository to your local machine:
```
git clone https://github.com/tastanlevent/cypress-test-automation.git
cd cypress-test-automation
```
2. Install the necessary dependencies:
```
npm install
```

## Usage
1. Open Cypress tests by running the following command in the project directory:
```
npx cypress open
```
2. Choose the desired test scenario from the Cypress interface.
3. Watch the tests execute in real-time and review the results.


## Configuration
For the Amazon Login Test scenario, users need to provide their own Amazon.com email and password for authentication. Follow these steps to configure the test:
1. Navigate to the static_data.json file in the project.
2. Open the file and locate the "email_amazon" and "password_amazon" fields.
3. Replace "enter_an_email_here" and "enter_a_password_here" with your Amazon.com email and password.

```
  "email_amazon": "enter_an_email_here",
  "password_amazon":"enter_a_password_here"
```
