import React from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';

import { data, options } from './chartConfig/chartConfig';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Key-Group test chart</h1>
      </header>
      <div className='chart__container'>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default App;
