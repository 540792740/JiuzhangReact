import './App.css';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import NavigationBar from './Router/NavigationBar'
import { Menu, Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Menu theme='dark'>
        <Menu.Item><NavLink to='/'>Home</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/login'>Login</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/register'>Register</NavLink></Menu.Item>
      </Menu>
      <NavigationBar />
    </Router>
  );
}

export default App;
