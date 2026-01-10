// // 


// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const buildDerivedId = (product) => {
//     const sizePart = product.selectedSize ? `-${product.selectedSize}` : "";
//     return `${(product.name || "item")
//       .toString()
//       .replace(/\s+/g, "_")}-${product.price ?? 0}${sizePart}`;
//   };

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const derivedId = product.id ?? buildDerivedId(product);

//       const existingItem = prevCart.find(
//         (item) => item.id === derivedId || item._derivedId === derivedId
//       );

//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === derivedId || item._derivedId === derivedId
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [
//         ...prevCart,
//         {
//           ...product,
//           id: derivedId,
//           _derivedId: derivedId,
//           quantity: 1,
//         },
//       ];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) =>
//       prevCart.filter(
//         (item) => item.id !== productId && item._derivedId !== productId
//       )
//     );
//   };

//   const updateQuantity = (productId, quantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId || item._derivedId === productId
//           ? { ...item, quantity: Math.max(1, quantity) }
//           : item
//       )
//     );
//   };

//   const getCartTotal = () => {
//     return cart.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         getCartTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
