import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";

export const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { addToCart, cartItems } = useContext(ShopContext);

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("wishlistItems");
    if (storedItems) {
      setWishlistItems(JSON.parse(storedItems));
    }
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlistItems = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlistItems);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
  };

  return (
    <div className="product">
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <div className="wishlistItems">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlistItem">
              <img src={item.productImage} alt={item.productName} />
              <div className="description">
                <p>
                  <b>{item.productName}</b>
                </p>
              </div>
              <button
                className="addToCartBttn"
                onClick={() => handleAddToCart(item.id)}
              >
                Add to Cart{" "}
                {cartItems[item.id] > 0 && `(${cartItems[item.id]})`}
              </button>
              <button onClick={() => removeFromWishlist(item.id)}>
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/*<button className="wishlist" onClick={handleClick}>
{isFilled ? (
  <Heart size={32} color="#f50000" weight="fill" />
) : (
  <Heart size={32} color="#030303" weight="bold" />
)}
</button>
import { Heart } from "phosphor-react";*/
