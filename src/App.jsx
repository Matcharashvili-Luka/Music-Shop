import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import { data } from './Helper/Product_data'
import Single_product_detailed from './Components/Product_components/Single_product_detailed';


function App() {
  // to store cart elements.
  const[cart, setCart] = useState([]);

  // for single page. to track element id.
  const[el_id, set_el_id] = useState(0);

  // Loops over the data and returns array with objects => [{}, {}, {}...] instead nested obj.
  function colectData(val){
    let arr = [];
    function helper(obj){
      if(obj.name){
        arr.push(obj)
      }else{
        for(let i in obj){
          helper(obj[i])
        }
      }
    }
    helper(val);
    return arr;
  }

  let all_elements = colectData(data);

  // to add element to shopping cart;
  function onAdd(product){
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert('Element is already in Shopping Cart!');
    } else {
      setCart([...cart, product]);
      alert('Element added to Shopping Cart!');
    }
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route 
            path='/products' 
            element={
                <Product 
                  set_el_id={set_el_id}
                  colectData={colectData}
                  all_elements={all_elements}
                  data={data}
                />
              } 
            />
        </Routes>
        <Routes>
          <Route 
            path={`/products/product-${el_id}`} 
            element={
              <Single_product_detailed 
                el_id={el_id}
                all_elements={all_elements} 
                cart={cart}
                setCart={setCart}
                onAdd={onAdd}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
