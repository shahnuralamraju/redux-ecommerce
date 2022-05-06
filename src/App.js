import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Details from "./components/Details";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/cart" exact element={<Cart/>} />
        <Route path="/details/:id" exact element={<Details/>} />
      </Routes>
    </Router>
  );
}

export default App;
