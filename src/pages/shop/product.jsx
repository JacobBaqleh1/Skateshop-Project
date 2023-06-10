import { ShopContext } from "../../context/shop-context";
import { useContext, useState, useEffect } from "react";
import { Heart } from "phosphor-react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const cartItemCount = cartItems[id];

  useEffect(() => {
    const storedItems = localStorage.getItem("wishlistItems");
    const wishlistItems = storedItems ? JSON.parse(storedItems) : [];
    const itemIndex = wishlistItems.findIndex((item) => item.id === id);
    setIsInWishlist(itemIndex !== -1);
  }, [id]);

  const toggleWishlist = (id) => {
    const storedItems = localStorage.getItem("wishlistItems");
    const wishlistItems = storedItems ? JSON.parse(storedItems) : [];
    const itemIndex = wishlistItems.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      // If item exists in wishlist, remove it
      wishlistItems.splice(itemIndex, 1);
    } else {
      // If item does not exist in wishlist, add it
      wishlistItems.push({ id, productName, productImage, price });
    }

    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <button className="addToWishlistBttn" onClick={() => toggleWishlist(id)}>
        {isInWishlist ? (
          <Heart size={32} color="#f50000" weight="fill" />
        ) : (
          <Heart size={32} color="#030303" weight="bold" />
        )}
      </button>
    </div>
  );
};
