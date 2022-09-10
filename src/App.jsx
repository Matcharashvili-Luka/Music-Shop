import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import { data } from './Helper/Product_data'
import Single_product_detailed from './Components/Product_components/Single_product_detailed';
import Shopping_cart from './Components/Shopping_cart';


function App() {
  // to store cart elements.
  const[cart, setCart] = useState(JSON.parse(localStorage.getItem('Music_Shop_Cart')) || []);

  // to change cart info at LS every time we add smth...
  useEffect(() => {
    localStorage.setItem('Music_Shop_Cart', JSON.stringify(cart));
  }, [cart])

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
    let exist = cart.find((el) => el.id === product.id);
    
    if(exist){
      alert('Product is already added!');
    }else{
      setCart([...cart, product]);
    }
  }

   // to remove element from shopping cart;
  function onRemove(product){
    setCart(cart.filter((el) => el.id !== product.id));
  }

  return (
    <Router>
      <div className="App">
        <NavBar cart={ cart }/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            path='/products' 
            element={
                <Product 
                  set_el_id={set_el_id}
                  colectData={colectData}
                  all_elements={all_elements}
                  data={data}
                  onAdd={onAdd}
                />
              } 
            />
          <Route 
            index
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
          <Route 
            index
            path={`/shopping-cart`} 
            element={
              <Shopping_cart 
                cart={cart}
                onRemove={onRemove}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
