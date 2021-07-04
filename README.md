# A sample React project for enterprise boiler plate project setup

This project was bootstraped with [Create React App](https://github.com/facebook/create-react-app).

How can you locally run this app? 

There are two ways you can run this app on your local machine;

<br /> 

**Approach** 1: Using publicly hosted [Docker Image](https://hub.docker.com/r/dmozumd/address-book).

* Pull the image from docker hub
    #### `docker pull dmozumd/address-book`

* Run the docker image on your machine in detach mode
   #### `docker run -it -d -p 3000:80/tcp --name address-book dmozumd/address-book:latest`

* On your browser hit the following link => http://localhost:3000 the Address book app should be running normally as expected

<br /> 

**Approach** 2: Run this app locally using Yarn / NPM 

* In the project directory, run the follwing script to install all the dependencies packages:

    #### `yarn install`
* Now you can run following script runs the app in the development mode.\:
    ### `yarn start`

* Open [http://localhost:3000](http://localhost:3000) to view the app running in the browser.

<br />
The app home page will hot reload if you make code edits.
You will also see any lint errors in the console.

Few test cases writen to test the few components: 

Run:
### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
