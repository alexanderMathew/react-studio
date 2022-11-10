import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  function handleClick(item) {
      setCart([...cart, item]);
  }

  const itemList = cart.map((item, index) => (
    <div key={index}>
      <p className="cartItem">{item.name}: ${item.price}</p>
    </div>
  ));

const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="App">
      <div className="title">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      </div>
    <div className="item-cart-container">
      <div className="items">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item}
          handleClick={handleClick}
          >
          </BakeryItem>
      ))}
     </div>
      <div className="cart">
        <h1>Cart</h1>
        {itemList}
        <p className="total">Total: ${totalPrice.toFixed(2)}</p>

      </div>
      </div>
      </div>
 
  );
}

export default App;