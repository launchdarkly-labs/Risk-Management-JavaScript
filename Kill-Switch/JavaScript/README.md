# Risk-Management-JavaScript

This project demonstrates how to use LaunchDarkly's kill switch feature flags in a JavaScript application to instantly roll back buggy features.

## Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory and add your LaunchDarkly Client-Side ID:
```LAUNCHDARKLY_CLIENT_SIDE_ID=your_launchdarkly_client_side_id_here```
4. Run `npm run build` to build the project
5. Run `npm start` to start the local server
6. Open `http://localhost:8080` in your browser

## Usage

Toggle the 'kill-switch' feature flag in your LaunchDarkly dashboard to add or remove the "Click Here!!!" button on the page.
