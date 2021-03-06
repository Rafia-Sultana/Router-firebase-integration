
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componenets/Home/Home';
import Login from './componenets/Login/Login'
import Header from './componenets/Header/Header';
import Register from './componenets/Register/Register';
import Products from './componenets/Products/Products';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
