import React from 'react';
import './App.css';

import Input from './components/input';
import Navigation from './navigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
				<Input />
      </header>
			<Navigation />
    </div>
  );
}

export default App;
