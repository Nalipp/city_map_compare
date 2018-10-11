# City Map Compare

React App for visualizing the size of cities.
Synchronous zooming on google maps apo

[link]: https://city-map-compare.firebaseapp.com/


## Firebase Deploy

### Firebase.com
Create new project

### In Projcet
  package.json

  ```
    "scripts": {
      "start": "webpack-dev-server --open",
      "build": "NODE_ENV='production' webpack",
      "firebase-init": "firebase login && firebase init",
      "deploy": "npm run build && firebase deploy"
    },
  ```

  webpack.config.js

  ```
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  ```

### In Terminal
  check if build is creating a dist folder

  ```
    $ npm run build
  ```


  ```
    $ npm install --save-dev firebase-tools
  ```


  ```
    $ npm run firebase-init
  ```

  select deploy app?

  select the app you created on the website

  what do you want to use as your public directory? dist

  select yes for single page app

  already exists, overwrite? N
  
  npm run deploy


