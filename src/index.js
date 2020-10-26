// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// Create a react component
const App = () => {
  return (
      <div className="ui container comments">
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45PM" 
          content="Nice blog Post" 
          avatar={faker.image.avatar()}
        />
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:00AM" 
          content="I like the subject" 
          avatar={faker.image.avatar()}
        />
        <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 5:25PM" 
          content="i like singing" 
          avatar={faker.image.avatar()}
        />
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

//https://semantic-ui.com/