## Running the project

In the project directory, you can run:

### `npm install && npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Functionality 

### Login

    - Login form with error handling
    - User has an option to be kept logged in
    
### Servers List

    - Table with a scrollable servers list
    - List is sortable by name or distance by pressing either of the titles (Name, Distance)
    - User can logout by pressing the icon in the top right corner of the table
    - A popup will show up to either guide the user through logout process or to inform that the user needs to login again
    
## Tech specifications

### Used tools 
    - React
    - Redux for global state management
    - Thunk for middleware
    - Sass for styling
    - No bootstrap or Material UI
    - No lodash or other utility libraries
    - react-app-polyfill + "@babel/plugin-transform-arrow-functions" for supporting IE11
