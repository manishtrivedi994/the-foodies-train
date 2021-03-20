import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <div className="App" >
      {/* <div className="home">
          <a href="/" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
          {/* <a href="/" style={{color: 'salmon', marginLeft: '2%'}}>Signup</a> }
      </div> */}
      <Login/>
    </div>
  );
}

export default App;
