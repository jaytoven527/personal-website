import logo from './logo.svg';
import './App.scss';
import { useEffect, useCallback, useState, useMemo } from 'react';
import { Todo } from './components/Todo';


function App() {
  return (
    <div className="App">
      <div className="App-opener">
        <h1>Welcome, visitor!</h1>
        <p>My name is Jordan and I am a Front End Engineer with my background in HTML, CSS, JS, PHP, and MySQL.</p>
        <p><a href="https://github.com/jaytoven527"> Check out my Github!</a></p>
      </div>
      {/* <Todo /> */}
    </div>
  );
}

export default App;