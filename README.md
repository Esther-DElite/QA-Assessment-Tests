 QA Assessment Test Project

Project Overview
This repository contains the QA assessment work completed for both API testing and web application automation.

The project includes:
- Postman API test cases and test scripts created from this swagger document (https://petstore.swagger.io/#/)
- Automated UI tests for the SauceDemo web application using VS Code
- Saucedemo test case documentation in Excel format
- Saucedemo test report documentation in PDF format

Folder Structure

- api-tests-postman - Contains the exported Postman collection for API testing
- web-automation-saucedemo - Contains the automated test scripts for SauceDemo using Playwright
- saucedemo testcases - Contains the test cases in Excel format
- test-report - Contains the saucedemo test report

Prerequisites

To run the tests, ensure you have the following installed:

- Postman
- Node.js
- VS Code
- Playwright

How to Run the Postman API Tests

1. Open Postman.
2. Click 'Import'.
3. Import the Postman collection from the `api-tests-postman` folder.
4. Select the imported collection.
5. Click 'Run Collection'.
6. Review the test results in Postman Test Runner.

How to Run the SauceDemo Automation Tests

1. Open the `web-automation-saucedemo` folder in VS Code.
2. Open the terminal.
3. Install dependencies:

```bash
npm install

NOTES
- SauceDemo automation covered key user flows such as login, adding/removing products from cart, filtering products, viewing cart, and checkout.
- The Login User endpoint in postman returned a successful response message 'Logged in user session" alongside an id when the username and password fields were empty. An error response should have been returned instead
- For the get user endpoint, the get user with valid username testcase failed because no valid username was provided thus the right response body was not returned
Some API responses did not behave as expected. Test scripts were written in the 'scripts' session for validation