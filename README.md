# `Fundemental of project`

# Contents

    1. Description
    
    3. Run

    4. Directory structure/project

    5. Packages

    6. Style
    
# Description

This App is fundamental of react project with login page and manage route with require Auth

Fortune is a simple program that we can use in alot of site.

In this project, I used a Api for login but This represents some generic auth provider API, like Firebase.

# Run

#### set API URL in the Local Environment Variables

In the project directory, you should create a new `.env.local` and 
add Server address for connection to backend, called `REACT_APP_APPLICATION_API_URL` then
you can run:

#### npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

# Directory structure/project

React doesn’t have opinions on how you put files into folders. there are a few common approaches popular in the ecosystem:

- Grouping by feature or routes
- Grouping by file type

**Colocation**: it is a good idea to keep files that often change together close to each other. This principle is called “Colocation”.

In this project I used **Group by feature or routes**. In this way all of file related a component (sass, test, …) is in the same folder.

# Packages

These packages are installed in this project:

- react-router-dom

- sass

- bootstrap

- Formik

- Yup

- axios

- js-cookie

# Style

2 type of styles were used in the project:

- **Bootstrap**
- **SASS**

# State management

I use useContext for state management in this project.

# Preview of the project

This project have 2 pages:

    - LOGIN

    - HOME

    - REGISTER

    - PLAYLIST
 # helpful site
 https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx