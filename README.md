# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Weather App

## Story

People Always Talk About The Weather...
They are also always checking the weather in native and web applications.
Now you can go further and create your own web based Weather application!

## What are you going to learn?

- Create a GET requests
- Getting data from an open API
- Working with JSON files

## Tasks

1. Create a simple input field with an autocomplete feature (when the user starts typing, after 3 characters a list of cities appear which matches that search). Create a card that shows the weather data (temperature, sky conditions, humidity, etc.) of the selected city.  Searching and selecting a new city should update the card.
    - When we open up the page, there is a simple input field with an autocomplete feature that shows search matches after 3 characters
    - When we search and select a city, the weather of this city is showing up

2. [OPTIONAL] Do some improvements in order to make the web application more interesting.
    - There is a button to put a city into the favourites, which list shows up when the input field is selected and the input is empty (the favourite list data doesn't need to persist after a reload)
    - Weather panel is showing a fetch api spinner while the content is loading [Sample loading fetch API spinner on Codepen](https://codepen.io/wang0nya/pen/bzwQPr).
    - Assign a nice background image to the chosen city that fits nicely to the site and apply it on the background. You can create object which store city name and image url.
    - You can use Pexels API to get image for chosen city dynamically. Read the official [Pexels API Documentation](https://www.pexels.com/api/documentation).
    - Generate a free API key from in order to access the Pexels API.
    - Use presented endpoint to get image for chosen city e.g. for Krakow: https://api.pexels.com/v1/search?query=Krakow ![Weather App Pexels API in Postman](media/frontend/weather-app.png)

## General requirements

- There is a `<div id="root">` tag without children when the page loads in
- All the contents are placed and removed by javascript

## Hints

- Plan carefully the project with your team mates
- You can use [this](https://www.weatherapi.com/docs/) API, you have to [register](https://www.weatherapi.com/signup.aspx) for free and use an Access ID/Secret Key.

## Background materials

- <i class="far fa-exclamation"></i> [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- <i class="far fa-exclamation"></i> [JavaScript Fetch API Examples](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
- <i class="far fa-exclamation"></i> [Weather API](https://www.weatherapi.com/docs/)
- <i class="far fa-exclamation"></i> [Example autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
- <i class="far fa-book-open"></i> [CSS Weather Widgets you can draw inspiration from - Do NOT copy and paste one, create your own!](https://freefrontend.com/css-weather-widgets/)