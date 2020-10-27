// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
class App extends React.Component {
  constructor(props) {
    super(props);
    
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { 
      lat: null, 
      errorMessage: '',
    };
    
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setStates!!!!
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message})
      }
    );
  }

  // React says we have to define render!!
  render() {
    return (
        <div>
          Latitude: {this.state.lat}
          <br />
          Error: {this.state.errorMessage}  
        </div>
    );
  }
}


// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

// https://semantic-ui.com/