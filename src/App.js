import './App.css';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Heroes from './Heroes/Heroes';
import { useEffect } from 'react';

function App() {
  // console.log('outside--start')
  useEffect(() => {
    // console.log('inside')
    // return () => console.log('inside--return')
  },[])
  // console.log('outside--end')

  return (
    <div className="App">
      <Header/>
      {/* {console.log('render')} */}
      <Dashboard/>
      {/* <Heroes/> */}
    </div>
  );
}

export default App;
