// Function to add product to cart
function addToCart(productName, productPrice) {
    // Retrieve cart items from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Add the new product to the cart
    cartItems.push({ name: productName, price: productPrice });
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Alert to confirm addition
    alert(`${productName} has been added to your cart!`);
  }
  
  // Function to display cart items on the cart page
  function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    cartItemsContainer.innerHTML = '';
  
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
      });
    }
  }
  
  // Run the displayCartItems function only on the cart page
  if (document.getElementById('cart-items')) {
    displayCartItems();
  }
  