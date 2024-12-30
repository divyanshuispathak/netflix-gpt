# Netflix GPT

Netflix GPT is a feature-rich web application designed to enhance your movie browsing experience with features such as tailored movie recommendations, integration with TMDB, and an advanced GPT-powered movie search.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Available Scripts](#available-scripts)
5. [Project Structure](#project-structure)
6. [Deployment](#deployment)
7. [Future Enhancements](#future-enhancements)

---

## Features
### Authentication
- **Login/Signup**: Users can create accounts and log in securely.
- **Session Management**: Ensures authenticated users are redirected to the browse page.

### Browse Page (Post Authentication)
- **Header**: Provides easy navigation within the application.
- **Main Movie Section**:
  - Background trailer with autoplay and mute functionality.
  - Display of movie title and description.
  - Personalized movie suggestions powered by TMDB.
- **Movie List**:
  - Responsive UI showcasing categorized movies (e.g., popular, now playing).
  - Dynamic integration with TMDB API.

### Netflix GPT
- **GPT-Enhanced Search**:
  - Advanced movie search using OpenAI APIs.
  - Suggestions fetched from TMDB.
- **Custom Movie Suggestions**:
  - Integrated with TMDB for curated lists.
  - Reusable components for displaying results.

### Additional Features
- Profile management and sign-out functionality.
- Responsive design for optimal user experience on all devices.

---

## Technologies Used
- **Frontend**: React, TailwindCSS
- **State Management**: Redux Toolkit
- **Backend**: Firebase Authentication, Firestore
- **APIs**: TMDB API, OpenAI GPT
- **Deployment**: Firebase Hosting

---

## Setup and Installation
To run this project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/your-repository/netflix-gpt.git

2. Navigate to the project directory:
   cd netflix-gpt

3. Install dependencies:
   npm install

4. Set up environment variables:
   - Create a .env file in the root directory.
   - Add the following keys:
        * REACT_APP_TMDB_API_KEY=your_tmdb_api_key
        * REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
        * REACT_APP_OPENAI_API_KEY=your_openai_api_key

5. Start the development server:
   npm start



























# Netflix GPT
- Create React App
- Configured TailwindCSS
- Routing
- Header
- Login Form
- Signup Form
- Form Validation
- useRef() Hook
- Firebase Setup
- Deploying the app on production/firebase
- create SignUp user account
- Implement SignIn user api
- Created redux store with userSlice
- Implemented Sign Out
- Update profile API
- BugFix - SignUp user display name and profile picture update
- BugFix - If the user is not logged in redirect /browse to login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add Hardcoded values to the constants file
- Register TMDB api & create an app ang get access token
- Get data from TMDB now playing movies list
- Created custom hooks for norPlayingMovies
- Created a new slice for movie
- Updated the store
- Planning for MainContainer and Secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- tailwind classes to make it look better
- Build Secondary component
- Build Movie List
- Build Movie card
- Found TMDB image CDN
- Made browse UI better
- usePopularMovies custom hook created
- GPT search feature
- Multi Lingual feature in our app(******)
- Get OpenAi API key
- GPT search api call
- fetched gpt movie suggestion from TMDB
- create gptSlice added data
- Reused Movie List component to make movie suggestion container
- memoization
- adding .enf file to gitignore
- Made site responsive

# Features
- Login/Signup Page -> redirect to browse page
- Browse (after authentication)
        - Header
        - Main Movie
                - Trailer in background
                - Title and Description
                - Movie suggestions
                                - Movie list

- Netflix GPT
        - Search Bar
        - Movie suggestions



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
