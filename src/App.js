import './App.css';
import { useState } from 'react';
import SideNav from './sidenav';
import Content from './content';

function App() {
  const [sidebarShow, setSidebarShow] = useState(false);

  var sidebar = () => {
    (sidebarShow === false) ? setSidebarShow(true) : setSidebarShow(false)
    console.log(sidebarShow)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={sidebar} className='menubar'><i className="fa fa-bars"></i></button>
          <h4>Nanyang polytechnic</h4>
        </div>
        <div>
        <i className='fa fa-user'></i>
        </div>
      </header>

      {sidebarShow && <SideNav/>}
      <Content/>
    </div>
  );
}

export default App;
