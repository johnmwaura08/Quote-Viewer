import React from 'react';

import './App.css';

import React, { Component } from 'react';

//TASKS
// 1.get Api URL
// 2.create the layout
// 3.add event listeners
// 3.style ui
// 4. finish user stories

const API='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';


 class App extends Component {
   state={
     quotes: [],
     index: 0;
   }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App;