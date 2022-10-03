import './App.css';
import { useState, useEffect } from 'react';
import { CartAddRemove } from './components/CartAddRemove/CartAddRemove';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { DivHeader } from "./components/Header/styles"
import { Resultados } from './components/Resultados/Resultados';
import { BtnNullFilter } from './components/BtnNullFilter/BtnNullFilter';

function App() {
  const [cart, setCart] = useState([])

  const [size] = useState([])

  const [products, setProducts] = useState([]);

  const [input, setInput] = useState("")

  const [cartTotal, setCartTotal] = useState(0)

  const [filteredProducts, setFilteredProducts] = useState([])

  const removeProducts = () => {
    return setCart([])
  }

  const countTotal = () => {
    const total = []
    if(cart.length > 0) {
      cart.forEach((product) => {
        total.push(product.price)
      })
    }

    const valorFinal = total.reduce((valorAnterior, valorAtual) => 
      valorAnterior + valorAtual, 0)

    setCartTotal(valorFinal.toFixed(2))
  }

  useEffect(()=> 
    countTotal(), [cart]
  )
  
  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
    .then(res => res.json())
    .then(res => {
      setProducts(res)
      setFilteredProducts(res)
    })
    .catch(err => console.log(err))
    
  }, [])
  
  return (
    <div className='App'>
        <Header DivHeader={DivHeader} input={input} setInput={setInput} products={products} setFilteredProducts={setFilteredProducts} cart={cart} setCart={setCart}/>

      <div className='Main'>

      <div className='HeaderPrinc'>
        <div className='HeaderSub'>
          <Resultados input={input} />
          <BtnNullFilter setCart={setCart} setProducts={setProducts} products={products} setFilteredProducts={setFilteredProducts} />
        </div>
          <ProductsList products={products} filteredProducts={filteredProducts} cart={cart} setCart={setCart} />
      </div>

        <CartAddRemove cart={cart} setCart={setCart} size={size} products={products} cartTotal={cartTotal} removeProducts={removeProducts} />
      
      </div>

    </div>
    );
}

export default App;
