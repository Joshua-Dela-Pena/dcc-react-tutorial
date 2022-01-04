import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 174, date: '11-24-2021'}, {weight: 173, date: '11-25-2021'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
