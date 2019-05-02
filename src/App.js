import React from 'react';

import Calendar from './components/calendar/Calendar';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div id="App">
      <Nav />
      <Calendar />
      <div id="Footer">.</div>
    </div>
  );
}

export default App;
