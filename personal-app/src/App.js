import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './Router/NavigationBar'
// import { Menu, Button } from 'antd';
// import style from './App.module.less'

function App() {
  return (
    <Router>
      {/* <Menu className={style.menu} theme='dark'>
        <Menu.Item><NavLink to='/'>Home</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/login'>Login</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/register'>Register</NavLink></Menu.Item>
      </Menu> */}
      <NavigationBar />
    </Router>
  );
}

export default App;
