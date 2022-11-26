import logo from './logo.svg';
import { Redirect } from 'react-router-dom';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetaiUser from './Users/DetailUser';
// import Login from './Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Switch>
            <Route path="/" exact>
              <Nav />
              <Home />
            </Route>
            <Route path="/todo" render={() => {
              return localStorage.getItem("accessToken") ? <Todo /> : <Redirect to="/Login" />
            }}>
              {/* <ListTodo/> */}
            </Route>
            <Route path="/about" render={() => {
              return localStorage.getItem("accessToken1") ? <About /> : <Redirect to="/Login" />
            }}>
              {/* <MyComponent /> */}
            </Route>
            <Route path="/user" exact>
              <Nav />
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetaiUser />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}
function Todo() {
  let history = useHistory()
  let Logout = () => {
    localStorage.removeItem("accessToken");
    history.replace("/Login")
  }
  return <div>
    <Nav />
    <h2>Todo</h2>
    <button onClick={Logout}>Logout</button>
  </div>
}
function About() {
  let history = useHistory()
  let Logout = () => {
    localStorage.removeItem("accessToken1");
    history.replace("/Login")
  }
  return <div>
    <Nav />
    <h2>Todo</h2>
    <button onClick={Logout}>Logout</button>
  </div>
}
function Login() {
  let history = useHistory()
  let login = () => {
    localStorage.setItem("accessToken", true);
    history.replace("/todo")
  }
  let login1 = () => {
    localStorage.setItem("accessToken1", true);
    history.replace("/about")
  }
  return <div>
    <h2>Login</h2>
    dang nhap
    <input type="text"></input>
    mat khau
    <input type="text"></input>
    <select>
      <option>Todo</option>
      <option>about</option>
    </select>
    <button onClick={() => login()}>Login todo</button>
    <button onClick={() => login1()}>Login about</button>
  </div>
}

export default App;
