// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return (
    <div>
    Latitude: 
    </div>
  )
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

//https://semantic-ui.com/